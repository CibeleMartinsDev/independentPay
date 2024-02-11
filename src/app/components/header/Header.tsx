import React from "react";
import Image from 'next/image';

export default function Header () {

    return(
        <header className="h-8 w-full">
            <div className="p-2 pl-4">
                <Image src="/img/ipLogo.png" alt="logo" width={70} height={70}/>   
            </div>
        </header>
    )
}