import { VariantProps } from 'class-variance-authority'

import {
  recipeCardDifficultyBadgeVariants,
  recipeCardVariants
} from '../styles/recipe-card.styles'

export type TRecipeCardSize = VariantProps<typeof recipeCardVariants>['size']
export type TRecipeCardDifficultyBadgeVariants = VariantProps<
  typeof recipeCardDifficultyBadgeVariants
>
