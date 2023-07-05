import Layout from '@/components/Layout';
import { useSession } from 'next-auth/react';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Head from 'next/head';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]';
import FormContact from '@/components/FormContact';
import Toast from '@/components/Toast';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export interface IFormInput {
  firstName: string;
  lastName: string;
  occupation: string;
  twitter: string;
  bio: string;
  imgUrl: string;
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    };
  }

  return {
    props: {},
  };
};

function NewContact() {
  const router = useRouter();
  const session = useSession();
  const [showError, setShowError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (formData) => {
    setShowError(false);
    try {
      await axios.post(
        '/api/contacts',
        {
          ...formData,
          userId: session.data?.user.id,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      router.push('/');
    } catch (error: any) {
      console.log(error);
      setShowError(true);
    }
  };

  return (
    <>
      <Head>
        <title>Create Contact | Qontax</title>
      </Head>
      <Layout>
        <section className={`${inter.className} py-8`}>
          <div className='relative max-w-screen-xl mx-auto px-8 py-6 '>
            <div className='max-w-lg mx-auto space-y-10'>
              <div className='w-fit text-gray-400 flex gap-3 items-center'>
                <div className='w-8 h-8 md:w-10 md:h-10 p-2 md:p-2.5 rounded-lg border border-gray-300/10 bg-gray-800'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>
                    <path
                      fillRule='evenodd'
                      d='M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zm-6.75-10.5a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V10.5z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <h1 className={`${jakarta.className} text-2xl sm:text-4xl font-bold`}>
                  Create Contact
                </h1>
              </div>

              {showError && <Toast>Failed to create the contact. Please try again.</Toast>}

              <FormContact
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                errors={errors}
                isSubmitting={isSubmitting}
                register={register}
                type='create'
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default NewContact;
