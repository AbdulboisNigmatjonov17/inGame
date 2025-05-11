'use client';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BannerItem from "./bannerItem";

export default function Banner() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className='bg-black text-white md:h-[700px] min-h-[470px] flex items-center relative overflow-hidden md:py-0 py-6'>
            <div className='w-full z-10'>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    showDots={true}
                    transitionDuration={500}
                >
                    <BannerItem />
                    <BannerItem />
                    <BannerItem />
                </Carousel>
            </div>
            <div
                className='hidden md:block absolute top-0 right-0 w-[920px] h-[735px] bg-no-repeat bg-cover'
                style={{ backgroundImage: `url('/banner/bannerBack.png')` }}
            ></div>
            <div
                className='md:hidden block absolute top-0 right-0 w-[415px] h-[285px] bg-no-repeat bg-cover'
                style={{ backgroundImage: `url('/banner/bannerBackMob.png')` }}
            ></div>
        </section>
    )
}
