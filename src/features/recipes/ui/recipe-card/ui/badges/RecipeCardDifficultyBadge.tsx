import { ChefHat } from 'lucide-react'

import { recipeCardDifficultyBadgeVariants } from '../../styles/recipe-card.styles'
import { TRecipeCardDifficultyBadgeVariants } from '../../types/recipe-card.types'

interface Props {
  tone: TRecipeCardDifficultyBadgeVariants['tone']
  size?: TRecipeCardDifficultyBadgeVariants['size']
  hatCount: number
}

export function RecipeCardDifficultyBadge({ tone, size, hatCount }: Props) {
  return (
    <div className={recipeCardDifficultyBadgeVariants({ tone, size })}>
      {[...Array(hatCount)].map((_, index) => (
        <ChefHat
          key={index}
          className={size === 'sm' ? 'size-3' : 'size-4'}
        />
      ))}
      {size !== 'sm' && (
        <span className="capitalize">{tone?.toLocaleLowerCase()}</span>
      )}
    </div>
  )
}
