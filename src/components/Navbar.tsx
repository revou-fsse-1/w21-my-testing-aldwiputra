import { useSession } from 'next-auth/react';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import AuthButton from './AuthButton';
import SearchBar from './SearchBar';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });

function Navbar() {
  const session = useSession();
  const router = useRouter();

  return (
    <nav className={`${inter.className} border-gray-200 bg-gray-950 border-b border-b-gray-800/75`}>
      <div className='relative max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-8 py-6 '>
        <div className='flex items-center gap-4'>
          <Link href='/' className='flex items-stretch'>
            <svg
              className='w-[50px] fill-blue-700'
              viewBox='0 0 249 211'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M195.721 141.263C204.56 119.53 205.215 93.7558 198.261 71.3488C191.306 48.9417 176.797 29.6392 157.206 16.7303C137.615 3.82145 114.154 -1.8952 90.8211 0.554449C67.4878 3.0041 45.7257 13.4685 29.2428 30.1646C12.76 46.8607 2.57619 68.7555 0.426663 92.1184C-1.72286 115.481 4.29487 138.867 17.4545 158.29C30.6142 177.714 50.1015 191.973 72.5961 198.639C95.0908 205.305 119.201 203.965 140.818 194.848L125.014 157.375C112.066 162.836 97.6248 163.638 84.1515 159.646C70.6783 155.653 59.0062 147.112 51.1242 135.478C43.2421 123.845 39.6378 109.838 40.9253 95.8445C42.2127 81.8512 48.3124 68.7372 58.1849 58.737C68.0574 48.7367 81.0919 42.469 95.0675 41.0018C109.043 39.5346 123.095 42.9586 134.829 50.6904C146.563 58.4223 155.254 69.9836 159.419 83.4044C163.585 96.8253 159.114 123.606 153.82 136.623C153.82 136.623 161.217 135.264 174.02 136.077C182.619 136.623 195.721 141.263 195.721 141.263Z' />
              <path d='M249 200.092C236.674 179.356 217.359 163.693 194.523 155.916C171.688 148.139 146.828 148.756 124.408 157.658L139.415 195.457C152.844 190.126 166.923 187.107 177.432 189.034C187.942 190.96 194.493 193.811 199.27 210.598L249 200.092Z' />
            </svg>
          </Link>
          <div className='border-r h-12 border-r-gray-800/75'></div>
          {router.pathname === '/' && <SearchBar />}
        </div>
        {router.pathname !== '/login' && (
          <>
            <AuthButton status={session.status} />
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
