"use client"
import React, { useState } from 'react'
import ToggleSwitch from './ToggleSwitch'
import MiniFilterBtn from './miniFilterBtn';
export default function MiniFilter() {
    const [activeFilter, setActiveFilter] = useState('По цене');

    const filters = ['По цене', 'По видеокарте', 'По процессору'];
    return (
        <div className='bg-[#0F0F0F] text-white min-h-[525px] py-12 flex flex-col items-center gap-10'>
            <div className='w-[865px] h-[340px] flex flex-col items-center gap-6'>
                <h1 className='font-semibold text-[40px]'>Подберем компьютер</h1>
                <div className='flex gap-10'>
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            className={`font-medium text-[22px] cursor-pointer ${activeFilter === filter
                                ? 'underline underline-offset-[10px] decoration-[#D3176D]'
                                : 'no-underline'
                                }`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
                <MiniFilterBtn />
                <div className='w-full flex flex-wrap justify-center gap-9'>
                    <ToggleSwitch text={'Игровые'} />
                    <ToggleSwitch text={'Компактные'} />
                    <ToggleSwitch text={'По играм'} />
                </div>
            </div>
            <button className='w-[242px] h-[52px] bg-[#D3176D] font-semibold text-[20px] cursor-pointer'>Готово</button>
        </div>
    )
}