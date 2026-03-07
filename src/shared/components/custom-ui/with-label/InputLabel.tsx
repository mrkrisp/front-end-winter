import { cn } from '@/shared/utils'
import { LucideIcon } from 'lucide-react'
import { ComponentProps } from 'react'

import { Input } from '@/shared/components/ui/input'

import Label from './Label'

interface Props extends ComponentProps<'input'> {
  label: string
  Icon?: LucideIcon
}

function InputLabel({ label, Icon, className, type, ...props }: Props) {
  return (
    <label className="relative block">
      <Label
        Icon={Icon}
        label={label}
      />
      <Input
        type={type}
        className={cn(
          className,
          'rounded-xl bg-[#f1f1f1]',
          !!Icon ? 'pl-9' : ''
        )}
        {...props}
      />
    </label>
  )
}

export default InputLabel
