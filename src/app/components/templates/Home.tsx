'use client'
import React from "react";
import Image from "next/image";
import Button from "../atoms/button/Button";
import { useRouter } from "next/navigation";

export default function HomeTemplate() {

  const router = useRouter();
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center">
      <Image
        className="pb-12"
        src="/img/ipSlogan.svg"
        alt="slogan"
        width={1200}
        height={100}
      />
      <div className="w-2/4 h-[100px] gap-4 flex flex-col fixed right-[60px] top-[800px]">
        <Button title={"Seja parceiro"} onClick={()=> router.push('/onboarding')} />
        <Button title={"Pague"} onClick={undefined} />
      </div>
    </div>
  );
}