import Link from 'next/link'
import { FC } from 'react'

interface CircleLinksProps {
  icons: FC[]
}

export const CircleLinks: FC<CircleLinksProps> = ({icons}) => {
  return <>
    {icons.map((icon, i) => (
      <CircleLink icon={icon} key={i}/>
     ))}
  </>
}

interface CircleLinkProps {
  icon: FC
}

export const CircleLink: FC<CircleLinkProps> = ({icon}) => {
  let Icon = icon;

  return <>
      <Link href={'/'}>
        <div className='flex flex-col items-center lg:flex-row
          gap-x-[21px] gap-y-[15px] group cursor-pointer'>
          <Icon/>
        <div className='w-[50px] h-[15px] lg:h-[67px]
          bg-[#161616] group-hover:h-[20px] lg:group-hover:h-[67px]
          group-hover:rounded-t lg:group-hover:rounded-tr-none
          lg:group-hover:w-[70px] lg:group-hover:rounded-l-xl
          transition-all'
        />
      </div>
    </Link>
  </>
}

