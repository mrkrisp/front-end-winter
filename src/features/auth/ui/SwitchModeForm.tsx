import Link from 'next/link'

import { PAGES } from '@/shared/config/page.config'

interface Props {
  isRegister: boolean
}

export function SwitchModeForm({ isRegister }: Props) {
  return (
    <div className="mt-3 text-center">
      {/* switch mode form */}
      {isRegister ? (
        <div>
          Already have an account?{' '}
          <Link
            className="underline"
            href={PAGES.LOGIN}
          >
            Login
          </Link>
        </div>
      ) : (
        <div>
          Don`t have an account?{' '}
          <Link
            className="underline"
            href={PAGES.REGISTER}
          >
            Register
          </Link>
        </div>
      )}
    </div>
  )
}
