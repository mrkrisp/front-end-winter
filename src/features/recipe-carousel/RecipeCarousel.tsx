import { LucideIcon } from 'lucide-react'

import HeadingWithIcon from '@/shared/components/custom-ui/with-icon/heading-with-icon/HeadingWithIcon'

import RecipesList from '../recipes/ui/recipes-list/RecipesList'

interface Props {
  Icon: LucideIcon
  title: string
  sortBy: 'new' | 'recommended' | 'popular'
}

export function RecipeCarousel({ Icon, title, sortBy }: Props) {
  return (
    <div className="space-y-3">
      <HeadingWithIcon Icon={Icon}>{title}</HeadingWithIcon>
      <RecipesList sortBy={sortBy} />
    </div>
  )
}
