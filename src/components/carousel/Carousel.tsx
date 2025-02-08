'use client'
import '../../app/globals.css'
import React, { useState } from 'react';

const Carousel = () => {
  const baseOffset = 300;
  const totalLength = baseOffset * 5;
  const [offset, setOffset] = useState(0);
  const [mini, setMini] = useState(0);
  //default state is the window's width, not zero! 
  const handleNextIndex = () => {
    offset === -(totalLength - baseOffset) ? setOffset(0) : setOffset(offset - baseOffset);
    setMini(mini + 1)
  }
  const handlePrevIndex = () => {
    offset === 0 ? setOffset(-(totalLength - baseOffset)) : setOffset(offset + baseOffset);
    setMini(mini - 1);

  }
  const scrollyStyle = {
    overflowY: 'scroll', msOverflowStyle: 'none', scrollbarWidth: 'none', '&WebkitScrollbar': { width: '0' }
  }

  return (
    <>
      <div style={scrollyStyle} className={'flex [&::-webkit-slider-thumb]:bg-white rounded-t-lg flex-row flex-nowrap justify-around p-4 w-100vw bg-slate-600'} >
        <div>
        <button className={'control-button rounded-s-xl w-12'} onClick={() => handlePrevIndex()}>《</button></div>
        <div><button className={'control-button rounded-e-xl w-12'} onClick={() => handleNextIndex()}>》</button></div>
      </div>

      <div className={'overflow-hidden my-8 carousel-viewport '}>
        <div className={'carousel-collection flex flex-row flex-nowrap bg-slate-200 delay-200'} 
        style={{ transform: `translateX(${offset}px)` }} >

          <div className={'mock-image bg-slate-100'}>your image here</div>
          <div className={'mock-image bg-slate-200'}>lots of options</div>
          <div className={'mock-image bg-slate-300'}>smooth transitions</div>
          <div className={'mock-image bg-slate-400'}>many options</div>
          <div className={'mock-image bg-slate-500'}>looping...</div>
        </div>
      </div>

      <div className='flex rounded-b-lg flex-row relative z-10 flex-nowrap justify-center p-4 w-100vw bg-slate-700'>
        <div className='rounded-xl bg-slate-200 p-2 min-w-4 mx-2 ' style={{ order: `${-offset / baseOffset}` }}></div>
        <div className='rounded-xl bg-slate-400 p-2 min-w-4 mx-2 animation order-0'></div>
        <div className='rounded-xl bg-slate-400 p-2 min-w-4 mx-2 animation order-1'></div>
        <div className='rounded-xl bg-slate-400 p-2 min-w-4 mx-2 animation order-2'></div>
        <div className='rounded-xl bg-slate-400 p-2 min-w-4 mx-2 animation order-3'></div>
      </div>
    </>
  )
}

export { Carousel }
