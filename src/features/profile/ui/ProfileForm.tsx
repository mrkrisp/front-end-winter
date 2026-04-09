'use client'

import { useMutation } from '@apollo/client/react'
import { UserCog } from 'lucide-react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import HeadingWithIcon from '@/shared/components/custom-ui/with-icon/heading-with-icon/HeadingWithIcon'
import { Button } from '@/shared/components/ui/button'

import { removeTypename } from '@/shared/utils/removeTypename'

import {
  GetProfileDocument,
  GetProfileQuery,
  UpdateProfileDocument
} from '@/__generated__/graphql'

import { TProfileForm } from '../types/profile-update.types'
import BodyMeasurementsForm from './BodyMeasurementsForm'
import GeneralInformationForm from './GeneralInformationForm'

const ProfileForm = ({ data }: { data: GetProfileQuery }) => {
  const form = useForm<TProfileForm>({
    mode: 'onChange',
    defaultValues: {
      avatarUrl: data?.me?.avatarUrl ?? '',
      email: data?.me?.email ?? '',
      profile: data?.me?.profile ?? {},
      measurements: data?.me?.measurements ?? {}
    }
  })

  const [updateProfile, { loading }] = useMutation(UpdateProfileDocument, {
    onCompleted() {
      toast.success('Profile updated')
    },
    update(cache, { data: mutationData }) {
      const updated = mutationData?.updateProfile
      if (!updated || !data.me) return

      cache.writeQuery({
        query: GetProfileDocument,
        data: {
          me: {
            id: updated.id,
            avatarUrl: updated.avatarUrl,
            email: updated.email,
            profile: updated.profile,
            measurements: updated.measurements,
            isEmailVerified: data.me.isEmailVerified
          }
        }
      })
    }
  })

  const submit = form.handleSubmit(data => {
    const cleanedProfile = removeTypename(data.profile)
    const cleanedMeasurements = removeTypename(data.measurements)

    const cleanedData = {
      ...data,
      measurements: cleanedMeasurements,
      profile: cleanedProfile
    }

    updateProfile({
      variables: {
        data: cleanedData
      }
    })
  })

  return (
    <form
      onSubmit={submit}
      className="rounded-xl bg-white p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <HeadingWithIcon Icon={UserCog}>Personal Information</HeadingWithIcon>
        <div className="flex gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => form.reset()}
          >
            Cancel
          </Button>

          <Button
            variant="accent"
            disabled={loading}
          >
            Save changes
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <GeneralInformationForm
          isEmailVerified={data.me.isEmailVerified}
          form={form}
        />
        <BodyMeasurementsForm form={form} />
      </div>
    </form>
  )
}

export default ProfileForm
