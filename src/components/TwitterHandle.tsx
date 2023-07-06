function TwitterHandle({ twitter, middle }: { twitter: string; middle: boolean }) {
  return (
    <div className={` flex items-stretch w-fit ${middle && 'mx-auto'}`}>
      <div className='text-whitefocus:ring-4 focus:outline-none font-medium rounded-l-md text-sm p-2 text-center inline-flex items-center bg-blue-600 focus:ring-blue-800'>
        <svg
          className='w-4 h-4 text-white'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 20 17'>
          <path
            fillRule='evenodd'
            d='M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z'
            clipRule='evenodd'
          />
        </svg>
      </div>
      <div className='pointer-events-auto px-4 text-sm flex items-center rounded-r-lg bg-blue-900 text-blue-400 border-blue-600 hover:text-white hover:bg-blue-800'>
        <p className='block max-w-[10ch] whitespace-nowrap overflow-hidden text-ellipsis'>
          {twitter}
        </p>
      </div>
    </div>
  );
}

export default TwitterHandle;
