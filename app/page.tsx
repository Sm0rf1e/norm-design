import { Brackets } from '@/components/ui/brackets'
import { DoubleSlash } from '@/components/ui/double-slash'
import { HomeIcon } from '@/components/ui/home-icon'
import { LinkButton } from '@/components/ui/link-button'
import { Logo } from '@/components/ui/logo'
import { ShineIcon } from '@/components/ui/shine-icon'
import Link from 'next/link'
import Image from 'next/image'
import { BrushIcon } from '@/components/ui/brush-icon'
import { PhoneIcon } from '@/components/ui/phone-icon'
import { MishaIcon } from '@/components/ui/misha-icon'
import { InstagramIcon } from '@/components/ui/instagram-icon'
import { BehanceIcon } from '@/components/ui/behance-icon'
import { TelegramIcon } from '@/components/ui/telegram-icon'
import { ImageSized } from '@/components/image-sized'
import { ScrollButton } from '@/components/ui/scroll-button'

export default function Home() {

  return (
    <>
      <nav className='flex w-full items-center justify-between fixed top-0 z-40 max-h-[100px] py-[17px] lg:py-[32px] px-[19px] lg:px-[100px] backdrop-blur-xl bg-gradient-to-b from-[#161616] to-[#161616E6]'>
        <Logo className='w-[71px] h-[17px] md:w-[100px] md:h-[47px] lg:w-[154px] lg:h-[71px]'/>
        <div className='flex gap-[21px]'>
          <ScrollButton to={2950} className='px-[20px] py-[5px] lg:py-[11px] text-[10px] md:text-[15px] lg:text-[15px] lg:px-[83px]'>Контакты</ScrollButton>
          <LinkButton href='https://t.me/@nn_michail' className='hidden md:flex lg:flex px-[20px] py-[5px] lg:py-[11px] lg:px-[83px]'>Портфолио</LinkButton>
        </div>
      </nav>
      <main>
          <div className='mt-[95px] lg:mt-[275px] w-fit mr-auto ml-auto gap-y-[12px] lg:gap-y-[20px] items-center'>
            <div className='flex gap-[20px] opacity-20 justify-center items-center'>
              <HomeIcon className='w-[20px] h-[20px] lg:w-[34px] lg:h-[34px]'/>
              <DoubleSlash className='w-[17px] h-[20px] lg:w-[24px] lg:h-[28px]'/>
              <Link href={'/'} className='text-[16px] md:text-[24px] lg:text-[32px] font-normal'>
                Главная
              </Link>
            </div>
            <h1 className='max-w-[281px] md:max-w-[600px] lg:max-w-[1023px] font-normal justify-center items-center text-center text-[24px] md:text-[42px] lg:text-[80px]'>
              Качественный <span className='underline underline-offset-[15%] animate-pulse'><span className='text-gradient'>дизайн</span></span> по доступной цене
            </h1>
          </div>
          <Brackets className={'absolute left-[5%] right-[5%] top-[212px] hidden lg:flex'}/>

          <div className='mt-[94px] lg:mt-[307px] flex flex-col gap-y-[10px] lg:gap-y-[20px] mr-[19px] ml-[19px] md:mr-[50px] md:ml-[50px] lg:mr-[100px] lg:ml-[100px] max-w-[1720px] mb-[33px]'>

            <div className='bg-gradient rounded-[15px] px-[15px] lg:px-[30px] h-[280px] lg:h-[500px] relative'>
              <div className='flex mt-[15px] lg:mt-[23px] justify-between'>
                <div className='flex gap-x-[10px] lg:gap-x-[20px]'>
                  <ShineIcon className='w-[21px] h-[20px] lg:w-[30px] lg:h-[29px]'/>
                  <DoubleSlash className='w-[17px] h-[20px] lg:w-[24px] lg:h-[28px]'/>
                  <p className='text-[16px] lg:text-2xl font-normal'>
                    Обо мне
                  </p>
                </div>
                <LinkButton href='https://t.me/@nn_michail' className='hidden md:flex lg:flex py-[11px] px-[83px] z-30'>
                  Перейти
                </LinkButton>
              </div>
              <div className='flex flex-col gap-[20px]'>
                <h2 className='leading-7 lg:leading-tight text-[24px] lg:text-6xl font-semibold z-30 max-w-[838px] mt-[12px] lg:mt-[93px]'>
                  Надежный дизайнер с <i className='font-semibold'>множеством кейсов</i> работ
                </h2>
                <h3 className='leading-4 z-30 text-[14px] lg:text-[24px] w-[183px] lg:w-[570px] font-normal'>
                  &#47;&#47; Меня зовут Михаил, буду рад поработать с вами
                </h3>
              </div>
              <div className='absolute flex md:hidden lg:hidden bottom-0 left-0 justify-center w-full mb-[9px]'>
                <LinkButton href='/' className='z-30'>
                  Перейти
                </LinkButton>
              </div>
              <div className='absolute bottom-0 left-0 z-0 w-full h-full'>
                <ImageSized name='block' className='rounded-[15px]'/>
              </div>
            </div>

            <div className='grid grid-cols-1 grid-rows-1 lg:grid-cols-[58%_auto] lg:grid-rows-[250px_250px] gap-[10px] lg:gap-[20px] w-full mr-auto ml-auto  transition-all'>

              <div className='w-full bg-gradient-to-r from-[#4469FF] to-[#4D70FF] px-[15px] lg:px-[30px] h-[259px] lg:h-full rounded-[15px] mr-auto ml-auto relative'>
                <div className='flex mt-[15px] lg:mt-[23px] justify-between'>
                  <div className='flex gap-x-[10px] lg:gap-x-[20px]'>
                    <BrushIcon className='w-[20px] h-[20px] lg:w-[34px] lg:h-[34px]'/>
                    <DoubleSlash className='w-[17px] h-[20px] lg:w-[24px] lg:h-[28px]'/>
                    <p className='text-[16px] lg:text-2xl font-normal'>
                      WEB-Дизайн
                    </p>
                  </div>
                </div>
                <div className='flex flex-col gap-[10px]'>
                  <h2 className='leading-7 text-[24px] lg:text-4xl z-30 max-w-[257px] lg:max-w-[400px] mt-[20px] lg:mt-[36px]'>
                    Оформление ваших услуг в формате <i>WEB</i>
                  </h2>
                </div>
                <div className='absolute bottom-0 left-0 z-0 w-full h-full'>
                  <ImageSized name='block-2' className='rounded-[15px]'/>
                </div>
              </div>

              
              <div className='w-full bg-white lg:col-start-1 px-[15px] lg:px-[30px] h-[259px] lg:h-full rounded-[15px] mr-auto ml-auto relative'>
                <div className='flex mt-[15px] lg:mt-[23px] justify-between'>
                  <div className='flex gap-x-[10px] z-30 lg:gap-x-[20px] justify-between'>
                    <ShineIcon color='#161616'/>
                    <DoubleSlash className='w-[17px] h-[20px] lg:w-[24px] lg:h-[28px]' color='#161616'/>
                    <p className='text-[16px] text-[#161616] lg:text-2xl font-normal'>
                      Бренд-дизайн
                    </p>
                  </div>
                </div>
                  <div className='flex flex-col z-30 gap-[10px]'>
                    <h2 className='leading-7 text-[24px] text-[#161616] lg:text-4xl z-30 max-w-[257px] lg:max-w-[400px] mt-[20px] lg:mt-[36px]'>
                      Оформление вашего <i>бренда // продукта</i>
                    </h2>
                </div>
                <div className='absolute bottom-0 left-0 z-0 w-full h-full'>
                  <ImageSized name='block-3' className='rounded-[15px]'/>
                </div>
              </div>

              
              <div className='w-full bg-white lg:col-start-2 lg:row-start-1 lg:row-end-3 row-span-1 px-[15px] lg:px-[30px] h-[259px] lg:h-full rounded-[15px] mr-auto ml-auto relative'>
                <div className='flex mt-[15px] lg:mt-[23px] justify-between items-center flex-wrap gap-y-[10px] z-30'>
                  <div className='flex gap-x-[10px] lg:gap-x-[20px] justify-between z-30'>
                    <PhoneIcon className='w-[20px] h-[20px] lg:w-[32px] lg:h-[32px]' color='#161616'/>
                    <DoubleSlash className='w-[17px] h-[20px] lg:w-[24px] lg:h-[28px]' color='#161616'/>
                    <p className='text-[16px] text-[#161616] lg:text-2xl font-normal drop-shadow-[0_0px_7px_#FFF]'>
                      Контакты
                    </p>
                  </div>
                    <LinkButton href='/' variant='secondary' className='hidden lg:flex z-30'>
                      Перейти
                    </LinkButton>
                </div>
                <div className='absolute bottom-0 left-0 z-0 w-full h-full'>
                  <ImageSized name='block-4' className='rounded-[15px]'/>
                </div>
              </div>

              <LinkButton href='/' className='flex lg:hidden'>
                  Перейти
              </LinkButton>
              
            </div>

            <div className='lg:hidden block w-full h-[5px] bg-white rounded-full'/>

            <div className='grid grid-cols-2 grid-rows-1 lg:grid-cols-[66%_auto] lg:grid-rows-[210px_351px] gap-[10px] lg:gap-[20px] w-full mr-auto ml-auto'>

                <div className='col-span-2 lg:col-span-1 lg:row-span-2 bg-white w-full h-full rounded-[20px]'>
                  <Image
                    className='rounded-[20px]'
                    src={'/cross.jpg'}
                    alt=''
                    width={1140}
                    height={581}
                  />
                </div>

                <div className='w-full bg-[#01A4F5] px-[15px] lg:px-[30px] h-[120px] lg:h-full rounded-[15px] mr-auto ml-auto relative'>
                  <div className='flex mt-[15px] lg:mt-[23px] z-30'>
                    <div className='flex flex-wrap gap-x-[5px] lg:gap-y-[10px] lg:gap-x-[20px] justify-center z-30 lg:justify-start w-full lg:w-auto'>
                      <BrushIcon className='w-[20px] h-[20px] lg:w-[34px] lg:h-[34px]'/>
                      <DoubleSlash className='w-[17px] h-[20px] lg:w-[24px] lg:h-[28px]'/>
                      <p className='text-[14px] lg:text-2xl font-normal drop-shadow-[0_0px_7px_#01A4F5]'>
                       Логотипы
                      </p>
                    </div>
                  </div>
                  <div className='absolute bottom-0 right-0 w-full h-full z-0'>
                    <ImageSized name='block-5' className='rounded-[15px]'/>
                  </div>
                </div>

                <div className='w-full bg-black px-[15px] lg:px-[30px] h-[120px] lg:h-full rounded-[15px] mr-auto ml-auto relative'>
                  <div className='flex mt-[15px] lg:mt-[23px] z-30'>
                    <div className='flex gap-x-[5px] lg:gap-y-[10px] lg:gap-x-[20px] z-30 justify-center lg:flex-wrap lg:justify-start w-full'>
                      <BrushIcon className='w-[20px] h-[20px] lg:w-[34px] lg:h-[34px]'/>
                      <DoubleSlash className='w-[17px] h-[20px] lg:w-[24px] lg:h-[28px]'/>
                      <p className='text-[14px] lg:text-2xl font-normal drop-shadow-[0_0px_7px_rgba(0,0,0,1)]'>
                       Инфографика
                      </p>
                    </div>
                  </div>
                  <div className='absolute bottom-0 right-0 w-full h-full z-0'>
                    <ImageSized name='block-7' className='rounded-[15px]'/>
                  </div>
                </div>

            </div>

            <div className='grid grid-cols-1 grid-rows-1 lg:grid-cols-[auto_57.5%] lg:grid-rows-1 gap-[10px] lg:gap-[20px]'>

                <div className='w-full bg-[#4469FF] px-[15px] lg:px-[30px] h-[120px] lg:h-[500px] rounded-[15px] mr-auto ml-auto relative'>
                  <div className='flex mt-[15px] lg:mt-[23px]'>
                    <div className='flex gap-x-[10px] lg:gap-x-[20px] w-full lg:w-auto z-30'>
                      <BrushIcon className='w-[20px] h-[20px] lg:w-[34px] lg:h-[34px]'/>
                      <DoubleSlash className='w-[17px] h-[20px] lg:w-[24px] lg:h-[28px]'/>
                      <p className='text-[14px] text-wrap lg:text-2xl font-normal truncate'>
                       Сайты
                      </p>
                    </div>
                  </div>
                  <div className='absolute bottom-0 right-0 w-full h-full z-0'>
                    <ImageSized name='block-8' className='rounded-[15px]'/>
                  </div>
                </div>

                <div className='w-full bg-white px-[15px] lg:px-[30px] h-[120px] lg:h-[500px] rounded-[15px] mr-auto ml-auto relative'>
                  <div className='flex mt-[15px] lg:mt-[23px]'>
                    <div className='flex gap-x-[10px] lg:gap-x-[20px] w-full lg:w-auto'>
                      <BrushIcon className='w-[20px] h-[20px] lg:w-[34px] lg:h-[34px]' color='#161616'/>
                      <DoubleSlash className='w-[17px] h-[20px] lg:w-[24px] lg:h-[28px]' color='#161616'/>
                      <p className='text-[14px] text-[#161616] text-wrap lg:text-2xl font-normal truncate'>
                       Мобильные приложения
                      </p>
                    </div>
                  </div>
                  <div className='absolute bottom-0 right-0 w-full h-full z-0'>
                    <ImageSized name='block-9' className='rounded-[15px]'/>
                  </div>
                </div>

            </div>

            <div className='lg:hidden block w-full h-[5px] bg-white rounded-full'/>

            <div className='w-full bg-white px-[15px] lg:px-[30px] h-[120px] lg:h-[250px] rounded-[15px] mr-auto ml-auto relative'>
                  <div className='flex mt-[15px] lg:mt-[50px]'>
                    <div className='flex gap-x-[10px] lg:gap-x-[20px] w-full lg:w-auto'>
                      <BrushIcon className='w-[20px] h-[20px] lg:w-[34px] lg:h-[34px]' color='#161616'/>
                      <DoubleSlash className='w-[17px] h-[20px] lg:w-[24px] lg:h-[28px]' color='#161616'/>
                      <p className='text-[14px] text-[#161616] text-wrap lg:text-2xl font-normal truncate'>
                       Контакты & Работы
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col gap-[10px]'>
                    <h2 className='leading-4 text-[16px] text-[#161616] lg:text-4xl z-30 max-w-[187px] lg:max-w-[400px] mt-[12px] lg:mt-[16px] font-medium'>
                      Ниже мои социальные сети и контакты
                    </h2>
                </div>
                <div className='absolute bottom-0 right-0 w-full h-full z-0'>
                    <ImageSized name='block-10' className='rounded-[15px]'/>
                  </div>
              </div>

              <div className='flex flex-col gap-y-[23px] lg:flex-row lg:justify-between lg:items-center w-full bg-gradient pt-[14px] lg:pt-0 px-[15px] lg:px-[30px] h-[160px] lg:h-[180px] rounded-[15px] mr-auto ml-auto relative'>
                <div>
                  <div className='flex'>
                    <div className='flex gap-x-[10px] lg:gap-x-[20px] w-full lg:w-auto'>
                      <BrushIcon className='w-[20px] h-[20px] lg:w-[34px] lg:h-[34px]'/>
                      <DoubleSlash className='w-[17px] h-[20px] lg:w-[24px] lg:h-[28px]'/>
                      <p className='text-[14px] text-wrap lg:text-2xl font-normal truncate'>
                        instagram.com
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col gap-[10px]'>
                    <h2 className='text-[14px] lg:text-4xl z-30 max-w-[258px] lg:max-w-[737px] mt-[7px] lg:mt-[10px] font-medium'>
                      Оформление вашего <i>бренда // продукта</i>
                    </h2>
                </div>
                </div>
                <LinkButton
                href='https://www.instagram.com/nn_michail/'
                iconSize='sm'
                className='h-[22px] w-[104px] lg:w-auto lg:h-[40px] px-[20px] py-[5px] text-[10px] lg:text-[15px] lg:px-[83px] lg:py-[20px] z-30'>
                  Перейти
                </LinkButton>
                <div className='absolute bottom-0 right-0 w-full h-full z-0'>
                    <ImageSized name='block-11' className='rounded-[15px]'/>
                  </div>
              </div>

              <div className='flex flex-col gap-y-[23px] lg:flex-row lg:justify-between lg:items-center w-full bg-[#13A2FF] pt-[14px] lg:pt-0 px-[15px] lg:px-[30px] h-[160px] lg:h-[180px] rounded-[15px] mr-auto ml-auto relative'>
                <div>
                  <div className='flex'>
                    <div className='flex gap-x-[10px] lg:gap-x-[20px] w-full lg:w-auto'>
                      <BrushIcon className='w-[20px] h-[20px] lg:w-[34px] lg:h-[34px]'/>
                      <DoubleSlash className='w-[17px] h-[20px] lg:w-[24px] lg:h-[28px]'/>
                      <p className='text-[14px] text-wrap lg:text-2xl font-normal truncate'>
                      behance.net
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col gap-[10px]'>
                    <h2 className='text-[14px] lg:text-4xl z-30 max-w-[258px] lg:max-w-[737px] mt-[7px] lg:mt-[10px] font-medium'>
                      Оформление вашего <i>бренда // продукта</i>
                    </h2>
                </div>
                </div>
                <LinkButton
                  href='https://www.behance.net/b6ff62d6'
                  iconSize='sm'
                  className='h-[22px] w-[104px] lg:w-auto lg:h-[40px] px-[20px] py-[5px] text-[10px] lg:text-[15px] lg:px-[83px] lg:py-[20px] z-30'>
                    Перейти
                </LinkButton>
                <div className='absolute bottom-0 right-0 w-full h-full z-0'>
                    <ImageSized name='block-12' className='rounded-[15px]'/>
                  </div>
              </div>

              <div className='flex flex-col gap-y-[23px] lg:flex-row lg:justify-between lg:items-center w-full bg-white px-[15px] pt-[14px] lg:pt-0 lg:px-[30px] h-[160px] lg:h-[180px] rounded-[15px] mr-auto ml-auto relative'>
                <div>
                  <div className='flex'>
                    <div className='flex gap-x-[10px] lg:gap-x-[20px] w-full lg:w-auto'>
                      <BrushIcon className='w-[20px] h-[20px] lg:w-[34px] lg:h-[34px]' color='#161616'/>
                      <DoubleSlash className='w-[17px] h-[20px] lg:w-[24px] lg:h-[28px]' color='#161616'/>
                      <p className='text-[14px] text-[#161616] text-wrap lg:text-2xl font-normal truncate'>
                        telegram.org
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col gap-[10px]'>
                    <h2 className='text-[14px] lg:text-4xl text-[#161616] z-30 max-w-[258px] lg:max-w-[737px] mt-[7px] lg:mt-[10px] font-medium'>
                      Оформление вашего <i>бренда // продукта</i>
                    </h2>
                </div>
                </div>
                <LinkButton
                  href='https://t.me/@nn_michail'
                  iconSize='sm'
                  variant='secondary'
                  className='h-[22px] w-[104px] lg:w-auto text-[#161616] lg:h-[40px] px-[20px] py-[5px] text-[10px] lg:text-[15px] lg:px-[83px] lg:py-[20px] z-30'>
                    Перейти
                </LinkButton>
                <div className='absolute bottom-0 right-0 w-full h-full z-0'>
                    <ImageSized name='block-13' className='rounded-[15px]'/>
                  </div>
              </div>

              <div className='bg-white rounded-[15px] px-[15px] lg:px-[30px] h-[280px] lg:h-[427px] relative'>
                <div className='flex mt-[15px] lg:mt-[23px] justify-between'>
                  <div className='flex gap-x-[10px] lg:gap-x-[20px]'>
                    <ShineIcon className='w-[21px] h-[20px] lg:w-[30px] lg:h-[29px]' color='#161616'/>
                    <DoubleSlash className='w-[17px] h-[20px] lg:w-[24px] lg:h-[28px]' color='#161616'/>
                    <p className='text-[16px] lg:text-2xl text-[#161616] font-normal'>
                      Благодарю за прочтение!
                    </p>
                  </div>
                </div>
                <div className='flex flex-col gap-[10px]'>
                  <h2 className='leading-4 text-[20px] lg:text-6xl z-30 text-[#161616] max-w-[277px] lg:max-w-[964px] lg:mr-[120px] mt-[12px] lg:mt-[93px]'>
                    Благодарю за ознакомление <span className='text-[15px] lg:text-[48px]'>с нетерпением жду нашего сотрудничества</span>
                  </h2>
                  <h3 className='z-30 text-[14px] lg:text-[24px] text-[#161616] mt-[10px] lg:mt-[25px] font-normal'>
                  &#47;&#47; Дизайн для ваших идей на мне
                  </h3>
                </div>
                <div className='flex items-end lg:flex-col w-full justify-around gap-y-[20px] lg:justify-start absolute left-0 bottom-0 lg:right-0 lg:top-[50px]'>

                  <Link href={'/'}>
                    <div className='flex flex-col items-center lg:flex-row gap-x-[21px] gap-y-[15px] group cursor-pointer'>
                      <MishaIcon/>
                      <div className='w-[50px] h-[15px] lg:h-[67px] bg-[#161616] group-hover:h-[20px] lg:group-hover:h-[67px] group-hover:rounded-t lg:group-hover:rounded-tr-none lg:group-hover:w-[70px] lg:group-hover:rounded-l-xl transition-all'/>
                    </div>
                  </Link>

                  <Link href={'https://www.instagram.com/nn_michail/'}>
                    <div className='flex flex-col items-center lg:flex-row gap-x-[21px] gap-y-[15px] group cursor-pointer'>
                      <InstagramIcon/>
                      <div className='w-[50px] h-[15px] lg:h-[67px] bg-[#161616] group-hover:h-[20px] lg:group-hover:h-[67px] group-hover:rounded-t lg:group-hover:rounded-tr-none lg:group-hover:w-[70px] lg:group-hover:rounded-l-xl transition-all'/>
                    </div>
                  </Link>

                  <Link href={'https://www.behance.net/b6ff62d6'}>
                    <div className='flex flex-col items-center lg:flex-row gap-x-[21px] gap-y-[15px] group cursor-pointer'>
                      <BehanceIcon/>
                      <div className='w-[50px] h-[15px] lg:h-[67px] bg-[#161616] group-hover:h-[20px] lg:group-hover:h-[67px] group-hover:rounded-t lg:group-hover:rounded-tr-none lg:group-hover:w-[70px] lg:group-hover:rounded-l-xl transition-all'/>
                    </div>
                  </Link>

                  <Link href={'https://t.me/@nn_michail'}>
                    <div className='flex flex-col items-center lg:flex-row gap-x-[21px] gap-y-[15px] group cursor-pointer'>
                      <TelegramIcon/>
                      <div className='w-[50px] h-[15px] lg:h-[67px] bg-[#161616] group-hover:h-[20px] lg:group-hover:h-[67px] group-hover:rounded-t lg:group-hover:rounded-tr-none lg:group-hover:w-[70px] lg:group-hover:rounded-l-xl transition-all'/>
                    </div>
                  </Link>

                </div>
            </div>

          </div>

      </main>
    </>
  );
}
