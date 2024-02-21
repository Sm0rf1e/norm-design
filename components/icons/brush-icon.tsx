import { FC } from 'react'

interface HomeProps {
  color?: string
  className?: string
}

export const BrushIcon: FC<HomeProps> = ({className, color = 'white'}) => {
  return <>
    <svg className={className} width={34} height={34} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.76218 20.248C9.81018 20.2734 9.86029 20.296 9.9124 20.3157C10.0113 20.3531 10.112 20.3776 10.2125 20.3903C10.9898 20.6719 11.6995 21.1215 12.289 21.711C12.8784 22.3005 13.3281 23.0101 13.6097 23.7874C13.6223 23.888 13.6469 23.9886 13.6843 24.0876C13.704 24.1398 13.7266 24.1899 13.752 24.238C13.7854 24.3615 13.8147 24.4864 13.8398 24.6124C14.0585 25.7117 13.9463 26.851 13.5174 27.8865C13.0885 28.9219 12.3621 29.8069 11.4303 30.4296C10.4984 31.0523 9.4028 31.3846 8.28204 31.3846H2.61538V25.718C2.61538 24.5972 2.94773 23.5016 3.57039 22.5697C4.19305 21.6378 5.07806 20.9115 6.11351 20.4826C7.14895 20.0537 8.28833 19.9415 9.38755 20.1602C9.51367 20.1853 9.63861 20.2146 9.76218 20.248Z" fill={color}/>
    <path d="M25.847 14.0979C24.8815 15.3094 23.8161 16.4292 22.6647 17.4473C21.1882 14.9177 19.0823 12.8118 16.5527 11.3353C17.5707 10.1839 18.6906 9.11842 19.9021 8.15301C23.1749 5.54504 27.01 3.75172 31.0918 2.90823C30.2483 6.98995 28.4549 10.8251 25.847 14.0979Z" fill={color}/>
    <path d="M15.6407 21.9176C15.251 21.163 14.7454 20.4687 14.1383 19.8617C13.5313 19.2546 12.837 18.749 12.0824 18.3593C12.8434 16.6063 13.7889 14.9458 14.8993 13.4045C17.3016 14.7218 19.2782 16.6984 20.5955 19.1007C19.0542 20.2111 17.3937 21.1566 15.6407 21.9176Z" fill={color}/>
    <path fillRule="evenodd" clipRule="evenodd" d="M33.9879 1.48492C34.0433 1.07983 33.9061 0.672137 33.617 0.383026C33.3279 0.0939156 32.9202 -0.0433331 32.5151 0.0120761C27.3053 0.72468 22.3845 2.83063 18.2722 6.10763C14.4667 9.14017 11.4841 13.0715 9.58817 17.5395C8.07836 17.2984 6.52898 17.4797 5.11264 18.0663C3.5993 18.6932 2.30582 19.7547 1.39578 21.1167C0.485733 22.4787 0 24.0799 0 25.718V32.6923C0 33.4145 0.585474 34 1.30769 34H8.28204C9.92008 34 11.5213 33.5143 12.8833 32.6042C14.2453 31.6942 15.3068 30.4007 15.9337 28.8874C16.5203 27.471 16.7016 25.9216 16.4604 24.4118C20.9285 22.5159 24.8598 19.5333 27.8923 15.7278C31.1693 11.6155 33.2753 6.69472 33.9879 1.48492ZM9.9124 20.3157C9.86029 20.296 9.81018 20.2734 9.76218 20.248C9.63861 20.2146 9.51367 20.1853 9.38755 20.1602C8.28833 19.9415 7.14895 20.0537 6.11351 20.4826C5.07806 20.9115 4.19305 21.6378 3.57039 22.5697C2.94773 23.5016 2.61538 24.5972 2.61538 25.718V31.3846H8.28204C9.4028 31.3846 10.4984 31.0523 11.4303 30.4296C12.3621 29.8069 13.0885 28.9219 13.5174 27.8865C13.9463 26.851 14.0585 25.7117 13.8398 24.6124C13.8147 24.4864 13.7854 24.3615 13.752 24.238C13.7266 24.1899 13.704 24.1398 13.6843 24.0876C13.6469 23.9886 13.6223 23.888 13.6097 23.7874C13.3281 23.0101 12.8784 22.3005 12.289 21.711C11.6995 21.1215 10.9898 20.6719 10.2125 20.3903C10.112 20.3776 10.0113 20.3531 9.9124 20.3157ZM14.1383 19.8617C14.7454 20.4687 15.251 21.163 15.6407 21.9176C17.3937 21.1566 19.0542 20.2111 20.5955 19.1007C19.2782 16.6984 17.3016 14.7218 14.8993 13.4045C13.7889 14.9458 12.8434 16.6063 12.0824 18.3593C12.837 18.749 13.5313 19.2546 14.1383 19.8617ZM22.6647 17.4473C23.8161 16.4292 24.8815 15.3094 25.847 14.0979C28.4549 10.8251 30.2483 6.98995 31.0918 2.90823C27.01 3.75172 23.1749 5.54504 19.9021 8.15301C18.6906 9.11842 17.5707 10.1839 16.5527 11.3353C19.0823 12.8118 21.1882 14.9177 22.6647 17.4473Z" fill={color}/>
    </svg>
  </>
}
