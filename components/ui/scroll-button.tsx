'use client'

import { FC, PropsWithChildren } from 'react'
import { Button } from './button'
import { LinkIconWhite } from './link-icon-white'
import { LinkIconBlack } from './link-icon-black'
import { useRouter } from 'next/navigation'

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
