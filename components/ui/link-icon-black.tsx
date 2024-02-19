'use client'

import { FC } from 'react'
import { useMediaQuery } from 'usehooks-ts'

interface LinkIconBlackProps {
  size?: 'sm' | 'lg'
}

export const LinkIconBlack: FC<LinkIconBlackProps> = ({size = 'lg'}) => {
  const matches = useMediaQuery("(max-width: 1024px)")
  const iconSize = size === 'sm' && matches ? '10px' : '16px'

  return <span className={`w-[${iconSize}] h-[${iconSize}]`}>
    <svg width={iconSize} height={iconSize} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className='group-hover:fill-white transition-all' fill-rule="evenodd" clip-rule="evenodd" d="M8.17353 2.7977L7.78436 3.24824C7.46343 3.61977 6.90208 3.66079 6.53055 3.33986C6.15902 3.01892 6.118 2.45757 6.43893 2.08603L6.85051 1.60955C6.86465 1.59318 6.87939 1.57732 6.89469 1.56202C7.89507 0.561777 9.25181 -0.000100024 10.6665 1.33557e-08C12.0811 0.000100051 13.4378 0.562169 14.438 1.56256C15.4382 2.56295 16.0001 3.91971 16 5.33437C15.9999 6.74904 15.4378 8.10572 14.4375 9.10597C14.4228 9.12062 14.4076 9.13477 14.392 9.14836L13.9173 9.56084C13.5467 9.88285 12.9852 9.84347 12.6632 9.47287C12.3412 9.10228 12.3806 8.5408 12.7512 8.21878L13.2011 7.82785C13.8551 7.16306 14.222 6.26758 14.2221 5.33425C14.2222 4.39111 13.8476 3.48658 13.1808 2.81964C12.5139 2.1527 11.6094 1.77797 10.6663 1.77791C9.73343 1.77784 8.83831 2.14436 8.17353 2.7977ZM11.296 4.70541C11.6431 5.05257 11.6431 5.61542 11.296 5.96258L5.96234 11.2963C5.61518 11.6435 5.05234 11.6435 4.70518 11.2963C4.35803 10.9491 4.35803 10.3863 4.70518 10.0391L10.0388 4.70541C10.386 4.35825 10.9488 4.35825 11.296 4.70541ZM3.33311 6.52329C3.65818 6.8912 3.62346 7.45298 3.25556 7.77807L2.80949 8.17221C2.48524 8.49713 2.2274 8.88223 2.05048 9.30597C1.87054 9.73695 1.77788 10.1993 1.77788 10.6664C1.77788 11.1334 1.87054 11.5958 2.05048 12.0268C2.23042 12.4578 2.49407 12.8488 2.82617 13.1772C3.50314 13.8466 4.41682 14.2221 5.36889 14.2221C6.29965 14.2221 7.19369 13.8632 7.86577 13.2217L8.17615 12.8042C8.46907 12.4102 9.02592 12.3283 9.41991 12.6212C9.81391 12.9141 9.89585 13.471 9.60294 13.865L9.25003 14.3397C9.22319 14.3757 9.19366 14.4098 9.16168 14.4414C8.15188 15.4399 6.78903 16 5.36889 16C3.94876 16 2.58592 15.44 1.57612 14.4414C1.07681 13.9477 0.680397 13.3598 0.409852 12.7118C0.139306 12.0638 0 11.3686 0 10.6664C0 9.96418 0.139306 9.26896 0.409852 8.62096C0.680397 7.97297 1.07681 7.38509 1.57612 6.89137C1.58794 6.87968 1.60009 6.86833 1.61254 6.85733L2.07835 6.44574C2.44625 6.12066 3.00803 6.15538 3.33311 6.52329Z" fill='#161616'/>
    </svg>
  </span>
}
