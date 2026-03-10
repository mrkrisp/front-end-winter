import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'
import type { Metadata } from 'next'

import RecipesPage from '@/features/recipes/ui/RecipesPage'

export const metadata: Metadata = {
  title: 'Recipes',
  ...NO_INDEX_PAGE
}

export default function Page() {
  return <RecipesPage />
}
