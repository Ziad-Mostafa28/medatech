import React, { useState } from "react";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const Brands = () => {
const [Brands, setBrands] = useState([]);

fetch("http://localhost:3005/Brands")
    .then((response) => response.json())
    .then((data) => setBrands(data));

return (
    <div className="container mx-auto w-4/5 mt-6">
    <p className="text-3xl text-[#253D4E] font-[Quicksand] font-bold">
        Brands
    </p>
    <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={2}
        slidesPerView={10}
        breakpoints={{
        320: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 7,
            spaceBetween: 2,
        },
        1440: {
            slidesPerView: 10,
            spaceBetween: 2,
        },
        }}
        loop={true}
        navigation
        className="mySwiper"
    >
        {Brands &&
        Brands?.map((data) => (
            <SwiperSlide className="text-center">
            <div
                key={data?.id}
                value={data?.id}
                className={`h-[160px] text-center inline-block rounded-2xl	 bg-[${data?.color}]`}
            >
                <img
                className="w-[100px] h-[108px]"
                src={data.img}
                alt={data?.name}
                />
                <p className="mt-2 text-m text-[#253D4E] font-[Quicksand] font-bold">
                {data?.text}
                </p>
            </div>
            </SwiperSlide>
        ))}
    </Swiper>
    </div>
);
};

export default Brands;

// {`logo_${data?.id}.png`}
