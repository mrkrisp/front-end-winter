import { useQuery } from '@apollo/client/react'

import { GetMeDocument } from '@/__generated__/graphql'

export function useProfile() {
  const { data, loading } = useQuery(GetMeDocument, {
    fetchPolicy: 'cache-first',
    nextFetchPolicy: 'cache-first'
  })

  return {
    user: data?.me ?? null,
    isLoading: loading,
    isLoggedIn: !!data?.me
  }
}
