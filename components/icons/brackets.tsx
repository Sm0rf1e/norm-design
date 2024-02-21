import { FC } from 'react'

interface BracketsProps {
  className?: string
}

export const Brackets: FC<BracketsProps> = ({className}) => {
  return <div className={className}>
    <svg width="1720" height="375" viewBox="0 0 1720 375" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M125 54.5455H56.6038V321.023H125V375H0V0H125V54.5455Z" fill='white'/>
    <path d="M1595 54.5455H1663.4V321.023H1595V375H1720V0H1595V54.5455Z" fill='white'/>
    </svg>
  </div>
}

export const LeftBracket: FC<BracketsProps> = ({className}) => {
  return <>
    <svg className={className} width="125" height="375" viewBox="0 0 125 375" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M125 54.5455H56.6038V321.023H125V375H0V0H125V54.5455Z" fill="white"/>
    </svg>
  </>
}

export const RightBracket: FC<BracketsProps> = ({className}) => {
  return <>
    <svg className={className} width="125" height="375" viewBox="0 0 125 375" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 54.5455H68.3962V321.023H0V375H125V0H0V54.5455Z" fill="white"/>
    </svg>
  </>
}
