import { cn } from '@/shared/utils'
import { LucideIcon } from 'lucide-react'
import { ComponentProps } from 'react'

import { Input } from '@/shared/components/ui/input'

interface Props extends ComponentProps<'input'> {
  Icon: LucideIcon
}

function InputWithIcon({ Icon, type, className, ...props }: Props) {
  return (
    <div className={cn('relative', className)}>
      <Icon
        size={17}
        className="absolute bottom-2.5 left-3 opacity-50"
      />
      <Input
        type={type}
        className={'rounded-xl bg-[#f1f1f1] pl-9'}
        {...props}
      />
    </div>
  )
}

export default InputWithIcon
