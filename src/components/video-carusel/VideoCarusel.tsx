"use client"
import React from 'react'
import Line from '../catalog/Line'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import VideoCaruselCard from './VideoCaruselCard';

export default function VideoCarusel() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1
        }
    };
    const products = [
        { id: 1, img: "/video-carusel/firstImg.png", title: "Лилия Аврелина", about: "Блогер, проф.стример", text: "“Через 3 часа после заказа я уже играла в любимую игру”" },
        { id: 2, img: "/video-carusel/secondImg.png", title: "Майкл Карлсон", about: "Киберспортсмен, проф.стример", text: "“Через 3 часа после заказа я уже играла в любимую игру”" },
        { id: 3, img: "/video-carusel/thirdImg.png", title: "Карина Павлова", about: "Киберспортсмен, проф.стример", text: "“Через 3 часа после заказа я уже играла в любимую игру”" },
        { id: 4, img: "/video-carusel/fourthImg.png", title: "Махбуба Абдуллаева", about: "Киберспортсмен, проф.стример", text: "“Через 3 часа после заказа я уже играла в любимую игру”" },
        { id: 5, img: "/video-carusel/last.jpg", title: "Karl ONE", about: "Киберспортсмен, проф.стример", text: "“Через 3 часа после заказа я уже играла в любимую игру”" },
    ]
    return (
        <section className='bg-[#0F0F0F] h-[873px] text-white py-[45px]'>
            <div className="Container flex flex-col gap-[34px] items-center">
                <div className='w-full md:w-[555px] flex flex-col items-center gap-2.5 mb-10'>
                    <h1 className='font-semibold text-3xl md:text-[40px] text-center'>Почему стоит выбрать нас?</h1>
                    <div className='flex flex-col items-center gap-5'>
                        <h3 className='font-medium text-lg md:text-[22px] text-center'>Об этом лучше всего расскажут сами наши клиенты!</h3>
                        <div style={{ width: '135px', height: '2px', backgroundColor: '#D3176D' }} />
                    </div>
                </div>
                <div className='w-full h-[560px] px-4'>
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        showDots={true}
                        autoPlaySpeed={3000}
                        transitionDuration={500}
                        itemClass="px-4 py-[48px] flex justify-center"
                    >
                        {products.map((item) => (
                            <VideoCaruselCard data={item} key={item.id} />
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    )
}