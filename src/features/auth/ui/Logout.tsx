import { useApolloClient, useMutation } from '@apollo/client/react'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

import { Button } from '@/shared/components/ui/button'

import { PAGES } from '@/shared/config/page.config'

import { LogoutDocument } from '@/__generated__/graphql'

function Logout() {
  const [logout, { loading }] = useMutation(LogoutDocument)
  const router = useRouter()

  const client = useApolloClient()

  const handleLogout = async () => {
    try {
      await logout()
      await client.clearStore()

      toast.success('Logout successfully')

      router.replace(PAGES.LOGIN)
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <Button
      variant="destructive"
      className="rounded-full"
      size="icon"
      onClick={handleLogout}
      disabled={loading}
    >
      <LogOut className="size-4.5" />
    </Button>
  )
}

export default Logout
