'use client'

import { useQuery } from '@apollo/client/react'

import { GetAllRecipesDocument } from '@/__generated__/graphql'

import { RecipeItemSkeleton } from '../RecipeItemSkeleton'
import { RecipeCard } from '../recipe-card/RecipeCard'
import { TRecipeCardSize } from '../recipe-card/types/recipe-card.types'

interface Props {
  sortBy: 'new' | 'recommended' | 'popular'
  searchTerm?: string
  size?: TRecipeCardSize
}

function RecipesList({ sortBy, searchTerm, size }: Props) {
  const { data, loading } = useQuery(GetAllRecipesDocument, {
    variables: {
      input: {
        limit: 5,
        page: 1,
        sort: sortBy,
        searchTerm
      }
    },
    fetchPolicy: 'cache-first',
    nextFetchPolicy: 'cache-first'
  })

  if (!data?.recipes || loading) {
    return (
      <div className="flex items-center gap-3">
        <RecipeItemSkeleton count={3} />
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3">
      {data.recipes.map(recipe => {
        return (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            size={size}
          />
        )
      })}
    </div>
  )
}

export default RecipesList
