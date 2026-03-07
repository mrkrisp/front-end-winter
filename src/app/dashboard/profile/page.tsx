import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'
import { Metadata } from 'next'

import { Profile } from '@/features/profile/ui/Profile'

export const metadata: Metadata = {
  title: 'Profile',
  ...NO_INDEX_PAGE
}

function ProfilePage() {
  return (
    <div>
      <Profile />
    </div>
  )
}

export default ProfilePage
