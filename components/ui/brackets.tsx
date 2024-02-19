import { FC } from 'react'

interface BracketsProps {
  color?: string
  className?: string
}

export const Brackets: FC<BracketsProps> = ({color = 'white', className = ''}) => {
  return <div className={className}>
    <svg width="1720" height="375" viewBox="0 0 1720 375" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M125 54.5455H56.6038V321.023H125V375H0V0H125V54.5455Z" fill={color}/>
    <path d="M1595 54.5455H1663.4V321.023H1595V375H1720V0H1595V54.5455Z" fill={color}/>
    </svg>
  </div>
}
