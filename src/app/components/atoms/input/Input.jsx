import Image from "next/image";
import { useState } from "react";

export default function Input({getValueForFatherComponent, onClick}) {

  const [value, setValue] = useState('');

  const onChange = (event)=> {
    console.log('valor do input no component input: ', event.target.value)
    setValue(event.target.value)
    getValueForFatherComponent(value)
  }

  return (
    <div className="w-full flex justify-center">
      <input
        value={value}
        onChange={(event)=> onChange(event)}
        className="border-b-2 w-[30%] border-ip-white bg-ip-green outline-none p-2"
        placeholder="E-mail"
      />
      <Image
        className="fixed top-[430px] left-[1170px] cursor-pointer"
        src="/img/nextArrow.svg"
        alt="próximo"
        width={50}
        height={100}
        onClick={onClick}
      />
    </div>
  );
}
