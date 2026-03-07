'use client'

import { Edit } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import { Button } from '@/shared/components/ui/button'

import { SERVER_URL } from '@/shared/config/api.config'

interface Props {
  value?: string
  onChange: (url: string) => void
}

function AvatarUpload({ value, onChange }: Props) {
  const [loading, setLoading] = useState<boolean>(false)

  const upload = async (file: File) => {
    setLoading(true)

    const formData = new FormData()
    formData.append('file', file)

    const res = await fetch(`${SERVER_URL}/media-upload/avatar`, {
      method: 'POST',
      body: formData,
      credentials: 'include'
    })

    const data = await res.json()

    onChange(data.url)

    setLoading(false)
  }

  return (
    <div className="relative">
      <Image
        src={value || '/images/avatar-placeholder.png'}
        width={64}
        height={64}
        alt="avatar"
        className="rounded-full object-cover"
      />
      <label className="absolute -right-2 -bottom-2 rounded-full">
        <input
          type="file"
          hidden
          accept="image/*"
          onChange={e => {
            const file = e.target.files?.[0]
            if (file) upload(file)
          }}
        />
        <Button
          variant="soft"
          size="xs"
          asChild
          disabled={loading}
        >
          <span>
            <Edit />
          </span>
        </Button>
      </label>
    </div>
  )
}

export default AvatarUpload
