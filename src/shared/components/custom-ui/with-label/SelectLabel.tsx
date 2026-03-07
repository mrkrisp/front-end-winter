import { LucideIcon } from 'lucide-react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel as SelectInsideLabel,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../../ui/select'
import Label from './Label'

interface Props {
  label: string
  Icon?: LucideIcon
  options?: { value: string; label: string }[]
  value?: string | null
  onChange?: (value: string | null) => void
}

export function SelectLabel({
  label,
  Icon,
  options = [],
  value,
  onChange
}: Props) {
  return (
    <label className="relative block">
      <Label
        Icon={Icon}
        label={label}
      />
      <Select
        value={value || undefined}
        onValueChange={onChange}
      >
        <SelectTrigger className="w-full rounded-xl bg-[#f1f1f1] pl-9">
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectInsideLabel>{label}</SelectInsideLabel>
            {options.map(item => (
              <SelectItem
                key={item.value}
                value={item.value}
              >
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </label>
  )
}
