import { type Metadata } from 'next'

import AuthForm from '@/features/auth/ui/AuthForm'

import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'

export const metadata: Metadata = {
  title: 'Register',
  ...NO_INDEX_PAGE
}

const RegisterPage = () => {
  return (
    <div>
      <AuthForm type="register" />
    </div>
  )
}

export default RegisterPage
