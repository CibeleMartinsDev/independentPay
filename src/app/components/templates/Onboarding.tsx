'use client'
import { useState } from 'react';
import Input from '../atoms/input/Input';
export default function OnboardingTemplate({getEmail}) {
    const [email, setEmail] = useState();
    const getValueInput = (value)=> setEmail(value);
    

  return (
    <div className="h-[90vh] w-full flex justify-center items-center">
     <Input getValueForFatherComponent={getValueInput} onClick={()=> getEmail(email)}/>
    </div>
  );
}
