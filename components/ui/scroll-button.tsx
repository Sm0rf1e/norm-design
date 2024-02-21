'use client'

import { useRouter } from 'next/navigation'
import { FC, PropsWithChildren } from 'react'
import { LinkIconBlack } from '../icons/link-icon-black'
import { LinkIconWhite } from '../icons/link-icon-white'
import { Button } from './button'

interface ScrollButtonProps {
  className?: string
  variant?: 'default' | 'secondary'
  iconSize?: 'sm' | 'lg'
  to: number
}

export const ScrollButton: FC<PropsWithChildren<ScrollButtonProps>> = ({
  children, className, variant = 'default', iconSize = 'lg', to
}) => {
  const {push} = useRouter()

  const scrollTo = (e: any) => {
    e.preventDefault();
		
    window.scrollTo({
      top: to,
			behavior: "smooth"
    });
  }

  return <>
      <Button onClick={scrollTo} variant={variant} className={className}>
        {variant === 'default' ?
        <LinkIconWhite size={iconSize}/> :
        <LinkIconBlack size={iconSize}/>}
        <span>{children}</span>
      </Button>
  </>
}
