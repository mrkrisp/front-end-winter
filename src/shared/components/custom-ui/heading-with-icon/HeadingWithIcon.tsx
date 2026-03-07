import { LucideIcon } from 'lucide-react'

interface Props {
  Icon: LucideIcon
  children: React.ReactNode
}

function HeadingWithIcon({ Icon, children }: Props) {
  return (
    <div className="flex items-center">
      <Icon className="mr-1.5 opacity-50" />
      <h1 className="text-lg font-bold">{children}</h1>
    </div>
  )
}

export default HeadingWithIcon
