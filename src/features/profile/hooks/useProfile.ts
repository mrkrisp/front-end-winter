import { useQuery } from '@apollo/client/react'

import { GetProfileDocument } from '@/__generated__/graphql'

export function useProfile() {
  const { data, loading } = useQuery(GetProfileDocument, {
    fetchPolicy: 'cache-first',
    nextFetchPolicy: 'cache-first'
  })

  return {
    data: data ?? null,
    isLoading: loading,
    isLoggedIn: !!data?.me
  }
}
