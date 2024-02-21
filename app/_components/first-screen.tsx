'use client'

import { LeftBracket, RightBracket } from '@/components/icons/brackets'
import { DoubleSlash } from '@/components/icons/double-slash'
import { HomeIcon } from '@/components/icons/home-icon'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FC } from 'react'

interface FirstScreenProps {}

export const FirstScreen: FC<FirstScreenProps> = ({}) => {
  return <>
    <motion.div initial={{scale: 0}} animate={{scale: 1, transition: {ease: 'circOut', duration: 1, delay: .3}}}
          className='mt-[95px] lg:mt-[275px] w-fit z-30 mr-auto ml-auto gap-y-[12px] lg:gap-y-[20px]'
        >
          <div className='flex gap-[20px] justify-center items-center z-30'>
            <HomeIcon className='w-[20px] h-[20px] lg:w-[34px] lg:h-[34px] opacity-20'/>
            <DoubleSlash className='w-[17px] h-[20px] lg:w-[24px] lg:h-[28px] opacity-20'/>
            <Link href={'/'} className='text-[16px] md:text-[24px] lg:text-[32px] z-30
            font-light opacity-20 hover:opacity-40 transition-all'
            >
              Главная
            </Link>
          </div>
          <h1 className='leading-[30px] md:leading-[60px] lg:leading-[100px] z-30
            max-w-[281px] md:max-w-[600px] lg:max-w-[1023px] font-semibold
            justify-center items-center text-center text-[24px] md:text-[42px] lg:text-[80px]'
          >
            Качественный <span className='text-gradient relative animate-pulse'><i className='w-full h-[7%] bg-gradient absolute lg:-bottom-[4px] -bottom-[1px]'/>дизайн</span> по доступной цене
          </h1>
        </motion.div>

        <motion.div initial={{left: '45%', scale: '60%'}} animate={{left: '5%', scale: '100%', transition: {delay: .3, duration: 1, ease: 'circOut'}}}
          className={'absolute left-[5%] -z-10 top-[212px] hidden lg:flex'}
        >
          <LeftBracket/>
        </motion.div>
        
        <motion.div initial={{right: '45%', scale: '60%'}} animate={{right: '5%', scale: '100%', transition: {delay: .3, duration: 1, ease: 'circOut'}}}
          className={'absolute right-[5%] -z-10 top-[212px] hidden lg:flex'}
        >
          <RightBracket/>
        </motion.div>
  </>
}
