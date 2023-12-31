import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBanner } from '../../features/banner/bannerTop';

const Banner = () => {

  const dispatch = useDispatch();
  const { banner, isLoading } = useSelector((state) => state.banner);

  useEffect(() => {
    dispatch(getBanner());
  }, [banner.status, dispatch]);
  return (
    <>
      <div className='container mx-auto w-4/5 mt-6 mb-12'>
        <div className="bg-my-image w-full	h-[473px] bg-cover rounded-2xl	relative">
          <div className='absolute inset-x-0 w-full	h-full z-10	flex justify-center	flex-col flex-wrap	'>
          {banner && banner?.data?.map((data) =>
              <div className='pl-20 w-3/5	' key={data?.id} value={data?.id}>
                <h2 className='text-6xl	text-[#253D4E] font-[Quicksand] font-bold	 '> {data?.title}</h2>
                <p className='text-3xl mt-8 text-[#7E7E7E]'>{data.description}</p>
                <button>
                  <a href="/" className='btn btn-primary px-8 py-2 my-4 inline-block shadow-lg hover
                  outline-none focus:outline-none sm:text-base lg:text-sm xl:text-xs xxl
                  2xl:text-xxs text-white tracking-wider  bg-[#5F1E1C] rounded-2xl	mt-16'>More</a>
                </button>
                </div>
                )} 
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner

