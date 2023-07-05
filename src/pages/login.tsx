import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import { signIn, useSession } from 'next-auth/react';
import { Inter } from 'next/font/google';
import { authOptions } from './api/auth/[...nextauth]';
import Layout from '@/components/Layout';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Toast from '@/components/Toast';

const inter = Inter({ subsets: ['latin'] });

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  console.log(session);

  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: 'http://localhost:3000',
      },
    };
  }

  return {
    props: {
      some: 'hoyeah',
    },
  };
};

function Login() {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log(session);
    console.log(router);
  });

  return (
    <>
      <Head>
        <title>Login | Qontax</title>
      </Head>
      <Layout>
        <section className={`${inter.className} py-20`}>
          <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0'>
            <div className='w-full shadow md:mt-0 sm:max-w-md xl:p-0  overflow-hidden'>
              {router.query.error === 'OAuthAccountNotLinked' && (
                <Toast>Email with that account has been linked. Try another</Toast>
              )}
              <div className='p-6 space-y-2 mt-8 md:space-y-6 sm:p-8 border border-gray-800 rounded-lg'>
                <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                  Sign in to your account
                </h1>

                <div className='h-[1px] w-full bg-gray-800/75 scale-x-150'></div>

                <div className='space-y-2'>
                  <button
                    onClick={() => signIn('google', { callbackUrl: '/' })}
                    type='button'
                    className='text-white bg-[#24292F] hover:bg-[#24292F]/90 hover:ring-2 hover:outline-none hover:ring-gray-400/30 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center w-full justify-center mr-2 mb-2'>
                    <svg
                      viewBox='0 0 21 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-4 h-4 mr-2 -ml-1'>
                      <g clipPath='url(#clip0_13183_10121)'>
                        <path
                          d='M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z'
                          fill='#3F83F8'></path>
                        <path
                          d='M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z'
                          fill='#34A853'></path>
                        <path
                          d='M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z'
                          fill='#FBBC04'></path>
                        <path
                          d='M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z'
                          fill='#EA4335'></path>
                      </g>
                      <defs>
                        <clipPath id='clip0_13183_10121'>
                          <rect
                            width='20'
                            height='20'
                            fill='white'
                            transform='translate(0.5)'></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    Sign in with Google
                  </button>
                  <button
                    onClick={() => signIn('github', { callbackUrl: '/' })}
                    type='button'
                    className='text-white bg-[#24292F] hover:bg-[#24292F]/90 hover:ring-2 hover:outline-none hover:ring-gray-400/30 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center w-full justify-center mr-2 mb-2'>
                    <svg
                      className='w-4 h-4 mr-2 -ml-1'
                      aria-hidden='true'
                      focusable='false'
                      data-prefix='fab'
                      data-icon='github'
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 496 512'>
                      <path
                        fill='currentColor'
                        d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'></path>
                    </svg>
                    Sign in with Github
                  </button>
                </div>

                <div className='h-[1px] w-full bg-gray-800/60'></div>

                <div className='px-8'>
                  <p className='text-center text-xs text-gray-400 leading-normal'>
                    By signing-in, you agree to {`Qontax's`}{' '}
                    <strong>Terms and Conditions of use</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Login;
