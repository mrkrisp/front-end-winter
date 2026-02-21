'use client'

import { useMutation } from '@apollo/client/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'

import { LoginDocument, RegisterDocument } from '@/__generated__/graphql'

import type { IAuthFormInput } from '../types/auth-form.type'
import { isEmailRegex } from '../utils/is-email.regex'

import { SwitchModeForm } from './SwitchModeForm'

interface Props {
  type: 'login' | 'register'
}

function AuthForm({ type }: Props) {
  const isRegister = type === 'register'
  const [authMutation, { loading }] = useMutation(
    isRegister ? RegisterDocument : LoginDocument,
    {
      onCompleted: () => {
        toast.success(
          isRegister ? 'Registered successfully' : 'Sign in successfully',
          {
            id: 'auth-success'
          }
        )
      },
      onError: err => {
        toast.error(err.message, {
          id: 'auth-error'
        })
      }
    }
  )
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm<IAuthFormInput>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmitForm: SubmitHandler<IAuthFormInput> = data => {
    authMutation({
      variables: {
        data: {
          email: data.email,
          password: data.password
        }
      }
    }).finally(() => {
      reset()
    })
  }

  return (
    <div className="flex h-screen">
      <div className="m-auto w-sm rounded-2xl bg-linear-to-tr from-[#8062ee] to-[#a088fc] p-10 text-xl text-white shadow-lg">
        <h1 className="mb-6 text-center text-4xl font-bold">
          {isRegister ? 'Sign up' : 'Sign In'}
        </h1>
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
