import { MenuAccordionItem } from './MenuAccordionItem'
import { ISidebarMenuAccordionItem } from './sidebar-menu-accordion.types'

interface Props {
  data: ISidebarMenuAccordionItem[]
  activeValue?: string
  onValueChange?: (filter: string) => void
}

export function SidebarMenuAccordion({
  data,
  activeValue,
  onValueChange
}: Props) {
  return (
    <div className="space-y-3">
      {data.map(item => (
        <MenuAccordionItem
          key={item.name}
          item={item}
          activeValue={activeValue}
          onValueChange={onValueChange}
        />
      ))}
    </div>
  )
}
