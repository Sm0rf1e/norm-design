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
  let dir = ''
  
  if (phone) {end = '-sm'; dir = 'sm'}
  else {end = ''; dir = 'lg'}

  return <>
    <Image
      draggable='false'
      className={cn('z-0 w-full h-full object-cover', className)}
      src={`/${dir}/${name}${end}.png`}
      alt=''
      sizes='(max-width: 640px) 100%'
      fill
      priority
    />
  </>
}
