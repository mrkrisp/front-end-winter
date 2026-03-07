import { CircleCheck, CircleSmall, Mail, UserPen } from 'lucide-react'
import { Controller, UseFormReturn } from 'react-hook-form'

import VerifyEmailButton from '@/features/auth/ui/VerifyEmailButton'

import InputLabel from '@/shared/components/custom-ui/with-label/InputLabel'
import { SelectLabel } from '@/shared/components/custom-ui/with-label/SelectLabel'

import { Gender } from '@/__generated__/graphql'

import { TProfileForm } from '../types/profile-update.types'
import AvatarUpload from './AvatarUpload'

function GeneralInformationForm({
  isEmailVerified,
  form
}: {
  isEmailVerified: boolean
  form: UseFormReturn<TProfileForm, unknown, TProfileForm>
}) {
  const { register } = form

  return (
    <div className="rounded-xl border bg-white p-6">
      <h2 className="mb-6 text-lg font-semibold">General information</h2>

      <div className="space-y-4">
        <div className="flex items-center gap-5">
          <AvatarUpload
            onChange={url => form.setValue('avatarUrl', url)}
            value={form.watch('avatarUrl') || undefined}
          />

          <InputLabel
            Icon={UserPen}
            label="Full name"
            placeholder="Full name"
            {...register('profile.fullName')}
          />
        </div>

        <div className={'relative'}>
          <InputLabel
            Icon={Mail}
            type="email"
            label="Email"
            placeholder="Email"
            className="w-full"
            {...register('email')}
          />
          {isEmailVerified ? (
            <CircleCheck className="absolute right-2 bottom-1.5 text-green-600" />
          ) : (
            <VerifyEmailButton
              email={form.watch('email') || ''}
              className="absolute right-0 bottom-0"
            >
              Verify your email!
            </VerifyEmailButton>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Controller
            control={form.control}
            name="profile.gender"
            render={({ field }) => (
              <SelectLabel
                Icon={CircleSmall}
                label="Gender"
                value={field.value}
                onChange={field.onChange}
                options={[
                  { label: 'Male', value: Gender.Male },
                  { label: 'Female', value: Gender.Female }
                ]}
              />
            )}
          />
          <InputLabel
            type="number"
            label="Age"
            placeholder="Age"
            {...register('profile.age', {
              setValueAs: value => (value === '' ? undefined : Number(value))
            })}
          />
        </div>

        <label className="relative block">
          <span className="mb-1 block text-sm opacity-50">Bio</span>
          <textarea
            className="w-full resize-none rounded-md border bg-[#f1f1f1] p-3 font-mono"
            placeholder="Bio"
            {...register('profile.bio')}
          />
        </label>
      </div>
    </div>
  )
}

export default GeneralInformationForm
