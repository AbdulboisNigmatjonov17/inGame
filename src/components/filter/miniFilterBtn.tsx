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
        <div className='w-full h-[112px] flex gap-y-7 flex-wrap justify-center gap-x-9 mt-2.5'>
            <div className='flex gap-x-9'>
                {buttons.slice(0, 4).map((btn, index) => (
                    <button
                        key={btn.id}
                        onClick={() => toggleButton(index)}
                        className='p-0 border-none bg-transparent cursor-pointer'
                    >
                        <Image
                            src={activeButtons.includes(index) ? btn.activeImg : btn.defaultImg}
                            width={190}
                            height={42}
                            alt='filter button'
                            aria-label='filter button'
                        />
                    </button>
                ))}
            </div>
            {buttons.slice(4).map((btn, index) => (
                <button
                    key={btn.id}
                    onClick={() => toggleButton(index + 4)}
                    className='p-0 border-none bg-transparent cursor-pointer'
                >
                    <Image
                        src={activeButtons.includes(index + 4) ? btn.activeImg : btn.defaultImg}
                        width={190}
                        height={42}
                        alt='filter button'
                        aria-label='filter button'
                    />
                </button>
            ))}
        </div>
    );
};

export default MiniFilterBtn;