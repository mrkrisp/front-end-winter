'use client'

import { useApolloClient, useMutation } from '@apollo/client/react'
import { Turnstile } from '@marsidev/react-turnstile'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'

import { PAGES } from '@/shared/config/page.config'

import {
  GetMeDocument,
  LoginDocument,
  LoginMutation,
  type LoginMutationVariables,
  RegisterDocument,
  type RegisterMutation,
  type RegisterMutationVariables
} from '@/__generated__/graphql'

import type { IAuthFormInput } from '../types/auth-form.type'
import { isEmailRegex } from '../utils/is-email.regex'
import { SwitchModeForm } from './SwitchModeForm'

interface Props {
  type: 'login' | 'register'
}

function AuthForm({ type }: Props) {
  const isRegister = type === 'register'
  const router = useRouter()
  const client = useApolloClient()

  const [captchaToken, setCaptchaToken] = useState<string | null>(null)

  const [authMutation, { loading }] = useMutation<
    LoginMutation | RegisterMutation,
    LoginMutationVariables | RegisterMutationVariables
  >(isRegister ? RegisterDocument : LoginDocument, {
    onCompleted: data => {
      const authData = 'register' in data ? data?.register : data?.login

      client.writeQuery({
        query: GetMeDocument,
        data: {
          me: authData.user
        }
      })

      toast.success(
        isRegister ? 'Sign up successfully' : 'Sign in successfully',
        {
          id: 'auth-success'
        }
      )
      client.resetStore()
      router.replace(PAGES.DASHBOARD)
    },
    onError: err => {
      toast.error(err.message, {
        id: 'auth-error'
      })
    }
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<IAuthFormInput>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmitForm: SubmitHandler<IAuthFormInput> = data => {
    if (!captchaToken) {
      toast.error('Please complete the captcha challenge', {
        id: 'captcha-error'
      })
      return
    }

    authMutation({
      variables: {
        data
      },
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
        <h1 className="mb-6 text-center text-4xl font-bold">
          {isRegister ? 'Sign up' : 'Sign In'}
        </h1>
        <form
          className="space-y-3"
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

          <Input
            {...register('password', {
              required: 'Password is required!!!',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters'
              }
            })}
            name="password"
            type="password"
            placeholder="Password..."
            aria-invalid={!!errors.password}
          />
          {errors.password && (
            <p className="text-destructive -mt-1 block text-xs font-semibold">
              {errors.password.message}
            </p>
          )}

          {!isRegister && (
            <div className="-mt-2 block text-right">
              <Link
                href={PAGES.FORGOT_PASSWORD}
                className="text-base underline hover:opacity-95"
              >
                Forgot password?
              </Link>
            </div>
          )}

          <div className="flex scale-80 justify-center">
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
              {isRegister ? 'Sign up' : 'Sign In'}
            </Button>
          </div>
        </form>

        <SwitchModeForm isRegister={isRegister} />
      </div>
    </div>
  )
}

export default AuthForm
