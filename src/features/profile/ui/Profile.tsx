'use client'

import { useQuery } from '@apollo/client/react'

import { SkeletonLoader } from '@/shared/components/custom-ui/SkeletonLoader'

import { GetProfileDocument } from '@/__generated__/graphql'

import ProfileForm from './ProfileForm'

export function Profile() {
  const { data, loading } = useQuery(GetProfileDocument)

  if (loading || !data?.me) {
    return (
      <div className="p-5">
        <div className="flex items-center justify-between px-3">
          <SkeletonLoader className="w-2xs" />
          <div className="flex items-center gap-3">
            <SkeletonLoader
              count={2}
              className="mb-0 w-32"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="p-6">
            <SkeletonLoader className="mb-6 w-xs" />
            <div className="mb-4 flex items-center gap-5">
              <SkeletonLoader className="mb-0 h-12 w-12 rounded-full" />
              <SkeletonLoader className="w-xs" />
            </div>
            <SkeletonLoader
              count={3}
              className="mb-4"
            />
          </div>
          <div className="p-6">
            <SkeletonLoader className="mb-6 w-xs" />
            <div className="grid grid-cols-2 gap-4">
              <SkeletonLoader
                count={7}
                className="mb-4"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <ProfileForm data={data} />
}
