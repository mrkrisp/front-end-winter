import { ChefHat, Star } from 'lucide-react'

import { RecipeCarousel } from '@/features/recipe-carousel/RecipeCarousel'

interface Props {}

export function RecipesCatalog({}: Props) {
  return (
    <div className="space-y-6">
      <RecipeCarousel
        Icon={ChefHat}
        title="Recommended"
        sortBy="recommended"
      />
      <RecipeCarousel
        Icon={Star}
        title="Popular"
        sortBy="popular"
      />
    </div>
  )
}
