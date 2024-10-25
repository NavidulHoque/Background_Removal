"use client"

import Upload from "@/icons/Upload"

export default function Button() {
    return (
        <button
            className="bg-gradient-to-r from-[#7648FF] to-[#D34AF8] text-white text-[20px] flex items-center justify-center gap-x-2 w-[266px] h-[67px] rounded-full hover:scale-[1.05] transition-all duration-300"
        >
            <Upload />Upload your image
        </button>
    )
}
