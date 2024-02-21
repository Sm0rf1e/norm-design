import { BehanceIcon } from '@/components/icons/behance-icon'
import { BrushIcon } from '@/components/icons/brush-icon'
import { DoubleSlash } from '@/components/icons/double-slash'
import { HomeIcon } from '@/components/icons/home-icon'
import { InstagramIcon } from '@/components/icons/instagram-icon'
import { MailIcon } from '@/components/icons/mail-icon'
import { ShineIcon } from '@/components/icons/shine-icon'
import { TelegramIcon } from '@/components/icons/telegram-icon'
import { ImageSized } from '@/components/ui/image-sized'
import { Brackets } from '@/components/icons/brackets'
import { LinkButton } from '@/components/ui/link-button'
import { PhoneIcon } from '@/components/icons/phone-icon'
import { ScrollButton } from '@/components/ui/scroll-button'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from './_components/header'
import { Container } from './_components/container'

export default function Home() {

  return (
    <>
      <Header/>
      
      <main className='font-sf_pro'>
        <div className='mt-[95px] lg:mt-[275px] w-fit z-30 mr-auto ml-auto gap-y-[12px]
          lg:gap-y-[20px]'
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
        </div>
        <Brackets className={'absolute left-[5%] right-[5%] -z-10 top-[212px] hidden lg:flex'}/>

          <Container>

            <div className='bg-gradient rounded-[15px] px-[15px] lg:px-[30px] h-[280px] lg:h-[500px] relative'>
              <div className='flex mt-[15px] lg:mt-[23px] justify-between'>
                <div className='flex items-center gap-x-[10px] lg:gap-x-[20px]'>
                  <ShineIcon className='w-[21px] h-[20px] lg:w-[30px] lg:h-[29px]'/>
                  <DoubleSlash className='w-[17px] h-[20px] lg:w-[24px] lg:h-[28px]'/>
                  <p className='text-[16px] lg:text-[32px] font-light z-30'>
                    Обо мне
                  </p>
                </div>
                <LinkButton href='https://t.me/@nn_michail' className='hidden md:flex lg:flex py-[11px] px-[83px] z-30'>
                  Перейти
                </LinkButton>
              </div>
              <div className='flex flex-col gap-[20px]'>
                <h2 className='leading-7 lg:leading-tight text-[24px] lg:text-6xl font-normal z-30 max-w-[838px] mt-[12px] lg:mt-[93px]'>
                  Надежный дизайнер с <span className='font-sf_pro_italic font-normal'>множеством кейсов</span> работ
                </h2>
                <h3 className='leading-4 z-30 text-[14px] lg:text-[24px] w-[183px] lg:w-[570px] font-normal'>
                  &#47;&#47; Меня зовут Михаил, буду рад поработать с вами
                </h3>
              </div>
              <div className='absolute flex md:hidden lg:hidden bottom-0 left-0 justify-center w-full mb-[9px]'>
                <LinkButton href='https://t.me/@nn_michail' className='z-30'>
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
                  <div className='flex items-center gap-x-[10px] lg:gap-x-[20px]'>
                    <BrushIcon className='w-[20px] h-[20px] lg:w-[34px] lg:h-[34px]'/>
                    <DoubleSlash className='w-[17px] h-[20px] lg:w-[24px] lg:h-[28px]'/>
                    <p className='text-[16px] lg:text-[32px] font-light z-30'>
                      WEB-Дизайн
                    </p>
                  </div>
                </div>
                <div className='flex flex-col gap-[10px]'>
                  <h2 className='leading-7 text-[24px] lg:text-4xl z-30 max-w-[257px] font-normal lg:max-w-[400px] mt-[20px] lg:mt-[36px]'>
                    Оформление ваших услуг в формате <span className='font-sf_pro_italic font-normal'>WEB</span>
                  </h2>
                </div>
                <div className='absolute bottom-0 left-0 z-0 w-full h-full'>
                  <ImageSized name='block-2' className='rounded-[15px]'/>
                </div>
              </div>

              
              <div className='w-full bg-white lg:col-start-1 px-[15px] lg:px-[30px] h-[259px] lg:h-full rounded-[15px] mr-auto ml-auto relative'>
                <div className='flex mt-[15px] lg:mt-[23px] justify-between'>
                  <div className='flex items-center gap-x-[10px] z-30 lg:gap-x-[20px] justify-between'>
                    <BrushIcon color='#161616'/>
                    <DoubleSlash className='w-[17px] h-[20px] lg:w-[24px] lg:h-[28px]' color='#161616'/>
                    <p className='text-[16px] text-[#161616] lg:text-[32px] font-light'>
                      Бренд-дизайн
                    </p>
                  </div>
                </div>
                  <div className='flex flex-col z-30 gap-[10px]'>
                    <h2 className='leading-7 text-[24px] text-[#161616] lg:text-4xl z-30 max-w-[257px] lg:max-w-[400px] mt-[20px] lg:mt-[36px]'>
                      Оформление вашего <span className='font-sf_pro_italic font-normal'>бренда // продукта</span>
                    </h2>
                </div>
                <div className='absolute bottom-0 left-0 z-0 w-full h-full'>
                  <ImageSized name='block-3' className='rounded-[15px]'/>
                </div>
              </div>

              
              <div className='w-full bg-white lg:col-start-2 lg:row-start-1 lg:row-end-3 row-span-1 px-[15px] lg:px-[30px] h-[259px] lg:h-full rounded-[15px] mr-auto ml-auto relative'>
                <div className='flex mt-[15px] lg:mt-[23px] justify-between items-center flex-wrap gap-y-[10px] z-30'>
                  <div className='flex items-center gap-x-[10px] lg:gap-x-[20px] justify-between z-30'>
                    <PhoneIcon className='w-[20px] h-[20px] lg:w-[32px] lg:h-[32px]' color='#161616'/>
                    <DoubleSlash className='w-[17px] h-[20px] lg:w-[24px] lg:h-[28px]' color='#161616'/>
                    <p className='text-[16px] text-[#161616] lg:text-[32px] font-light drop-shadow-[0_0px_7px_#FFF]'>
                      Контакты
                    </p>
                  </div>
                    <ScrollButton to={2950} variant='secondary' className='hidden lg:flex z-30'>
                      Перейти
                    </ScrollButton>
                </div>
                <div className='absolute bottom-0 left-0 z-0 w-full h-full'>
                  <ImageSized name='block-4' className='rounded-[15px]'/>
                </div>
              </div>

              <ScrollButton to={2950} className='flex lg:hidden'>
                Перейти
              </ScrollButton>
              
            </div>

            <div className='lg:hidden block w-full h-[5px] bg-white rounded-full'/>

            <div className='grid grid-cols-2 grid-rows-1 lg:grid-cols-[66%_auto] lg:grid-rows-[210px_351px] gap-[10px] lg:gap-[20px] w-full mr-auto ml-auto'>

                <div className='col-span-2 lg:col-span-1 lg:row-span-2 bg-white w-full h-full rounded-[20px]'>
                  <Image
                    className='rounded-[20px]'
                    src={'/block-6.jpg'}
                    alt=''
                    width={1140}
                    height={581}
                  />
                </div>

                <div className='w-full bg-[#01A4F5] px-[15px] lg:px-[30px] h-[120px] lg:h-full rounded-[15px] mr-auto ml-auto relative'>
                  <div className='flex mt-[15px] lg:mt-[23px] z-30'>
                    <div className='flex items-center gap-x-[5px] lg:gap-y-[10px] lg:gap-x-[20px] justify-center z-30 lg:justify-start w-full lg:w-auto'>
                      <BrushIcon className='w-[20px] h-[20px] lg:w-[34px] lg:h-[34px]'/>
                      <DoubleSlash className='w-[17px] h-[20px] lg:w-[24px] lg:h-[28px]'/>
                      <p className='text-[14px] lg:text-[32px] font-light drop-shadow-[0_0px_7px_#01A4F5] truncate'>
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
                    <div className='flex  items-center gap-x-[5px] lg:gap-y-[10px] lg:gap-x-[20px] z-30 justify-center lg:flex-wrap lg:justify-start w-full'>
                      <BrushIcon className='w-[20px] h-[20px] lg:w-[34px] lg:h-[34px]'/>
                      <DoubleSlash className='w-[17px] h-[20px] lg:w-[24px] lg:h-[28px]'/>
                      <p className='text-[14px] lg:text-[32px] font-light drop-shadow-[0_0px_7px_rgba(0,0,0,1)] truncate'>
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
                    <div className='flex items-center gap-x-[10px] lg:gap-x-[20px] w-full lg:w-auto z-30'>
                      <BrushIcon className='w-[20px] h-[20px] lg:w-[34px] lg:h-[34px]'/>
                      <DoubleSlash className='w-[17px] h-[20px] lg:w-[24px] lg:h-[28px]'/>
                      <p className='text-[14px] text-wrap lg:text-[32px] font-light truncate'>
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
                    <div className='flex items-center gap-x-[10px] lg:gap-x-[20px] w-full lg:w-auto'>
                      <BrushIcon className='w-[20px] h-[20px] lg:w-[34px] lg:h-[34px]' color='#161616'/>
                      <DoubleSlash className='w-[17px] h-[20px] lg:w-[24px] lg:h-[28px]' color='#161616'/>
                      <p className='text-[14px] text-[#161616] text-wrap lg:text-[32px] font-light truncate z-30'>
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
                    <div className='flex items-center gap-x-[10px] lg:gap-x-[20px] w-full lg:w-auto'>
                      <BrushIcon className='w-[20px] h-[20px] lg:w-[34px] lg:h-[34px] z-30' color='#161616'/>
                      <DoubleSlash className='w-[17px] h-[20px] lg:w-[24px] lg:h-[28px] z-30' color='#161616'/>
                      <p className='text-[14px] text-[#161616] text-wrap lg:text-[32px] font-light truncate z-30'>
                       Контакты & Работы
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col gap-[10px]'>
                    <h2 className='leading-4 text-[16px] text-[#161616] lg:text-4xl z-30 max-w-[187px] lg:max-w-[400px] mt-[12px] lg:mt-[16px] font-normal'>
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
                    <div className='flex items-center gap-x-[10px] lg:gap-x-[20px] w-full lg:w-auto'>
                      <BrushIcon className='w-[20px] h-[20px] lg:w-[34px] lg:h-[34px]'/>
                      <DoubleSlash className='w-[17px] h-[20px] lg:w-[24px] lg:h-[28px]'/>
                      <p className='text-[14px] text-wrap lg:text-[32px] font-light truncate z-30'>
                        instagram.com
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col gap-[10px]'>
                    <h2 className='text-[14px] lg:text-4xl z-30 max-w-[258px] lg:max-w-[737px] mt-[7px] lg:mt-[10px] font-normal'>
                      Оформление вашего <span className='font-sf_pro_italic font-normal'>бренда // продукта</span>
                    </h2>
                </div>
                </div>
                <LinkButton
                href='https://www.instagram.com/nn_michail/'
                iconSize='sm'
                className='h-[32px] w-[104px] lg:w-auto lg:h-[40px] px-[20px] py-[5px] text-[10px] lg:text-[15px] lg:px-[83px] lg:py-[20px] z-30'>
                  Перейти
                </LinkButton>
                <div className='absolute bottom-0 right-0 w-full h-full z-0'>
                    <ImageSized name='block-11' className='rounded-[15px]'/>
                  </div>
              </div>

              <div className='flex flex-col gap-y-[23px] lg:flex-row lg:justify-between lg:items-center w-full bg-[#13A2FF] pt-[14px] lg:pt-0 px-[15px] lg:px-[30px] h-[160px] lg:h-[180px] rounded-[15px] mr-auto ml-auto relative'>
                <div>
                  <div className='flex'>
                    <div className='flex items-center gap-x-[10px] lg:gap-x-[20px] w-full lg:w-auto'>
                      <BrushIcon className='w-[20px] h-[20px] lg:w-[34px] lg:h-[34px]'/>
                      <DoubleSlash className='w-[17px] h-[20px] lg:w-[24px] lg:h-[28px]'/>
                      <p className='text-[14px] text-wrap lg:text-[32px] font-light truncate z-30'>
                      behance.net
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col gap-[10px]'>
                    <h2 className='text-[14px] lg:text-4xl z-30 max-w-[258px] lg:max-w-[737px] mt-[7px] lg:mt-[10px] font-normal'>
                      Оформление вашего <span className='font-sf_pro_italic font-normal'>бренда // продукта</span>
                    </h2>
                </div>
                </div>
                <LinkButton
                  href='https://www.behance.net/b6ff62d6'
                  iconSize='sm'
                  className='h-[32px] w-[104px] lg:w-auto lg:h-[40px] px-[20px] py-[5px] text-[10px] lg:text-[15px] lg:px-[83px] lg:py-[20px] z-30'>
                    Перейти
                </LinkButton>
                <div className='absolute bottom-0 right-0 w-full h-full z-0'>
                    <ImageSized name='block-12' className='rounded-[15px]'/>
                  </div>
              </div>

              <div className='flex flex-col gap-y-[23px] lg:flex-row lg:justify-between lg:items-center w-full bg-white px-[15px] pt-[14px] lg:pt-0 lg:px-[30px] h-[160px] lg:h-[180px] rounded-[15px] mr-auto ml-auto relative'>
                <div>
                  <div className='flex'>
                    <div className='flex items-center gap-x-[10px] lg:gap-x-[20px] w-full lg:w-auto'>
                      <BrushIcon className='w-[20px] h-[20px] lg:w-[34px] lg:h-[34px]' color='#161616'/>
                      <DoubleSlash className='w-[17px] h-[20px] lg:w-[24px] lg:h-[28px]' color='#161616'/>
                      <p className='text-[14px] text-[#161616] text-wrap lg:text-[32px] font-light truncate z-30'>
                        telegram.org
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col gap-[10px]'>
                    <h2 className='text-[14px] lg:text-4xl text-[#161616] z-30 max-w-[258px] lg:max-w-[737px] mt-[7px] lg:mt-[10px] font-normal'>
                      Оформление вашего <span className='font-sf_pro_italic font-normal'>бренда // продукта</span>
                    </h2>
                </div>
                </div>
                <LinkButton
                  href='https://t.me/@nn_michail'
                  iconSize='sm'
                  variant='secondary'
                  className='h-[32px] w-[104px] lg:w-auto text-[#161616] lg:h-[40px] px-[20px] py-[5px] text-[10px] lg:text-[15px] lg:px-[83px] lg:py-[20px] z-30'>
                    Перейти
                </LinkButton>
                <div className='absolute bottom-0 right-0 w-full h-full z-0'>
                    <ImageSized name='block-13' className='rounded-[15px]'/>
                  </div>
              </div>

              <div className='bg-white rounded-[15px] px-[15px] lg:px-[30px] h-[280px] lg:h-[427px] relative'>
                <div className='flex mt-[15px] lg:mt-[23px] justify-between'>
                  <div className='flex items-center gap-x-[10px] lg:gap-x-[20px]'>
                    <ShineIcon className='w-[21px] h-[20px] lg:w-[30px] lg:h-[29px]' color='#161616'/>
                    <DoubleSlash className='w-[17px] h-[20px] lg:w-[24px] lg:h-[28px]' color='#161616'/>
                    <p className='text-[16px] lg:text-[32px] text-[#161616] font-normal'>
                      Благодарю за прочтение!
                    </p>
                  </div>
                </div>
                <div className='flex flex-col gap-[10px]'>
                  <h2 className='flex flex-col leading-5 text-[20px] lg:text-6xl z-30 text-[#161616] max-w-[277px] lg:max-w-full lg:mr-[120px] mt-[12px] lg:mt-[62px] font-normal'>
                    Благодарю за ознакомление <span className='text-[15px] lg:text-[48px]'>с нетерпением жду нашего сотрудничества</span>
                  </h2>
                  <h3 className='z-30 text-[14px] lg:text-[24px] text-[#161616] mt-[10px] lg:mt-[25px] font-normal'>
                  &#47;&#47; Дизайн ваших идей на мне
                  </h3>
                </div>
                <div className='flex items-end lg:flex-col flex-row-reverse w-full md:justify-around gap-x-[14px] justify-center gap-y-[20px] lg:justify-start absolute left-0 bottom-0 lg:right-0 lg:top-[50px]'>

                  <Link href={'/'}>
                    <div className='flex flex-col items-center lg:flex-row gap-x-[21px] gap-y-[15px] group cursor-pointer'>
                      <MailIcon/>
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

          </Container>

      </main>
    </>
  );
}
