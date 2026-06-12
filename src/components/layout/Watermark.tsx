"use client"

import { useIsLargeScreen } from '@/hooks/isLargeScreen';
import Image from "next/image";

export const Watermark = () => {
    const isLarge = useIsLargeScreen(1024);
    return (
        <div className='fixed top-0 left-0 flex justify-center items-center -z-1 w-full h-full opacity-15'>
            {isLarge ?
                <Image src="/icons/watermark-full.svg" alt="Watermark" width={640} height={320} className='w-[50%] h-auto' aria-hidden="true" priority /> :
                <Image src="/icons/watermark.svg" alt="Watermark" width={320} height={320} className='w-[50%] h-auto' aria-hidden="true" priority />
            }
        </div>
    )
}
