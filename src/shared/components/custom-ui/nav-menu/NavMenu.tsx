'use client'

import { usePathname } from 'next/navigation'
import { match } from 'path-to-regexp'

import NavMenuItem from './NavMenuItem'
import type { IMenuItem } from './nav-menu.types'

interface Props {
  menu: IMenuItem[]
}

const NavMenu = ({ menu }: Props) => {
  const pathname = usePathname()

  return (
    <nav className="flex items-center gap-2.5">
      {menu.map(menuItem => (
        <NavMenuItem
          key={menuItem.href}
          menuItem={menuItem}
          isActive={!!match(menuItem.href)(pathname)}
        />
      ))}
    </nav>
  )
}

export default NavMenu
