import { Clock5, Flame } from 'lucide-react'
import Image from 'next/image'

import LikeButton from '@/features/reactions/likes/LikeButton'

import BadgeWithIcon from '@/shared/components/custom-ui/badge-with-icon/BadgeWithIcon'
import DifficultyWithIcon from '@/shared/components/custom-ui/difficulty-with-icon/DifficultyWithIcon'

import { GetAllRecipesQuery } from '@/__generated__/graphql'

export function RecipesListItem({
  id,
  title,
  description,
  difficulty,
  calories,
  cookingTime,
  likesCount,
  isLiked
}: GetAllRecipesQuery['recipes'][0]) {
  return (
    <div className="flex max-w-80 flex-col gap-1 rounded-3xl bg-white p-3.5">
      <div className="flex items-center justify-center">
        <Image
          src={'/images/recipe-placeholder2.jpg'}
          width={478}
          height={316}
          alt="recipe image"
          className="mb-2 h-35 w-full rounded-2xl object-cover"
        />
      </div>
      <h3 className="mb-0 truncate font-semibold text-nowrap">{title}</h3>
      <p className="text-muted-foreground m-0 line-clamp-2 text-sm">
        {description}
      </p>
      <div className="mb-2 flex items-center gap-1">
        <BadgeWithIcon Icon={Flame}>{calories}kcal</BadgeWithIcon>
        <BadgeWithIcon Icon={Clock5}>{cookingTime}min</BadgeWithIcon>
      </div>
      <div className="flex justify-between">
        <DifficultyWithIcon difficulty={difficulty} />
        <LikeButton
          id={id}
          likesCount={likesCount}
          isLiked={isLiked}
        />
      </div>
    </div>
  )
}
