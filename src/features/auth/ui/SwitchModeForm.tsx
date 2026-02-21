import Link from 'next/link'

import { PAGES } from '@/shared/config/page.config'

interface Props {
  isRegister: boolean
}

export function SwitchModeForm({ isRegister }: Props) {
  return (
    <div className="mt-5 text-center">
      {/* switch mode form */}
      {isRegister ? (
        <div>
          Already have an account?{' '}
          <Link
            className="underline"
            href={PAGES.LOGIN}
          >
            Sign In
          </Link>
        </div>
      ) : (
        <div>
          Don`t have an account?{' '}
          <Link
            className="underline"
            href={PAGES.REGISTER}
          >
            Sign up
          </Link>
        </div>
      )}
    </div>
  )
}
