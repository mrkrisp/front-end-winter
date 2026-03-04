'use client'

import { useMutation } from '@apollo/client/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

import { PAGES } from '@/shared/config/page.config'

import { VerifyEmailDocument } from '@/__generated__/graphql'

function VerifyEmail() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const token = searchParams.get('token')

  const [verifyEmail] = useMutation(VerifyEmailDocument, {
    onCompleted() {
      router.replace(PAGES.LOGIN)
      toast.success('Email verified')
    },
    onError() {
      toast.error('Invalid or expired verification link')
    }
  })

  useEffect(() => {
    if (token) {
      verifyEmail({ variables: { token } })
    }
  }, [token, verifyEmail])

  return (
    <div className="flex h-screen items-center justify-center">
      <p className="text-lg">Verify email...</p>
    </div>
  )
}

export default VerifyEmail
