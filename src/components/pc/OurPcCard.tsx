import Image from 'next/image'
import React from 'react'
import Line from '../catalog/Line'

export default function OurPcCard() {
    return (
        <div className='bg-[#1E1E1E] w-[315px] md:w-[360px] h-[700px] py-6 px-5 relative flex flex-col gap-2.5'>
            <div className='w-full h-[190px]'>
                <Image src={'/pc/pc.png'} width={335} height={190} alt='pc' aria-label='pc' className=' object-cover' />
                <div className='w-[404px] md:w-[440px] h-[250px] absolute top-[1px] left-[23px] bg-no-repeat' style={{ backgroundImage: 'url(/pc/pcBg.png)', backgroundSize: 'contain' }}></div>
            </div>
            <div className='w-full flex flex-col gap-2 items-end'>
                <div className='w-full flex gap-4 justify-between items-center'>
                    <h4 className='bg-[#D3176D] w-[118px] h-6 text-[10px] font-semibold flex items-center justify-center rounded-[20px]'>12 КОМПЛЕКТАЦИЙ</h4>
                    <div className='w-[190px] h-[42px] relative hover:bg-[#D3176D] cursor-pointer transition-all duration-300'>
                        <Image src={'/pc/price.png'} fill alt='price' aria-label='price' className='object-cover' />
                    </div>
                </div>
                <h5 className='text-[#D3176D] font-medium text-[14px] '>~ 459 000 сум/месяц</h5>
            </div>
            <Line color='#D9D9D933' width='337px' />
            <div className='w-full flex flex-col'>
                <h3 className='text-[#D3176D] font-semibold text-[20px]'>Оптимальные</h3>
                <h5 className='font-medium text-[14px] '>Сбалансированные  игровые ПК</h5>
            </div>
            <div className='w-full flex flex-col gap-3.5'>
                <div className='flex gap-2.5'>
                    <Image src={'/pc/processor.png'} width={30} height={30} alt='pc' aria-label='pc' className='object-contain' />
                    <div>
                        <h6 className='font-medium text-xs text-[#AAA7A7]'>Процессоры</h6>
                        <h4 className='font-medium text-[14px]'>названия процессоров</h4>
                    </div>
                </div>
                <div className='flex gap-2.5'>
                    <Image src={'/pc/video_card.png'} width={30} height={30} alt='pc' aria-label='pc' className='object-contain' />
                    <div>
                        <h6 className='font-medium text-xs text-[#AAA7A7]'>Видеокарты</h6>
                        <h4 className='font-medium text-[14px]'>названия</h4>
                    </div>
                </div>
                <div className='flex gap-2.5'>
                    <Image src={'/pc/temperature.png'} width={30} height={30} alt='pc' aria-label='pc' className='object-contain' />
                    <div>
                        <h6 className='font-medium text-xs text-[#AAA7A7]'>Охлаждение</h6>
                        <h4 className='font-medium text-[14px]'>названия</h4>
                    </div>
                </div>
                <div className='flex gap-2.5'>
                    <Image src={'/pc/ram.png'} width={30} height={30} alt='pc' aria-label='pc' className='object-contain' />
                    <div>
                        <h6 className='font-medium text-xs text-[#AAA7A7]'>Память   </h6>
                        <h4 className='font-medium text-[14px]'>названия</h4>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2.5'>
                <h4 className='font-medium text-[14px]'>Performance</h4>
                <div className='w-full border-[1px] border-[#FFFFFF]'>
                    <div className='grid grid-cols-3 p-1.5 '>
                        <h3>Игра/FPS</h3>
                        <div className='text-center'>
                            <h3>1080p</h3>
                        </div>
                        <div className='text-center'>
                            <h3>1440p</h3>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 border-t-[1px] border-[#FFFFFF] p-1.5'>
                        <h3>GTA V</h3>
                        <div className='text-center'>
                            <h3>160</h3>
                        </div>
                        <div className='text-center'>
                            <h3>40</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between'>
                <button className='border-[3px] border-[#FFFFFF] w-[120px] h-[30px] hover:bg-[#FFFFFF] hover:text-[#1E1E1E] cursor-pointer transition-all duration-300'>Подробнее</button>
                <button className='border-[3px] border-[#BD1863] w-[120px] h-[30px] hover:bg-[#BD1863] cursor-pointer transition-all duration-300'>Подробнее</button>
                <Image src={'/pc/sts.png'} width={25} height={24} alt='sts' aria-label='sts' className='object-contain' />
            </div>
        </div>
    )
}
