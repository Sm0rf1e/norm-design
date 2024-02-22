'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'

interface SeperatorProps {}

export const Seperator: FC<SeperatorProps> = ({}) => {
  return <>
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1, transition: {duration: .5}}}
    viewport={{once: true}}
    className='lg:hidden block w-full h-[5px] bg-white rounded-full'/>
  </>
}
