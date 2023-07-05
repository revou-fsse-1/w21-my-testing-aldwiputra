import { useRouter } from 'next/router';
import React, { useState } from 'react';

function SearchBar() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/?search=${searchQuery}`);
  };

  return (
    <form
      data-testid='search-form'
      onSubmit={submitHandler}
      autoComplete='off'
      className='hidden sm:block'>
      <label htmlFor='default-search' className='mb-2 text-sm font-medium sr-only text-white'>
        Search
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <svg
            aria-hidden='true'
            className='w-5 h-5 text-gray-400'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
          </svg>
        </div>
        <input
          type='search'
          id='default-search'
          className='peer  w-full py-3 px-3 pl-10 text-sm lg:min-w-[20rem] border rounded-lg  outline-none bg-gray-800/50 border-gray-700/50 placeholder-gray-500 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
          placeholder='Search'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className='invisible peer-focus:visible flex items-center gap-1  text-white absolute right-2 top-1/2 -translate-y-1/2  focus:ring-4 focus:outline-none font-medium rounded-md text-xs px-4 py-1.5 bg-slate-500'>
          <svg
            className='w-5 -ml-1 fill-white translate-y-[5%]'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            id='enter'>
            <path d='M19,6a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H7.41l1.3-1.29A1,1,0,0,0,7.29,9.29l-3,3a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l3,3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L7.41,14H17a3,3,0,0,0,3-3V7A1,1,0,0,0,19,6Z'></path>
          </svg>
          Enter
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
