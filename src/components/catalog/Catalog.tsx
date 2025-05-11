import React from 'react'
import Line from './Line'
import Image from 'next/image'

export default function Catalog() {
    return (
        <section className='bg-[#0F0F0F] w-full min-h-[592px] py-10'>
            <div className='sm-container text-[#FFFFFF] flex flex-col gap-5'>
                <div className='flex flex-col items-center gap-2.5 text-center px-[80px] md:px-0'>
                    <h1 className='font-semibold text-[18px] md:text-[40px]'>КАТАЛОГ  INGAME.UZ</h1>
                    <p className='font-medium text-[12px] md:text-[22px]'>Выберите себе в каталоге  для максимально комфортной игры  </p>
                    <Line width='135px' color='#D3176D' />
                </div>
                <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-2.5'>
                    {[{ name: 'Монитор', image: '/catalog/monitor.png' },
                    { name: 'Столы', image: '/catalog/stol.png' },
                    { name: 'Кресла', image: '/catalog/kresla.png' },
                    { name: 'Клавиатура', image: '/catalog/klavish.png' },
                    { name: 'Комплектующие', image: '/catalog/keys.png' },
                    { name: 'Гарнитура', image: '/catalog/naushnik.png' },
                    { name: 'Мышки', image: '/catalog/mishka.png' },
                    { name: 'Аксессуары', image: '/catalog/mikrafon.png' },
                    ].map((item, index) => (
                        <div key={index} className='w-full min-h-[180px] flex flex-col items-center justify-between gap-3.5 py-4 px-10'>
                            <Image src={item.image} width={112} height={112} alt={item.name} aria-label={item.name} className='w-auto h-auto object-cover hover:scale-125 transition duration-300 cursor-pointer' />
                            <h3 className='text-[14px] md:text-[22px] font-medium'>{item.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
