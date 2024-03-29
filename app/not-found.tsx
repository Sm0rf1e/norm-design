'use client'

import { Brackets } from '@/components/icons/brackets'
import { Metadata, NextPage } from 'next'
import { Header } from './_components/header'
import { LinkButton } from '@/components/ui/link-button'
import { motion } from 'framer-motion'

interface Props {}

const NotFound: NextPage<Props> = ({}) => {
  return <>
      <div className='h-[200px] w-screen'>
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1, transition: {duration: .5}}}
          className='lg:mt-[275px] h-full w-fit flex z-30 mr-auto ml-auto gap-y-[12px]
          lg:gap-y-[20px]'
        >
          <div className='flex flex-col gap-[40px] justify-center items-center z-30'>
            <h1 className='text-[16px] md:text-[24px] lg:text-[32px] z-30
            font-normal opacity-20'
            >
              Похоже, что мы не можем найти данную страницу
            </h1>
            <LinkButton href='/'>Вернуться</LinkButton>
          </div>
        </motion.div>
        <Brackets className={'absolute left-[5%] right-[5%] -z-10 top-[212px] hidden lg:flex'}/>
      </div>
  </>
}

export default NotFound