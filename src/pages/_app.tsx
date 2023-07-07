import Spinner from '@/components/Spinner';
import store from '@/redux/store';
import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: any) => {
      if (url === router.asPath) return;
      setIsLoading(true);
    };
    const handleComplete = (url: any) => setIsLoading(false);
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        {isLoading && (
          <div className='min-h-screen backdrop-blur-sm flex justify-center items-center bg-black/70 fixed inset-0 z-20'>
            <Spinner />
          </div>
        )}
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
}
