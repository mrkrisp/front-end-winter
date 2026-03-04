'use client'

import { useMutation } from '@apollo/client/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'

import { PAGES } from '@/shared/config/page.config'

import { ResetPasswordDocument } from '@/__generated__/graphql'

interface IResetPasswordInput {
  newPassword: string
}

function ResetPassword() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [resetPassword, { loading }] = useMutation(ResetPasswordDocument, {
    onCompleted() {
      toast.success('Password has been changed')
      router.replace(PAGES.LOGIN)
    },
    onError() {
      toast.error('Invalid or expired reset token')
    }
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<IResetPasswordInput>()

  const token = searchParams.get('token')

  const onSubmitForm = (data: IResetPasswordInput) => {
    if (token) {
      resetPassword({
        variables: {
          data: {
            token,
            newPassword: data.newPassword
          }
        }
      })
    }
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
            {...register('newPassword', {
              required: 'Password is required!!!',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters'
              }
            })}
            name="newPassword"
            type="password"
            placeholder="New password..."
            aria-invalid={!!errors.newPassword}
          />
          {errors.newPassword && (
            <p className="text-destructive -mt-1 block text-xs font-semibold">
              {errors.newPassword.message}
            </p>
          )}

          <div className="text-center">
            <Button
              type="submit"
              disabled={!isValid || loading}
              variant={'accent'}
            >
              Set new password
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword
