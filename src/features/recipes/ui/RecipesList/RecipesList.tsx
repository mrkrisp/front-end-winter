'use client'

import { useQuery } from '@apollo/client/react'

import { GetAllRecipesDocument } from '@/__generated__/graphql'

import { RecipesListItem } from './RecipesListItem'

interface Props {
  sortBy: 'new' | 'recommended' | 'popular'
}

function RecipesList({ sortBy }: Props) {
  const { data, loading } = useQuery(GetAllRecipesDocument, {
    variables: {
      input: {
        limit: 5,
        page: 1,
        sort: sortBy
      }
    },
    fetchPolicy: 'cache-first',
    nextFetchPolicy: 'cache-first'
  })

  if (!data?.recipes || loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex items-center gap-3">
      {data.recipes.map(recipe => {
        return (
          <RecipesListItem
            key={recipe.id}
            {...recipe}
          />
        )
      })}
    </div>
  )
}

export default RecipesList
