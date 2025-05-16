'use client';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from './ProductCard';

export default function SaleProducts() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1,
        }
    };

    const products = [
        { id: 1, img: '/product/productCardImage.png', title: 'Название кресла', price: '4 500 000 сум', sale_price: '4 852 000 сум', sale: false, new: true, about: 'Подробное инфо о кресле' },
        { id: 2, img: '/product/productCardImage.png', title: 'Название кресла', price: '4 500 000 сум', sale_price: '4 852 000 сум', sale: true, new: false, about: 'Подробное инфо о кресле' },
        { id: 3, img: '/product/productCardImage.png', title: 'Название кресла', price: '4 500 000 сум', sale_price: '4 852 000 сум', sale: false, new: false, about: 'Подробное инфо о кресле' },
        { id: 4, img: '/product/productCardImage.png', title: 'Название кресла', price: '4 500 000 сум', sale_price: '4 852 000 сум', sale: false, new: false, about: 'Подробное инфо о кресле' }
    ];

    return (
        <section className='bg-[#1A1A1A] text-white min-h-[650px] py-7'>
            <div className="Container md:flex flex-col gap-[24px] md:gap-[30px]">
                <h1 className='font-semibold text-[18px] md:text-[40px] px-5 lg:px-0 pb-6 md:pb-0'>Новинки</h1>

                {/* Desktop && Tablet version */}
                <div className='w-full hidden md:flex flex-wrap items-center justify-center lg:justify-between gap-[20px] lg:gap-0'>
                    {products.map((item) => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </div>

                {/* Mobile version */}
                <div className="md:hidden">
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        transitionDuration={500}
                        containerClass="w-full mx-auto overflow-visible"
                        itemClass="px-2 flex justify-center overflow-visible"
                        sliderClass="overflow-visible"
                    >
                        {products.map((item) => (
                            <ProductCard key={item.id} item={item} />
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    )
}