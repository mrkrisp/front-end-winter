import { Eye } from 'lucide-react'

import LikeButton from '@/features/reactions/likes/LikeButton'

import { formatCompactNumber } from '@/shared/utils/format-compact-number.util'

import { Difficulty } from '@/__generated__/graphql'

import { recipeCardFooterTextStyle } from '../styles/recipe-card.styles'
import { TRecipeCardSize } from '../types/recipe-card.types'
import { RecipeCardDifficultyBadge } from './badges/RecipeCardDifficultyBadge'

interface Props {
  id: string
  views: number
  likes: number
  isLiked: boolean
  difficulty: Difficulty
  size: TRecipeCardSize
}

export function RecipeCardFooter({
  id,
  likes,
  isLiked,
  difficulty,
  views,
  size
}: Props) {
  const hatCount =
    difficulty === Difficulty.Easy
      ? 1
      : difficulty === Difficulty.Medium
        ? 2
        : 3

  return (
    <div className="mt-4 flex items-center justify-between gap-3">
      <RecipeCardDifficultyBadge
        hatCount={hatCount}
        tone={difficulty}
        size={size}
      />
      <div className="flex items-center gap-3">
        <LikeButton
          id={id}
          likesCount={likes}
          isLiked={isLiked}
          size={size}
          className={recipeCardFooterTextStyle}
        />
        <span className={recipeCardFooterTextStyle}>
          <Eye className={size === 'sm' ? 'size-3.5' : 'size-4'} />
          {formatCompactNumber(views)}
        </span>
      </div>
    </div>
  )
}
