import React, { useEffect, useState } from 'react';

const CommentPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [array, setArray] = useState([]);
  const [showText, setShowText] = useState(false);
  if (localStorage.getItem('passcode') !== '!amar_nam_anamika_das!') {
    window.location.href = '/';
    return;
  }
  useEffect(() => {
    if (array.length <= 50) {
      setTimeout(() => {
        setArray((prev) => {
          return [...prev, 'Bachha'];
        });
      }, 1000);
    }
    return () => {
      clearTimeout();
    };
  }, [array]);
  useEffect(() => {
    console.log(array.length);
    if (array.length >= 50) {
      setShowText(true);
    }
  }, [array]);
  return showText === false ? (
    <div className='flex flex-wrap w-full gap-2 justify-center items-center'>
      {Array.from(array).map((ele, index) => {
        return (
          <div
            key={index}
            className='text-[#fff] flex flex-col   font-[Gugi] text-3xl'
          >
            {ele}
          </div>
        );
      })}
    </div>
  ) : (
    <div className='w-full flex justify-center items-center h-screen'>
      <div className='font-[Gugi] text-2xl'>
        I Love U Baby 🫠 <span className='text-red-600 text-[28px]'>❤</span>
      </div>
    </div>
  );
};

export default CommentPage;
