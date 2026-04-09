import { cn } from '@/shared/utils'
import { ChevronDown, CornerDownRight } from 'lucide-react'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '../../ui/collapsible'
import { ISidebarMenuAccordionItem } from './sidebar-menu-accordion.types'

interface Props {
  item: ISidebarMenuAccordionItem
  activeValue?: string
  onValueChange?: (filter: string) => void
}

export function MenuAccordionItem({ item, activeValue, onValueChange }: Props) {
  return (
    <div>
      <Collapsible defaultOpen={item.isInitialOpen}>
        <CollapsibleTrigger
          className={cn(
            'flex w-full items-center justify-between rounded-xl px-2 py-1.5 opacity-80',
            {
              'bg-accent': item.items.some(child => child.value === activeValue)
            }
          )}
        >
          <span className="flex items-center gap-3 font-medium">
            <item.icon size={22} />
            {item.name}
          </span>
          <ChevronDown size={20} />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <ul className="space-y-2 pt-2 pl-5">
            {item.items.map(child => (
              <li
                key={child.value}
                className={cn('opacity-60', {
                  'opacity-100': activeValue === child.value
                })}
              >
                <button
                  className="flex w-full items-center justify-between"
                  onClick={() => onValueChange?.(child.value)}
                >
                  <span className="flex items-center gap-1">
                    <CornerDownRight size={16} />
                    <span>{child.label}</span>
                  </span>
                  {!!child.badgeValue && (
                    <span className="rounded-xl bg-red-200 px-1 py-0.5 text-xs font-semibold text-red-600">
                      {child.badgeValue}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
