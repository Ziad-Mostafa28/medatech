import React from 'react'
import SearchAll from '../../SearchAll/SearchAll'

const  Header = () => {
  return (
    <>
        <div className='container mx-auto w-4/5 mt-6  '>
          <div className='flex justify-between	'>
                    <a className={`img-block `} href='/'>
                        <span >
                            <img className='w-100' src='/imgs/meda-tech-logo-final 1.png' />
                        </span>
                    </a>
                    <div className='place-self-center py-4 px-4 border-1  border-solid	w-1/2	 rounded-xl	border-[#5F1E1C]'>
                      <SearchAll />
                    </div>
                    <div className='flex place-self-center px-4 gap-x-4	'>
                      <div className='flex'>
                      <svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 24.3667H16V19.3237C15.9992 18.5397 15.6874 17.788 15.133 17.2337C14.5787 16.6793 13.827 16.3675 13.043 16.3667H4.957C4.173 16.3675 3.42134 16.6793 2.86696 17.2337C2.31259 17.788 2.00079 18.5397 2 19.3237V24.3667H0V19.3237C0.00158783 18.0095 0.524351 16.7496 1.45363 15.8203C2.3829 14.8911 3.64281 14.3683 4.957 14.3667H13.043C14.3572 14.3683 15.6171 14.8911 16.5464 15.8203C17.4756 16.7496 17.9984 18.0095 18 19.3237V24.3667Z" fill="#253D4E"/>
                      <path d="M9 12.3667C7.81331 12.3667 6.65328 12.0148 5.66658 11.3555C4.67989 10.6962 3.91085 9.75916 3.45673 8.6628C3.0026 7.56645 2.88378 6.36005 3.11529 5.19616C3.3468 4.03227 3.91825 2.96318 4.75736 2.12406C5.59648 1.28495 6.66558 0.713502 7.82946 0.48199C8.99335 0.250479 10.1997 0.369299 11.2961 0.823425C12.3925 1.27755 13.3295 2.04659 13.9888 3.03328C14.6481 4.01998 15 5.18001 15 6.3667C14.9984 7.95751 14.3658 9.48271 13.2409 10.6076C12.116 11.7325 10.5908 12.3651 9 12.3667ZM9 2.3667C8.20888 2.3667 7.43552 2.6013 6.77772 3.04082C6.11993 3.48035 5.60723 4.10506 5.30448 4.83597C5.00173 5.56687 4.92252 6.37114 5.07686 7.14706C5.2312 7.92299 5.61217 8.63572 6.17158 9.19513C6.73099 9.75454 7.44372 10.1355 8.21964 10.2898C8.99557 10.4442 9.79983 10.365 10.5307 10.0622C11.2616 9.75947 11.8864 9.24678 12.3259 8.58898C12.7654 7.93119 13 7.15783 13 6.3667C13 5.30584 12.5786 4.28842 11.8284 3.53827C11.0783 2.78813 10.0609 2.3667 9 2.3667Z" fill="#253D4E"/>
                      </svg>
                      <p className='flex text-xs items-center m-1.5'>Account</p>
                      </div>
                      <div className='flex'>
                      <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.8313 0.283447C16.7052 0.300962 15.6037 0.615301 14.638 1.19472C13.6723 1.77414 12.8766 2.59812 12.3313 3.58345C11.7859 2.59812 10.9902 1.77414 10.0245 1.19472C9.0588 0.615301 7.95731 0.300962 6.83126 0.283447C5.0362 0.361438 3.34496 1.1467 2.12704 2.46768C0.909117 3.78866 0.263507 5.53797 0.331257 7.33345C0.331257 14.1084 11.2873 21.9334 11.7533 22.2654L12.3313 22.6744L12.9093 22.2654C13.3753 21.9354 24.3313 14.1084 24.3313 7.33345C24.399 5.53797 23.7534 3.78866 22.5355 2.46768C21.3176 1.1467 19.6263 0.361438 17.8313 0.283447ZM12.3313 20.2124C9.07826 17.7824 2.33126 11.8124 2.33126 7.33345C2.2629 6.06816 2.69762 4.82718 3.54062 3.88115C4.38362 2.93512 5.56649 2.3608 6.83126 2.28345C8.09602 2.3608 9.2789 2.93512 10.1219 3.88115C10.9649 4.82718 11.3996 6.06816 11.3313 7.33345H13.3313C13.2629 6.06816 13.6976 4.82718 14.5406 3.88115C15.3836 2.93512 16.5665 2.3608 17.8313 2.28345C19.096 2.3608 20.2789 2.93512 21.1219 3.88115C21.9649 4.82718 22.3996 6.06816 22.3313 7.33345C22.3313 11.8144 15.5843 17.7824 12.3313 20.2124Z" fill="#253D4E"/>
                      </svg>

                      <p className='flex text-xs items-center m-1.5'>Wishlist</p>
                      </div>
                      <div className='flex'>
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24.0493 3.3667H4.29132L4.24932 3.0157C4.16336 2.28612 3.8127 1.61343 3.26381 1.12518C2.71491 0.636923 2.00594 0.367041 1.27132 0.366699L0.0493164 0.366699V2.3667H1.27132C1.51625 2.36673 1.75265 2.45666 1.93569 2.61941C2.11872 2.78217 2.23566 3.00645 2.26432 3.2497L3.84932 16.7177C3.93527 17.4473 4.28593 18.12 4.83483 18.6082C5.38372 19.0965 6.09269 19.3664 6.82732 19.3667H20.0493V17.3667H6.82732C6.58223 17.3666 6.3457 17.2766 6.16264 17.1136C5.97958 16.9506 5.86275 16.7261 5.83432 16.4827L5.70332 15.3667H21.8853L24.0493 3.3667ZM20.2133 13.3667H5.46832L4.52732 5.3667H21.6563L20.2133 13.3667Z" fill="#253D4E"/>
                      <path d="M7.04932 24.3667C8.15389 24.3667 9.04932 23.4713 9.04932 22.3667C9.04932 21.2621 8.15389 20.3667 7.04932 20.3667C5.94475 20.3667 5.04932 21.2621 5.04932 22.3667C5.04932 23.4713 5.94475 24.3667 7.04932 24.3667Z" fill="#253D4E"/>
                      <path d="M17.0493 24.3667C18.1539 24.3667 19.0493 23.4713 19.0493 22.3667C19.0493 21.2621 18.1539 20.3667 17.0493 20.3667C15.9447 20.3667 15.0493 21.2621 15.0493 22.3667C15.0493 23.4713 15.9447 24.3667 17.0493 24.3667Z" fill="#253D4E"/>
                      </svg>

                      <p className='flex text-xs items-center m-1.5'>Cart</p>
                      </div>
                    </div>
                  
          </div>
          <div>
            

          <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Shop</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact Us</a>
                  </li>
                  
                </ul>
            </div>
              <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                  <img src="/imgs/Vector.svg" className="h-8" alt="Flowbite Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">1900 - 8888</span>
              </a>
              <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                  </svg>
              </button>
              
            </div>
          </nav>

          </div>
        </div>
    </>  
  )
}

export default Header
