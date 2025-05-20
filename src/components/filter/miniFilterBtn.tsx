"use client"
import { useState } from 'react';
import Image from 'next/image';

const MiniFilterBtn = () => {
    const [activeButtons, setActiveButtons] = useState<number[]>([]);

    const toggleButton = (index: number) => {
        setActiveButtons(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const buttons = [
        { id: 1, defaultImg: '/filter/miniFilterBtn.png', activeImg: '/filter/miniFilterBtn2.png' },
        { id: 2, defaultImg: '/filter/miniFilterBtn.png', activeImg: '/filter/miniFilterBtn2.png' },
        { id: 3, defaultImg: '/filter/miniFilterBtn.png', activeImg: '/filter/miniFilterBtn2.png' },
        { id: 4, defaultImg: '/filter/miniFilterBtn.png', activeImg: '/filter/miniFilterBtn2.png' },
        { id: 5, defaultImg: '/filter/miniFilterBtn.png', activeImg: '/filter/miniFilterBtn2.png' },
        { id: 6, defaultImg: '/filter/miniFilterBtn.png', activeImg: '/filter/miniFilterBtn2.png' },
        { id: 7, defaultImg: '/filter/miniFilterBtn.png', activeImg: '/filter/miniFilterBtn2.png' },
    ];

    return (
        <div className='w-full min-h-[112px] mt-2.5'>
            <div className='flex flex-wrap justify-center gap-9'>
                {buttons.map((btn, index) => (
                    <button
                        key={btn.id}
                        onClick={() => toggleButton(index)}
                        className='border-none bg-transparent cursor-pointer'
                    >
                        <Image
                            src={activeButtons.includes(index) ? btn.activeImg : btn.defaultImg}
                            width={189}
                            height={42}
                            alt='filter button'
                            
                            aria-label='filter button'
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MiniFilterBtn;