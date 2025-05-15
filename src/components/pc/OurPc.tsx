import React from 'react'
import OurPcCard from './OurPcCard'

export default function OurPc() {
    return (
        <section className='w-full bg-[#1A1A1A] text-white min-h-[850px] py-8'>
            <div className="Container flex flex-col gap-[30px] ">
                <h1 className='font-semibold text-[18px] md:text-[40px] px-5 lg:px-0'>Наши ПК</h1>
                <div className='w-full flex md:flex-row flex-col flex-wrap justify-center gap-[42px] px-[30px] md:px-0'>
                    <OurPcCard />
                    <OurPcCard />
                    <OurPcCard />
                </div>
            </div>
        </section>
    )
}
