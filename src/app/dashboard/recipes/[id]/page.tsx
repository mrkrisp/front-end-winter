import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'Recipe' }
}

export default function Page() {
  return <div>Recipe detail</div>
}
