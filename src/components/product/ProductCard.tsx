"use client"
import { IProduct } from './IProductProps';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Image from 'next/image';
import React, { useState } from 'react';

interface ProductCardProps {
    item: IProduct;
}

export default function ProductCard({ item }: ProductCardProps) {
    const [like, setLike] = useState(false)
    return (
        <div className="bg-[#1E1E1E] w-[300px] h-[510px] relative px-5 py-[17px] flex flex-col gap-[18px] overflow-visible">
            {item.sale && <h2 className='absolute left-1 -top-[18px] z-50 w-[62px] h-[36px] flex items-center justify-center font-bold text-[16px] leading-[20px] border-[1px] border-[#D3176D]'>- 50%</h2>}
            {item.new && <h2 className='absolute left-1.5 top-2.5 w-[90px] h-[36px] flex items-center justify-center font-bold text-[16px] leading-[20px] border-[1px] border-[#D3176D]'>Новинка</h2>}
            {like ? <FaHeart className='w-[30px] h-[30px] cursor-pointer absolute top-[30px] right-[25px] text-[#D3176D]' onClick={() => setLike(!like)} /> :
                <FaRegHeart className='w-[30px] h-[30px] cursor-pointer absolute top-[30px] right-[25px]' onClick={() => setLike(!like)} />}
            <div className='w-full min-h-[250px] px-[45px] pt-[19px]'
                style={{
                    backgroundImage: `url(/product/productCardImageBg.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                <Image src={item.img}
                    width={210}
                    height={250}
                    alt={item.title}
                    className='w-full h-full object-cover transition-all duration-300 hover:scale-110' />
            </div>
            <h1 className='font-semibold text-[20px]'>Название кресла</h1>
            <div className='flex flex-col gap-0.5'>
                <h3 className='line-through font-normal text-[18px] leading-[100%]'>{item.price}</h3>
                <h2 className='text-[#D3176D] font-semibold text-[20px] leading-[100%]'>{item.sale_price}</h2>
            </div>
            <div className='flex flex-col gap-0.5'>
                <h3 className='font-light text-[16px] leading-[100%]'>{item.about}</h3>
                <h3 className='font-light text-[16px] leading-[100%]'>{item.about}</h3>
            </div>
            <div className='w-full flex gap-2.5 justify-end'>
                <button className='border-[1px] border-[#D3176D] w-[90px] h-[36px] flex items-center justify-center text-[16px] font-bold cursor-pointer transition-all duration-300 hover:bg-[#D3176D]'>Купить</button>
                <Image src='/product/search.png' width={36} height={36} alt='search' className='w-auto h-auto object-cover' />
            </div>
        </div>
    );
}