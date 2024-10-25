import Image from "next/image";
import Button from "./Button";
import hero from "@/public/images/hero.png"

/* eslint-disable react/no-unescaped-entities */
export default function Hero() {
  return (
    <div className="flex justify-between items-center gap-x-32 py-20">

      <div className="space-y-4"> 

        <p 
          className="text-[70px] leading-[88px] font-semibold"
        >
          Remove the <span className="font-extrabold bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">background</span> from images for free.

        </p>

        <p className="text-[18px] text-[#515151]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>

        <Button />

      </div>

      <Image 
        src={hero} 
        alt="image"
        quality={100} 
      />

    </div>
  )
}
