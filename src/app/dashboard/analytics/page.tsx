import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Analytics',
  ...NO_INDEX_PAGE
}

export default function Page() {
  return <div>Analytics Page</div>
}
