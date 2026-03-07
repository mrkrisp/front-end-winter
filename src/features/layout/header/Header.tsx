'use client'

import { Bell, Headset } from 'lucide-react'
import Link from 'next/link'

import VerifyEmailButton from '@/features/auth/ui/VerifyEmailButton'
import { useGetMe } from '@/features/profile/hooks/useGetMe'

import NavMenu from '@/shared/components/custom-ui/nav-menu/NavMenu'
import UserInfo from '@/shared/components/custom-ui/user-info/UserInfo'
import { Button } from '@/shared/components/ui/button'

import { PAGES } from '@/shared/config/page.config'

import Logout from '../../auth/ui/Logout'
import { navMenuItems } from './nav-menu.data'

function Header() {
  const { user } = useGetMe()

  return (
    <header className="flex justify-between">
      <div className="flex items-center gap-8">
        <Link
          href={PAGES.DASHBOARD}
          className="from-primary to-primary-dark flex size-9 items-center justify-center rounded-full bg-linear-to-b text-xl font-black text-white"
        >
          F
        </Link>
        <NavMenu menu={navMenuItems} />
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="soft"
          className="rounded-full"
          size="icon"
        >
          <Headset className="size-4.5" />
        </Button>
        <Button
          variant="soft"
          className="mr-4 rounded-full"
          size="icon"
        >
          <Bell className="size-4.5" />
        </Button>
        <Logout />
        {!user?.isEmailVerified && (
          <VerifyEmailButton email={user?.email || ''}>
            Email unverified
          </VerifyEmailButton>
        )}
        <Link href={PAGES.PROFILE}>
          <UserInfo
            avatarUrl={user?.avatarUrl || '/images/avatar-placeholder.png'}
            name={user?.profile?.fullName || 'Anonymous'}
            email={user?.email || ''}
          />
        </Link>
      </div>
    </header>
  )
}

export default Header
