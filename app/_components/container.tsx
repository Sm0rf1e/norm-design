import { FC, PropsWithChildren } from 'react'

interface ContainerProps {}

export const Container: FC<PropsWithChildren<ContainerProps>> = ({children}) => {
  return <>
    <div
      className='mt-[94px] lg:mt-[307px] flex flex-col gap-y-[10px]
      lg:gap-y-[20px] mr-[19px] ml-[19px] md:mr-[50px] md:ml-[50px]
      lg:mr-[100px] lg:ml-[100px] max-w-[1720px] mb-[33px]'
    >
      {children}
    </div>
  </>
}
