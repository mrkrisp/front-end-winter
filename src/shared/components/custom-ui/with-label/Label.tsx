import { LucideIcon } from 'lucide-react'

interface Props {
  label: string
  Icon?: LucideIcon
}

function Label({ label, Icon }: Props) {
  return (
    <>
      <span className="mb-1 block text-sm opacity-50">{label}</span>
      {!!Icon && (
        <Icon
          size={17}
          className="absolute bottom-2.5 left-3 opacity-50"
        />
      )}
    </>
  )
}

export default Label
