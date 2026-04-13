'use client'

import { cn } from '@/shared/utils'
import { LucideIcon } from 'lucide-react'
import { useState } from 'react'

import HeadingWithIcon from '@/shared/components/custom-ui/with-icon/heading-with-icon/HeadingWithIcon'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem
} from '@/shared/components/ui/carousel'

import { GetAllRecipesQuery } from '@/__generated__/graphql'

import { RecipeCard } from '../recipes/ui/recipe-card/RecipeCard'
import { TRecipeCardSize } from '../recipes/ui/recipe-card/types/recipe-card.types'

interface Props {
  Icon: LucideIcon
  title: string
  recipes: GetAllRecipesQuery['recipes']
  size?: TRecipeCardSize
}

export function RecipeCarousel({ Icon, title, recipes, size }: Props) {
  const [api, setApi] = useState<CarouselApi>()

  return (
    <div>
      <HeadingWithIcon Icon={Icon}>{title}</HeadingWithIcon>

      <Carousel setApi={setApi}>
        <CarouselContent className="px-5 py-4">
          {recipes.map(recipe => (
            <CarouselItem
              key={recipe.slug}
              className={cn(
                'group transition-transform duration-300 will-change-transform hover:scale-[1.02]',
                size === 'sm' ? 'basis-[18%]' : 'basis-[22%]',
                size === 'sm' ? 'hover:-rotate-3' : 'hover:rotate-3'
              )}
            >
              <RecipeCard
                recipe={recipe}
                size={size}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
