'use client'

import { motion } from 'framer-motion'
import { FC, PropsWithChildren } from 'react'

interface BlockProps {
  className: string
}

export const Block: FC<PropsWithChildren<BlockProps>> = ({className, children}) => {
  return <>
    <motion.div
      initial={{opacity: 0, y: '10%', scale: '90%'}}
      whileInView={{opacity: 1, y: 0, scale: '100%', transition: {duration: .5}}}
      viewport={{once: true}}
      className={className}
    >
      {children}
    </motion.div>
  </>
}
