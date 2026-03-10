import { LucideIcon } from 'lucide-react'

interface Props {
  Icon?: LucideIcon
  children: React.ReactNode
}

function BadgeWithIcon({ Icon, children }: Props) {
  return (
    <div className="flex items-center gap-0.5 rounded-[0.37rem] bg-[#e9e9e9] px-1.5 py-0.5 text-xs font-semibold text-gray-700">
      {!!Icon && (
        <Icon
          width={12}
          height={12}
        />
      )}
      <span>{children}</span>
    </div>
  )
}

export default BadgeWithIcon
