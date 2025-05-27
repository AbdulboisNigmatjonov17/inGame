import Image from 'next/image'
import React from 'react'
interface IVideoCaruselCardProps {
  id: number,
  img: string,
  title: string,
  about: string,
  text: string
}
export default function VideoCaruselCard({ data }: { data: IVideoCaruselCardProps }) {
  return (
    <div className='w-[261px] h-[512px] relative rounded-3xl flex items-end p-5' style={{ backgroundImage: `url(${data.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='w-[260px] h-[84px] bg-[#BD1863] text-white py-3 px-[18px] absolute -top-12 -left-4'>
        <p className='font-semibold text-[16px]'>{data.text}</p>
        <Image src={'/video-carusel/undov.png'} width={34} height={24} alt={data.title} aria-label={data.title} className='absolute -bottom-[7px] -right-3' />
      </div>
      <div className='w-full'>
        <h4 className='font-bold text-[16px] leading-[190%]'>{data.title}</h4>
        <h5 className='font-normal text-[13px] leading-[190%]'>{data.about}</h5>
        <button className='w-20 h-[30px] cursor-pointer bg-[#D3176D] leading-[190%] font-semibold text-[16px]'>Play</button>
      </div>
    </div>
  )
}
