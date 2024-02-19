'use client'

import { FC } from 'react'
import Image from 'next/image'
import { useMediaQuery } from 'usehooks-ts'
import { cn } from '@/lib/utils'

interface ImageSizedProps {
  name: string
  className?: string
}

export const ImageSized: FC<ImageSizedProps> = ({name, className}) => {
  const phone = useMediaQuery("(max-width: 640px)")

  let end = '';

  if (phone) end = '-sm'

  return <>
    <Image
      draggable='false'
     className={cn('z-0 w-full h-full object-cover', className)}
     src={`/${name}${end}.png`}
     alt=''
     layout='fill'
     />
  </>
}
