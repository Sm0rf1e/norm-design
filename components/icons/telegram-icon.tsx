'use client'

import { FC } from 'react'
import { useMediaQuery } from 'usehooks-ts'

interface TelegramIconProps {
  color?: string
}

export const TelegramIcon: FC<TelegramIconProps> = ({color = '#161616'}) => {
  const matches = useMediaQuery("(max-width: 1024px)")
  const size = matches ? '47' : '66'
  
  return <>
    <svg width={size} height={size} viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className='group-hover:fill-[#13A2FF] transition-all' fillRule="evenodd" clipRule="evenodd" d="M66 33C66 51.2253 51.2253 66 33 66C14.7747 66 0 51.2253 0 33C0 14.7747 14.7747 0 33 0C51.2253 0 66 14.7747 66 33ZM22.0983 29.9771C18.7925 31.4204 15.396 32.9035 12.2901 34.6143C10.6683 35.8017 12.8238 36.6417 14.846 37.4296C15.1675 37.5548 15.4855 37.6787 15.7846 37.8025C16.0335 37.8791 16.2865 37.9596 16.5429 38.0413C18.792 38.7578 21.2997 39.5568 23.4832 38.3549C27.07 36.2945 30.4549 33.9124 33.8372 31.5322C34.9454 30.7523 36.0532 29.9727 37.1678 29.2046C37.22 29.1712 37.2789 29.1329 37.3434 29.0913C38.2928 28.4757 40.4283 27.0915 39.6384 28.9989C37.7706 31.0416 35.7698 32.8497 33.7583 34.6679C32.4026 35.8931 31.0419 37.1229 29.7136 38.4319C28.5568 39.3719 27.3555 41.2621 28.6509 42.5784C31.6345 44.667 34.6647 46.705 37.6931 48.742C38.6786 49.4047 39.6641 50.0675 40.6475 50.7319C42.3143 52.0626 44.9192 50.9861 45.2856 48.9067C45.4486 47.9501 45.6122 46.9937 45.7758 46.0371C46.68 40.7506 47.5845 35.4622 48.3835 30.1586C48.4921 29.3265 48.6152 28.4947 48.7384 27.6624C49.0369 25.6451 49.3358 23.6254 49.4292 21.5973C49.1886 19.5733 46.7345 20.0183 45.3688 20.4735C38.3492 23.1445 31.3996 26.0136 24.4776 28.9333C23.6934 29.2806 22.8986 29.6277 22.0983 29.9771Z" fill={color}/>
    </svg>
  </>
}
