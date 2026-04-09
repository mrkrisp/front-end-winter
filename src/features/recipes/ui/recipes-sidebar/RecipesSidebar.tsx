'use client'

import { Search } from 'lucide-react'

import { SidebarMenuAccordion } from '@/shared/components/custom-ui/sidebar-menu-accordion/SidebarMenuAccordion'
import InputWithIcon from '@/shared/components/custom-ui/with-icon/input-with-icon/InputWithIcon'

import { recipesSidebarMenuData } from './recipes-sidebar-menu.data'

interface Props {
  filter: string
  setFilter: (filter: string) => void
  setSearchTerm: (searchTerm: string) => void
  searchTerm: string
}

export function RecipesSidebar({
  filter,
  setFilter,
  searchTerm,
  setSearchTerm
}: Props) {
  const setActiveFilter = (filter: string) => {
    setFilter(filter)
  }

  return (
    <div className="w-full max-w-64 space-y-6 rounded-2xl bg-white p-5">
      <InputWithIcon
        Icon={Search}
        placeholder="Search by recipes"
        value={searchTerm}
        onChange={e => setSearchTerm(e.currentTarget.value)}
      />
      <SidebarMenuAccordion
        data={recipesSidebarMenuData}
        activeValue={filter}
        onValueChange={setActiveFilter}
      />
    </div>
  )
}
