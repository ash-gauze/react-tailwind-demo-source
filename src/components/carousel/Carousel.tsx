'use client'
import '../../app/globals.css'
import React, { useState } from 'react';



const Carousel = () => {

  const imageArray:Array<number> = [1,2,3,4,5];
  const width:number = -300;
  const baseOffset:number = 300;
  const initIndex:number = Math.abs(0);
  const [offset, setOffset] = useState(width);
  const [index,setIndex] = useState(initIndex);

  const handleNext = (width:number) => {
    if (index == imageArray.length -1) {
      const newIndex:number = 0;
      setIndex(0);
      setOffset(newIndex * width)
      console.log(offset)
    } else {
      let newIndex = index; newIndex++;
      setIndex(newIndex)
      setOffset(newIndex * width)
      console.log(offset)
    }
  }
  

  const handlePrev = (width:number) => {
    if (index <= 0) {
      setIndex(imageArray.length)
      return;
    } else {
      const newIndex:number = ((-1)+(index))
      setIndex(newIndex)
      console.log(newIndex)
      setOffset(newIndex * width)
    }
  }

  return (
    <>


      <div className={'flex rounded-t-lg  flex-row relative z-10 flex-nowrap justify-around p-2 w-100vw bg-[--color-one]'}>
        <div className={'flex flex-row nowrap'}>
          <button className={'article-button  min-w-[8rem]'} onClick={() => handlePrev(width)}>《</button>
        </div>
        <div><button className={'article-button min-w-[8rem]'} onClick={() => handleNext(width)}>》</button>
        </div>
      </div>

      <div className={'overflow-hidden my-8 carousel-viewport'}>
        <div className={'carousel-collection flex flex-row flex-nowrap bg-[--color-two] delay-200'}
          style={{ transform: `translateX(${offset}px)` }}>
          <div className={'mock-image bg-slate-100'}>your image here</div>
          <div className={'mock-image bg-slate-200'}>lots of options</div>
          <div className={'mock-image bg-slate-300'}>smooth transitions</div>
          <div className={'mock-image bg-slate-400'}>many options</div>
          <div className={'mock-image bg-slate-500'}>looping...</div>
        </div>
      </div>

      <div className={'flex rounded-b-lg flex-row relative z-10 flex-nowrap justify-center p-4 w-100vw bg-[--color-one]'}>
        <div className={'rounded-xl bg-[--color-four] p-2 min-w-4 mx-2'} style={{ order: `${-offset / baseOffset}` }}></div>
        <div className={'rounded-xl bg-[--color-two] p-2 min-w-4 mx-2 animation order-0'}></div>
        <div className={'rounded-xl bg-[--color-two] p-2 min-w-4 mx-2 animation order-1'}></div>
        <div className={'rounded-xl bg-[--color-two] p-2 min-w-4 mx-2 animation order-2'}></div>
        <div className={'rounded-xl bg-[--color-two] p-2 min-w-4 mx-2 animation order-3'}></div>
      </div>
    </>
  )
}

export { Carousel }
