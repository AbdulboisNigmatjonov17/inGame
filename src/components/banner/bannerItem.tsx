"use client"
import Image from 'next/image'
import React from 'react'

export default function BannerItem() {
    return (
        <div className='Container md:h-[660px] text-white flex md:flex-row flex-col-reverse items-center'>
            <div className='md:w-[720px] flex flex-col gap-5 justify-center md:px-0 px-9 md:text-left text-center md:items-start items-center'>
                <h1 className='md:text-[60px] text-[25px] font-semibold md:font-medium'>NVIDIA RTX SUPER</h1>
                <p className='font-medium md:text-[22px]'>
                    Новые игровые видеокарты <span>NVIDIA GeForce RTX 4070 Super,
                        4070 Ti</span> и <span>4080</span> доступны к заказу!
                </p>
                <p className='font-medium md:text-[22px] md:block hidden'>
                    Будь среди первых и протестируй новые возможности
                </p>
                <button className='hover:bg-[#D3176D] w-[200px] transition-all duration-300 cursor-pointer'>
                    <Image src={'/banner/bannerButton.png'} width={200} height={50} alt='button podrobnee' aria-label='button podrobnee' />
                </button>
            </div>
            <div>
                <Image src={'/banner/bannerProduct.png'} alt='banner product' aria-label='banner product' width={500} height={420} />
            </div>
        </div>
    )
}
