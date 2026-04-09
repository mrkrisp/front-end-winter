import { VariantProps, cva } from 'class-variance-authority'
import { Clock5, Flame } from 'lucide-react'
import Image from 'next/image'

import LikeButton from '@/features/reactions/likes/LikeButton'

import BadgeWithIcon from '@/shared/components/custom-ui/with-icon/badge-with-icon/BadgeWithIcon'
import DifficultyWithIcon from '@/shared/components/custom-ui/with-icon/difficulty-with-icon/DifficultyWithIcon'

import { GetAllRecipesQuery } from '@/__generated__/graphql'

const recipeCardVariants = cva('bg-white rounded-3xl flex flex-col gap-1', {
  variants: {
    size: {
      default: 'p-3.5 w-75',
      sm: 'p-3 w-60'
    }
  },
  defaultVariants: {
    size: 'default'
  }
})

interface Props {
  recipe: GetAllRecipesQuery['recipes'][0]
  size?: VariantProps<typeof recipeCardVariants>['size']
}

export function RecipeCard({ recipe, size }: Props) {
  return (
    <div className={recipeCardVariants({ size })}>
      <div className="flex items-center justify-center">
        <Image
          src={'/images/recipe-placeholder2.jpg'}
          width={320}
          height={140}
          alt="recipe image"
          className="mb-2 h-35 w-full rounded-2xl object-cover"
        />
      </div>
      <h3 className="mb-0 truncate font-semibold text-nowrap">
        {recipe.title}
      </h3>
      <p className="text-muted-foreground m-0 line-clamp-2 text-sm">
        {recipe.description}
      </p>
      <div className="mb-2 flex items-center gap-1">
        <BadgeWithIcon Icon={Flame}>{recipe.calories}kcal</BadgeWithIcon>
        <BadgeWithIcon Icon={Clock5}>{recipe.cookingTime}min</BadgeWithIcon>
      </div>
      <div className="flex justify-between">
        <DifficultyWithIcon difficulty={recipe.difficulty} />
        <LikeButton
          id={recipe.id}
          likesCount={recipe.likesCount}
          isLiked={recipe.isLiked}
        />
      </div>
    </div>
  )
}
