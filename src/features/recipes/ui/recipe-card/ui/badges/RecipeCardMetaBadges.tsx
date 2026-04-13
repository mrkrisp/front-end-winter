import { Clock5, Flame } from 'lucide-react'

import { GetAllRecipesQuery } from '@/__generated__/graphql'

import { TRecipeCardSize } from '../../types/recipe-card.types'
import { RecipeCardBadge } from './RecipeCardBadge'

interface Props {
  cookingTime: GetAllRecipesQuery['recipes'][number]['cookingTime']
  calories: GetAllRecipesQuery['recipes'][number]['calories']
  size: TRecipeCardSize
}

export function RecipeCardMetaBadges({ size, cookingTime, calories }: Props) {
  return (
    <div className="mt-2 flex items-center gap-1">
      <RecipeCardBadge size={size}>Main dish</RecipeCardBadge>
      <RecipeCardBadge
        size={size}
        Icon={Flame}
      >
        {calories}kcal
      </RecipeCardBadge>
      {size !== 'sm' ? (
        <RecipeCardBadge
          size={size}
          Icon={Clock5}
        >
          {cookingTime}min
        </RecipeCardBadge>
      ) : (
        <RecipeCardBadge size={size}>+1</RecipeCardBadge>
      )}
    </div>
  )
}
