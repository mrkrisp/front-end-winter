import { cn } from '@/shared/utils'
import { useMutation } from '@apollo/client/react'
import { Heart } from 'lucide-react'
import { ComponentProps } from 'react'
import toast from 'react-hot-toast'

import { TRecipeCardSize } from '@/features/recipes/ui/recipe-card/types/recipe-card.types'

import { formatCompactNumber } from '@/shared/utils/format-compact-number.util'

import { ToggleLikeDocument } from '@/__generated__/graphql'

interface Props extends ComponentProps<'button'> {
  id: string
  likesCount: number
  isLiked: boolean
  size?: TRecipeCardSize
}

function LikeButton({ id, likesCount, isLiked, size, className }: Props) {
  const [toggleLike] = useMutation(ToggleLikeDocument, {
    update(cache) {
      cache.modify({
        id: cache.identify({ __typename: 'RecipeModel', id }),
        fields: {
          isLiked(isLiked) {
            return !isLiked
          },
          likesCount(likes = 0, { readField }) {
            const isLiked = readField('isLiked')
            return isLiked ? Math.max(0, likes - 1) : likes + 1
          }
        }
      })
    },
    onError() {
      toast.error('Unauthorized')
    }
  })

  const onClickLike = () => {
    toggleLike({ variables: { recipeId: id } })
  }

  return (
    <button
      className={cn('flex items-center gap-0.5', className)}
      onClick={onClickLike}
    >
      <Heart
        className={cn(
          size === 'sm' ? 'size-3.5' : 'size-4',
          isLiked
            ? 'text-destructive fill-destructive hover:fill-destructive/65 hover:text-destructive/35'
            : 'hover:fill-destructive/50 hover:text-destructive/20 fill-gray-500',
          'transition-colors'
        )}
        width={20}
        height={20}
      />
      <span>{formatCompactNumber(likesCount)}</span>
    </button>
  )
}

export default LikeButton
