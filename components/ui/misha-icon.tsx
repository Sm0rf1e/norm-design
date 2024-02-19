'use client'

import { FC } from 'react'
import { useMediaQuery } from 'usehooks-ts'

interface MishaIconProps {
  color?: string
}

export const MishaIcon: FC<MishaIconProps> = ({color = '#161616'}) => {
  const matches = useMediaQuery("(max-width: 1024px)")
  const size = matches ? '47' : '66'

  return <>
    <svg className='group' width={size} height={size} viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className='group-hover:fill-[url(#paint0_linear_0_209)] transition-all' fill-rule="evenodd" clip-rule="evenodd" d="M66 33C66 14.7746 51.2254 0 33 0C14.7746 0 0 14.7746 0 33C0 51.2254 14.7746 66 33 66C51.2254 66 66 51.2254 66 33ZM22.6364 47H16.5909C15.1594 47 14 45.8612 14 44.4552V26.2172V22.8241C14 19.6791 17.6553 17.8829 20.2182 19.7703L22.6364 21.5517L33 29.1862L43.3636 21.5517L45.7818 19.7703C48.3447 17.8829 52 19.6791 52 22.8241V26.2172V44.4552C52 45.8612 50.8406 47 49.4091 47H43.3636V32.5793L33 40.2138L22.6364 32.5793V47Z" fill={color}/>
    <defs>
    <linearGradient id="paint0_linear_0_209" x1="21.7953" y1="-43.428" x2="89.1028" y2="-23.3895" gradientUnits="userSpaceOnUse">
    <stop className='transition-all' stop-color="#4D70FF"/>
    <stop className='transition-all' offset="1" stop-color="#07ACFF"/>
    </linearGradient>
    </defs>
    </svg>
  </>
}

