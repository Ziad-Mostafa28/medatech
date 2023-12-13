import React, { useEffect } from "react";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../features/categories/categoriesSlice";

const Categories = () => {

  const dispatch = useDispatch();
  const { categories, isLoading } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [categories.status, dispatch]);

  return (
    <div className="container mx-auto w-4/5 mt-6">
      <p className="text-3xl text-[#253D4E] font-[Quicksand] font-bold">
        Categories
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
        {isLoading && 
        <div role="status">
            <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
        </div>
}

        {categories && categories?.data?.map((data) => (
            <SwiperSlide key={data.id} className="text-center">
              <a href="/">
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
              </a>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Categories;

// {`logo_${data?.id}.png`}
