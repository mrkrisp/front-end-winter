import { LucideIcon } from 'lucide-react'
import { PropsWithChildren } from 'react'

import { recipeCardBadgeVariants } from '../../styles/recipe-card.styles'
import { TRecipeCardSize } from '../../types/recipe-card.types'

interface Props extends PropsWithChildren {
  Icon?: LucideIcon
  size: TRecipeCardSize
}

export function RecipeCardBadge({ Icon, children, size }: Props) {
  return (
    <div className={recipeCardBadgeVariants({ size })}>
      {!!Icon && <Icon className={size === 'sm' ? 'size-3' : 'size-3.5'} />}
      <span>{children}</span>
    </div>
  )
}
