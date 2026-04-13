import { cn } from '@/shared/utils'
import Image from 'next/image'
import Link from 'next/link'

import { PAGES } from '@/shared/config/page.config'

import { TRecipeCardSize } from '../types/recipe-card.types'

interface Props {
  slug: string
  url: string
  title: string
  size: TRecipeCardSize
}

export function RecipeCardImage({ size, url, title, slug }: Props) {
  return (
    <Link
      href={PAGES.RECIPE_DETAILS(slug)}
      className={'relative w-full'}
    >
      <Image
        src={url}
        alt={title}
        className={cn(
          'rounded-3xl object-cover transition-transform duration-200 will-change-transform group-hover:scale-[1.03]',
          size === 'sm' ? 'h-36 w-60' : 'h-36 w-72'
        )}
        width={size === 'sm' ? 240 : 300}
        height={size === 'sm' ? 140 : 160}
        draggable={false}
      />
    </Link>
  )
}
