'use client'

import { useQueryState } from 'nuqs'

import { useDebounce } from '@/shared/hooks/useDebounce'

import { RecipesBanners } from './recipes-banners/RecipesBanners'
import { RecipesCatalog } from './recipes-catalog/RecipesCatalog'
import { RecipesSidebar } from './recipes-sidebar/RecipesSidebar'

function RecipesPage() {
  const [searchTerm, setSearchTerm] = useQueryState('q', {
    defaultValue: ''
  })
  const [filter, setFilter] = useQueryState('f', {
    defaultValue: ''
  })

  const debouncedSearchTerm = useDebounce(searchTerm, 400)

  return (
    <div className="grid grid-cols-[1fr_minmax(0,5fr)]">
      <RecipesSidebar
        filter={filter}
        setFilter={setFilter}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <main>
        <RecipesBanners />
        <RecipesCatalog />
      </main>
    </div>
  )
}

export default RecipesPage
