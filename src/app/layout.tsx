import { SITE_NAME } from '@/shared/constants/seo.constants'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

import './globals.css'
import { Provider } from './providers/Provider'

const monoFont = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: {
    absolute: SITE_NAME,
    template: `%s • ${SITE_NAME}`
  },
  description: 'A web application fot managing your daily tasks and activities.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${monoFont.variable} antialiased`}>
        <Provider>
          {children}
          <Toaster position="top-center" />
        </Provider>
      </body>
    </html>
  )
}
