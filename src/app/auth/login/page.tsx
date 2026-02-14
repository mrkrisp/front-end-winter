import { type Metadata } from 'next'

import AuthForm from '@/features/auth/ui/AuthForm'

import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'

export const metadata: Metadata = {
  title: 'Login',
  ...NO_INDEX_PAGE
}

const LoginPage = () => {
  return (
    <div>
      <AuthForm type="login" />
    </div>
  )
}

export default LoginPage
