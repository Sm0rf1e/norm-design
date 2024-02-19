'use client'

import { FC, PropsWithChildren } from 'react'
import { Button } from './button'
import { LinkIconWhite } from './link-icon-white'
import { LinkIconBlack } from './link-icon-black'
import { useRouter } from 'next/navigation'

interface LinkButtonProps {
  className?: string
  variant?: 'default' | 'secondary'
  iconSize?: 'sm' | 'lg'
  href: string
}

export const LinkButton: FC<PropsWithChildren<LinkButtonProps>> = ({
  children, className, variant = 'default', iconSize = 'lg', href
}) => {
  const {push} = useRouter()

  const onClick = () => {
    push(href)
  }

  const scrollTo = (e: any) => {
    e.preventDefault();
		
    window.scrollTo({
      top: 2950,
			behavior: "smooth"
    });
  }

  return <>
      <Button onClick={onClick} variant={variant} className={className}>
        {variant === 'default' ?
        <LinkIconWhite size={iconSize}/> :
        <LinkIconBlack size={iconSize}/>}
        <span>{children}</span>
      </Button>
  </>
}
