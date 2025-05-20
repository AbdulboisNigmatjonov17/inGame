"use client"
import ServiceCard from './ServiceCard'

export default function Service() {
    return (
        <div className='min-h-[1099px] bg-[#1A1A1A] text-white py-[60px]'>
            <div className="Container flex flex-col gap-[30px] px-[30px] lg:px-0">
                <h1 className='font-semibold text-[40px] px-2.5'>Услуги</h1>
                <div className='w-full flex flex-wrap justify-center lg:justify-between gap-y-4 gap-x-5 lg:gap-x-0'>
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </div>
            </div>
        </div>
    )
}