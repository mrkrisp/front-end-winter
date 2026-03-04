'use client'

import { useMutation } from '@apollo/client/react'
import { Turnstile } from '@marsidev/react-turnstile'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'

import { RequestPasswordResetDocument } from '@/__generated__/graphql'

import { isEmailRegex } from '../utils/is-email.regex'

interface FormData {
  email: string
}

function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<FormData>()
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)

  const [requestResetPassword, { loading }] = useMutation(
    RequestPasswordResetDocument,
    {
      onCompleted() {
        toast.success('If this email exists, we will send reset link')
      },
      onError() {
        toast.error('Something went wrong')
      }
    }
  )

  const onSubmitForm = (data: FormData) => {
    if (!captchaToken) {
      toast.error('Please complete the captcha challenge', {
        id: 'captcha-error'
      })
      return
    }
    requestResetPassword({
      variables: { data },
      context: {
        headers: {
          'cf-turnstile-token': captchaToken
        }
      }
    })
  }

  return (
    <div className="flex h-screen">
      <div className="m-auto w-sm rounded-2xl bg-linear-to-tr from-[#8062ee] to-[#a088fc] p-10 text-xl text-white shadow-lg">
        <h1 className="mb-6 text-center text-4xl font-bold">Forgot Password</h1>
        <form
          className="space-y-4"
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <Input
            {...register('email', {
              required: 'Email is required!!!',
              pattern: {
                value: isEmailRegex,
                message: 'Invalid email address'
              }
            })}
            name="email"
            type="email"
            placeholder="Email..."
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-destructive -mt-1 block text-xs font-semibold">
              {errors.email.message}
            </p>
          )}

          <div className="flex scale-80 justify-center pt-2">
            <Turnstile
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
              onSuccess={token => setCaptchaToken(token)}
              onExpire={() => setCaptchaToken(null)}
              options={{ theme: 'light' }}
            />
          </div>

          <div className="text-center">
            <Button
              type="submit"
              disabled={!isValid || loading}
              variant={'accent'}
            >
              Send reset link
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword
