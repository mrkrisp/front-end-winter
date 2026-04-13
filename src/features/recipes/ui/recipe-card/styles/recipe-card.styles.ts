import { cva } from 'class-variance-authority'

export const recipeCardVariants = cva('bg-white rounded-3xl', {
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

export const recipeCardBadgeVariants = cva(
  'flex items-center gap-1 rounded-sm bg-[#e9e9e9] px-1.5 py-0.5 text-xs font-semibold text-gray-700',
  {
    variants: {
      size: {
        default: 'h-4.5 text-base px-1.5',
        sm: 'h-4 px-0.5 text-sm'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
)

export const recipeCardTitleVariants = cva(
  'line-clamp-1 tracking-tight text-black font-semibold',
  {
    variants: {
      size: {
        default: 'text-lg',
        sm: 'text-base'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
)

export const recipeCardDescriptionVariants = cva(
  'line-clamp-2 text-black/55 text-sm leading-5',
  {
    variants: {
      size: {
        default: 'mt-1',
        sm: 'mt-0.5'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
)

export const recipeCardFooterTextStyle =
  'flex justify-between items-center gap-1.5 font-medium  text-gray-500 text-sm'

export const recipeCardDifficultyBadgeVariants = cva(
  'flex items-center gap-0.5 rounded-sm px-1.5 py-0.5 font-semibold',
  {
    variants: {
      tone: {
        EASY: 'bg-emerald-100 text-emerald-600',
        MEDIUM: 'bg-amber-100 text-amber-600',
        HARD: 'bg-red-100 text-red-500'
      },
      size: {
        default: 'text-xs',
        sm: 'text-xs'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
)
