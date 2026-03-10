import { cn } from '@/shared/utils'
import { useMutation } from '@apollo/client/react'
import { Heart } from 'lucide-react'
import { ComponentProps } from 'react'
import toast from 'react-hot-toast'

import { ToggleLikeDocument } from '@/__generated__/graphql'

interface Props extends ComponentProps<'button'> {
  id: string
  likesCount: number
  isLiked: boolean
}

function LikeButton({ id, likesCount, isLiked, className }: Props) {
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
      className={cn('flex items-center gap-0.5 text-gray-500', className)}
      onClick={onClickLike}
    >
      <Heart
        className={cn(
          isLiked
            ? 'text-destructive fill-destructive hover:fill-destructive/65 hover:text-destructive/35'
            : 'hover:fill-destructive/50 hover:text-destructive/20 fill-gray-500',
          'transition-colors'
        )}
        width={20}
        height={20}
      />
      <span>{likesCount}</span>
    </button>
  )
}

export default LikeButton
