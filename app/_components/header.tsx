import { Logo } from '@/components/icons/logo'
import { LinkButton } from '@/components/ui/link-button'
import { ScrollButton } from '@/components/ui/scroll-button'
import { FC } from 'react'

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  return <>
    <nav
      className='flex fixed font-sf_pro w-full items-center
      justify-between top-0 z-50 max-h-[100px] backdrop-blur-xl
      py-[17px] px-[19px] lg:px-[100px] lg:py-[32px] bg-gradient-to-b
      from-[#161616] to-[#161616E6]'
    >

      <Logo
        className='w-[71px] h-[17px] md:w-[100px] md:h-[47px]
        lg:w-[154px] lg:h-[71px]'
      />

      <div className='flex gap-[21px]'>
        <ScrollButton
          to={2950}
          className='text-[10px] px-[20px] py-[5px]
          md:text-[15px] lg:py-[11px] lg:text-[15px] lg:px-[83px]'
        >
          Контакты
        </ScrollButton>

        <LinkButton
          href='https://t.me/@nn_michail'
          className='hidden md:flex lg:flex px-[20px] py-[5px]
          lg:py-[11px] lg:px-[83px]'
        >
          Портфолио
        </LinkButton>
      </div>
    </nav>
  </>
}
