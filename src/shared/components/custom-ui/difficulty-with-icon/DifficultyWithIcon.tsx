import { cn } from '@/shared/utils'
import { ChefHat, LucideIcon } from 'lucide-react'

import { Difficulty } from '@/__generated__/graphql'

interface Props {
  Icon?: LucideIcon
  difficulty: Difficulty
  className?: string
}

function DifficultyWithIcon({ difficulty, Icon = ChefHat, className }: Props) {
  const isEasy = difficulty === 'EASY'
  const isMedium = difficulty === 'MEDIUM'
  const count = isEasy ? 1 : isMedium ? 2 : 3

  return (
    <div
      className={cn(
        'inline-flex items-center gap-0.5 rounded-sm p-1 text-xs font-bold',
        isEasy
          ? 'bg-green-200 text-green-700'
          : isMedium
            ? 'bg-orange-100 text-orange-400'
            : 'text-destructive bg-[#FEEADD]',
        className
      )}
    >
      <div className="flex">
        {Array.from({ length: count }, (_, index) => (
          <Icon
            key={index}
            width={18}
            height={18}
          />
        ))}
      </div>
      <span>{difficulty[0] + difficulty.toLocaleLowerCase().slice(1)}</span>
    </div>
  )
}

export default DifficultyWithIcon
