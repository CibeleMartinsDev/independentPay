'use client'
import React from "react";
import Image from 'next/image';
import { useRouter } from "next/navigation";
export default function Header () {
    const router = useRouter();
    return(
        <header className="h-8 w-full flex justify-between">
            <div onClick={()=> router.push('/')} className="p-2 pl-4 cursor-pointer">
                <Image src="/img/ipLogo.png" alt="logo" width={70} height={70}/>   
            </div>
        </header>
    )
}