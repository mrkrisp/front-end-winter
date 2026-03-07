import { cn } from '@/shared/utils'
import { useMutation } from '@apollo/client/react'
import { ComponentProps } from 'react'
import toast from 'react-hot-toast'

import { Button } from '@/shared/components/ui/button'

import { RequestVerifyEmailDocument } from '@/__generated__/graphql'

interface Props extends ComponentProps<'button'> {
  email: string
}

function VerifyEmailButton({ email, children, className, ...props }: Props) {
  const [reqVerifyEmail] = useMutation(RequestVerifyEmailDocument, {
    onCompleted() {
      toast.success('Verification url was received')
    },
    onError() {
      toast.error('Some error!')
    }
  })

  const onClickVerifyButton = () => {
    if (!email) {
      toast.error('Incorrect email')
      return
    }

    reqVerifyEmail({ variables: { email } })
  }

  return (
    <Button
      type="button"
      variant={'destructive'}
      className={cn('rounded-xl', className)}
      onClick={onClickVerifyButton}
      {...props}
    >
      {children}
    </Button>
  )
}

export default VerifyEmailButton
