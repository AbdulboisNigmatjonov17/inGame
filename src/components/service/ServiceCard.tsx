import Image from 'next/image'
import React from 'react'
import Line from '../catalog/Line'

export default function ServiceCard() {
    return (
        <div className='bg-[#1E1E1E] w-[300px] min-h-[437px] shadow-[0px_0px_10px_7px_rgba(17,17,17,0.25)]'>
            <Image src={'/service/serviceCard.png'} width={300} height={177} alt='service card image' aria-label='service card image' className='object-cover' />
            <div className='px-6 py-5 flex flex-col gap-2.5'>
                <div>
                    <h3 className='font-semibold text-[20px] text-[#D3176D]'>Кастомизация</h3>
                    <p className='font-medium text-[14px]'>Закастомизируем ваш ПК по вашему
                        любимому дизайну</p>
                </div>
                <Line width='337px' color='#D9D9D933' />
                <ul className='font-medium text-[14px] list-disc list-inside'>
                    <li>описание</li>
                    <li>описание</li>
                    <li>описание</li>
                    <li>описание</li>
                </ul>
                <div className='w-full flex justify-end'>
                    <button className='border-[3px] border-[#FFFFFF] w-[120px] h-[30px] hover:bg-[#FFFFFF] hover:text-[#1E1E1E] cursor-pointer transition-all duration-300'>Подробнее</button>
                </div>
            </div>
        </div>
    )
}
