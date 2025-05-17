"use client"
import { useState } from 'react';

const ToggleSwitch = ({ text }: { text: string }) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <label className="relative min-w-[175px] inline-flex items-center cursor-pointer mt-6">
            <input
                type="checkbox"
                className="sr-only peer"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
            />
            <div className="w-[66px] h-[30px] bg-[#606060] rounded-full peer peer-checked:bg-[#D3176D] peer-checked:after:translate-x-[36px] after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:rounded-full after:h-[22px] after:w-[22px] after:transition-all"></div>
            <span className="ml-3 text-[22px] font-medium">
                {text}
            </span>
        </label>
    );
};

export default ToggleSwitch;