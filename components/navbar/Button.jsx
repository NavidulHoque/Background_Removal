"use client"

import RightArrow from "@/icons/RightArrow"

export default function Button() {
    return (
        <button 
            className="flex justify-center items-center gap-x-2 bg-[#313131] text-white text-[18px] w-[209px] h-[57px] rounded-full hover:scale-[1.05] transition-all duration-300"
            onClick={() => console.log("dsfjhb")}
        >
            Get started <RightArrow />
        </button>
    )
}
