import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import toast from 'react-hot-toast';
const Verify = () => {
  const [input, setInput] = useState('');
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handelRedirect = () => {
    if (input === '!amar_nam_anamika_das!') {
      localStorage.setItem('passcode', input);
      window.location.href = '/welcome';
    } else {
      toast.error('Invalid Passcode');
    }
  };
  console.log('Verify');
  return (
    <div className='w-full flex justify-center items-center flex-col h-screen gap-4'>
      <div className='font-[Gugi]  text-[24px]'>Enter the passcode</div>
      <div className='w-[70%]'>
        {' '}
        <Input
          value={input}
          onChange={handleInput}
          placeholder='Enter the  passcode here'
        />
      </div>
      <div>
        <button
          onClick={handelRedirect}
          className='bg-[#343434] text-[white] px-4 py-2 rounded-lg font-[Gentium Book Plus] text-[18px]'
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default Verify;
