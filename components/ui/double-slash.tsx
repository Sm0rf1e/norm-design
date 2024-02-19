import { FC } from 'react'

interface DoubleSlashProps {
  className?: string
  color?: string
}

export const DoubleSlash: FC<DoubleSlashProps> = ({className, color = 'white'}) => {

  return <>
    <svg className={className} width={24} height={28} viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.53125 27.6875H0L8 0.3125H11.5312L3.53125 27.6875Z" fill={color}/>
    <path d="M15.0625 27.6875H11.5312L19.5312 0.3125H23.0625L15.0625 27.6875Z" fill={color}/>
    </svg>

  </>
}
