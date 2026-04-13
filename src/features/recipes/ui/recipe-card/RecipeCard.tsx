import { EllipsisVertical } from 'lucide-react'

import { GetAllRecipesQuery } from '@/__generated__/graphql'

import {
  recipeCardDescriptionVariants,
  recipeCardTitleVariants,
  recipeCardVariants
} from './styles/recipe-card.styles'
import { TRecipeCardSize } from './types/recipe-card.types'
import { RecipeCardFooter } from './ui/RecipeCardFooter'
import { RecipeCardImage } from './ui/RecipeCardImage'
import { RecipeCardMetaBadges } from './ui/badges/RecipeCardMetaBadges'

interface Props {
  recipe: GetAllRecipesQuery['recipes'][number]
  size?: TRecipeCardSize
}

export function RecipeCard({ recipe, size }: Props) {
  return (
    <div className={recipeCardVariants({ size })}>
      <RecipeCardImage
        slug={recipe.slug}
        url={'/images/recipe-placeholder2.jpg'}
        title={recipe.title}
        size={size}
      />
      <div className="mt-3 flex items-center justify-between gap-3">
        <h3 className={recipeCardTitleVariants({ size })}>{recipe.title}</h3>
        <button
          type="button"
          className="shrink-0 text-black/40"
          aria-label="More actions"
          onClick={e => e.preventDefault()}
        >
          <EllipsisVertical className={size === 'sm' ? 'size-3.5' : 'size-4'} />
        </button>
      </div>

      <p className={recipeCardDescriptionVariants({ size })}>
        {recipe.description}
      </p>

      <RecipeCardMetaBadges
        size={size}
        cookingTime={recipe.cookingTime}
        calories={recipe.calories}
      />

      <RecipeCardFooter
        id={recipe.id}
        likes={recipe.likesCount}
        isLiked={recipe.isLiked}
        difficulty={recipe.difficulty}
        views={14683}
        size={size}
      />
    </div>
  )
}
