import React from 'react';

const Welcome = () => {
  const handelRedirect = () => {
    window.location.href = '/comment';
  };
  if (localStorage.getItem('passcode') !== '!amar_nam_anamika_das!') {
    window.location.href = '/';
    return;
  } else {
    return (
      <div className='w-full flex flex-col gap-4  h-screen justify-center items-center'>
        <div className='font-[Gugi] text-2xl'>
          Welcome Bubu 🫠 <span className='text-red-600 text-[28px]'>❤</span>
        </div>
        <div>
          <button
            onClick={handelRedirect}
            className='bg-[#343434] text-[white] px-4 py-2 rounded-lg font-[Gentium Book Plus] text-[18px]'
          >
            Get Comment
          </button>
        </div>
      </div>
    );
  }
};

export default Welcome;
