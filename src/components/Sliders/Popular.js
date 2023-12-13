import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopular } from "../../features/popular/popularBottom";

const ProductCard = () => {

  const dispatch = useDispatch();
  const { popular, isLoading } = useSelector((state) => state.popular);

  useEffect(() => {
    dispatch(getPopular());
    console.log(popular,'sdsds')
  }, [popular.status, dispatch]);

  return (
    <div className="container mx-auto w-4/5 mt-6  ">
      <p className="text-3xl text-[#253D4E] font-[Quicksand] font-bold">
      ds Products
      </p>
      <div className="flex flex-wrap gap-4 mt-6">
      {popular && popular?.data?.map((data) => (
          <div
            key={data.id}
            className="w-[230px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  "
          >
            <a href="#">
              <img
                className="p-8 rounded-t-lg"
                src={data?.img}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-[1rem] font-semibold tracking-tight text-gray-500 dark:text-white ">
                  {data?.category_name}
                </h5>
              </a>
              <div className="flex flex-wrap items-center mt-2.5 mb-5">
                <p className="text-[#253D4E] font-bold">{data?.description}</p>
                <span className="mt-2.5 text-gray-500">{data?.weight}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  ${data?.Price}
                </span>
                <button
                  href="#"
                  className="flex bg-[#5f1d1d57] text-[#5f1e1c]  font-bold rounded-lg text-sm px-[1.2rem] py-2.5 text-center"
                >
                  Add
                  <svg
                    className="self-center ml-[0.5rem] text-[#5f1e1c]"
                    fill="#5f1e1c"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="14"
                    viewBox="0 0 448 512"
                  >
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                  </svg>
                </button>
                {/* <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  max="5"
                ></input> */}
              </div>
            </div>
          </div>
        ))}
    </div>
    </div>
  );
};

export default ProductCard;
