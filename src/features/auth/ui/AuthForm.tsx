'use client'

import { useMutation } from '@apollo/client/react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'

import { LoginDocument, RegisterDocument } from '@/__generated__/graphql'

import { SwitchModeForm } from './SwitchModeForm'

interface Props {
  type: 'login' | 'register'
}

interface IFormInput {
  email: string
  password: string
}

function AuthForm({ type }: Props) {
  const isRegister = type === 'register'
  const [authMutation, { data, loading, error }] = useMutation(
    isRegister ? RegisterDocument : LoginDocument
  )

  const { register, handleSubmit, reset } = useForm<IFormInput>({
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const onSubmitForm: SubmitHandler<IFormInput> = data => {
    authMutation({
      variables: {
        data: {
          email: data.email,
          password: data.password
        }
      }
    }).then(res => {
      console.log(res)
      reset()
    })
  }

  return (
    <div className="flex h-screen">
      <div className="m-auto w-sm rounded-2xl bg-[#8062ee] p-5 text-xl text-white shadow-lg">
        <h1 className="mb-5 text-center text-4xl font-bold">
          {isRegister ? 'Register' : 'Login'}
        </h1>
        <form
          className="space-y-3"
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <Input
            className="placeholder:text-white/60"
            {...register('email', { required: true })}
            name="email"
            type="email"
            placeholder="Email..."
          />
          <Input
            className="placeholder:text-white/60"
            {...register('password', { required: true, minLength: 6 })}
            name="password"
            type="08122009"
            placeholder="Password..."
          />
          <div className="text-center">
            <Button
              type="submit"
              disabled={loading}
            >
              {isRegister ? 'Register' : 'Login'}
            </Button>
          </div>
        </form>

        <SwitchModeForm isRegister={isRegister} />
      </div>
    </div>
  )
}

export default AuthForm
