import { ChefHat, Star } from 'lucide-react'

import HeadingWithIcon from '@/shared/components/custom-ui/heading-with-icon/HeadingWithIcon'

import RecipesList from './RecipesList/RecipesList'

function RecipesPage() {
  return (
    <div className="space-y-3">
      <div className="mb-6 space-y-3">
        <HeadingWithIcon Icon={ChefHat}>Recommended</HeadingWithIcon>
        <RecipesList sortBy="recommended" />
      </div>
      <div className="space-y-3">
        <HeadingWithIcon Icon={Star}>Popular</HeadingWithIcon>
        <RecipesList sortBy="popular" />
      </div>
    </div>
  )
}

export default RecipesPage
