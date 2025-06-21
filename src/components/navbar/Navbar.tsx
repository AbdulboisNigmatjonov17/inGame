import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='h-[80px] bg-[#1A1A1A] text-white'>
      <div className="Container flex justify-between items-center h-full">
        <div className=' flex items-center h-full gap-[30px]'>
          <Link href={'/'}>
            <Image src={'/navbar/LogoIngame.png'} width={160} height={40} alt='logo' aria-label='logo' />
          </Link>
          <ul className='flex gap-8'>
            <li className='flex gap-1 text-[20px] leading-[20px] font-normal'>Продукция <Image src={'/navbar/downIcon.png'} width={14} height={14} alt='arrow' aria-label='arrow' className='object-contain' /></li>
            <li className='flex gap-1 text-[20px] leading-[20px] font-normal'>Услуги <Image src={'/navbar/downIcon.png'} width={14} height={14} alt='arrow' aria-label='arrow' className='object-contain' /></li>
            <li className='text-[20px] leading-[20px] font-normal'>О бренде</li>
          </ul>
        </div>
        <div className=' flex gap-2 items-center'>
          <div className='w-[262px] flex items-center gap-6'>
            <button className='border-[#fff] border-[1px] w-[123px] h-9 text-[20px] leading-[20px] font-normal hover:bg-[#fff] hover:text-[#1A1A1A] cursor-pointer transition-all duration-300'>Связаться</button>
            <ul className='flex gap-3'>
              <li className='flex gap-1 text-[20px] leading-[20px] font-normal'>Ru <Image src={'/navbar/downIcon.png'} width={14} height={14} alt='arrow' aria-label='arrow' className='object-contain' /></li>
              <li className='flex gap-1 text-[20px] leading-[20px] font-normal'>USD <Image src={'/navbar/downIcon.png'} width={14} height={14} alt='arrow' aria-label='arrow' className='object-contain' /></li>
            </ul>
          </div>
          <div className='w-[262px] flex items-center gap-[18px]'>
            <Image src={'/navbar/sts.png'} width={25} height={24} alt='search' aria-label='search' className='object-contain cursor-pointer transition hover:scale-110' />
            <Image src={'/navbar/search.png'} width={25} height={24} alt='search' aria-label='search' className='object-contain cursor-pointer transition hover:scale-110' />
            <Image src={'/navbar/right.png'} width={25} height={24} alt='search' aria-label='search' className='object-contain cursor-pointer transition hover:scale-110' />
          </div>
        </div>
      </div>
    </div>
  )
}
