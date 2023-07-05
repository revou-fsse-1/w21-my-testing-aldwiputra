import { IFormInput } from '@/pages/contacts/new';
import { FieldErrors, SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

type FormContactProps = {
  handleSubmit: UseFormHandleSubmit<IFormInput, undefined>;
  onSubmit: SubmitHandler<IFormInput>;
  errors: FieldErrors<IFormInput>;
  register: UseFormRegister<IFormInput>;
  isSubmitting: boolean;
  type: 'create' | 'edit';
};

function FormContact({
  handleSubmit,
  onSubmit,
  errors,
  register,
  isSubmitting,
  type,
}: FormContactProps) {
  return (
    <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
      <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
        <div className='w-full'>
          <div className='flex items-center justify-between mb-2'>
            <label htmlFor='firstName' className='block  text-sm font-medium text-gray-300'>
              Firstname
            </label>
            {errors.firstName?.type === 'required' && (
              <span className='text-red-500 text-xs'>*Field required</span>
            )}
          </div>
          <input
            type='text'
            id='firstName'
            className='border  text-sm rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 bg-gray-800/50 border-gray-700/50 placeholder-gray-500 text-white '
            placeholder='John'
            {...register('firstName', { required: true })}
          />
        </div>
        <div className='w-full'>
          <div className='flex items-center justify-between mb-2'>
            <label htmlFor='lastName' className='block  text-sm font-medium  text-gray-300'>
              Lastname
            </label>
            {errors.lastName?.type === 'required' && (
              <span className='text-red-500 text-xs'>*Field required</span>
            )}
          </div>
          <input
            type='text'
            id='lastName'
            className=' border text-sm rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 bg-gray-800/50 border-gray-700/50 placeholder-gray-500 text-white '
            placeholder='Doe'
            {...register('lastName', { required: true })}
          />
        </div>

        <div className='sm:col-span-2'>
          <div className='flex items-center justify-between mb-2'>
            <label htmlFor='imgUrl' className='block  text-sm font-medium  text-gray-300'>
              Image URL
            </label>
            {errors.imgUrl && <span className='text-red-500 text-xs'>*Enter valid URL</span>}
          </div>
          <input
            type='text'
            id='imgUrl'
            className=' border  text-sm rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 bg-gray-800/50 border-gray-700/50 placeholder-gray-500 text-white '
            placeholder='https://images.unsplash.com/profile'
            {...register('imgUrl', {
              required: true,
              pattern: {
                value:
                  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
                message: 'Enter valid URL',
              },
            })}
          />
        </div>

        <div className='full'>
          <div className='flex items-center justify-between mb-2'>
            <label htmlFor='occupation' className='block text-sm font-medium  text-gray-300'>
              Occupation
            </label>
            {errors.occupation?.type === 'required' && (
              <span className='text-red-500 text-xs'>*Field required</span>
            )}
          </div>
          <input
            type='text'
            id='occupation'
            className=' border  text-sm rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 bg-gray-800/50 border-gray-700/50 placeholder-gray-500 text-white '
            placeholder='Web Developer'
            {...register('occupation', { required: true })}
          />
        </div>

        <div className='full'>
          <div className='flex items-center justify-between mb-2'>
            <label htmlFor='twitter' className='block  text-sm font-medium  text-gray-300'>
              Twitter
            </label>
            {errors.twitter?.type === 'required' && (
              <span className='text-red-500 text-xs'>*Field required</span>
            )}
          </div>
          <input
            type='text'
            id='twitter'
            className=' border  text-sm rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 bg-gray-800/50 border-gray-700/50 placeholder-gray-500 text-white '
            placeholder='johndoe'
            {...register('twitter', { required: true })}
          />
        </div>

        <div className='sm:col-span-2'>
          <div className='flex items-center justify-between mb-2'>
            <label htmlFor='bio' className='block text-sm font-medium  text-gray-300'>
              Bio
            </label>
            {errors.bio?.type === 'required' && (
              <span className='text-red-500 text-xs'>*Field required</span>
            )}
          </div>
          <textarea
            id='bio'
            rows={4}
            className='block p-2.5 w-full text-sm resize-none rounded-lg border sm:ring-blue-500 focus:outline-none focus:ring-2  focus:border-blue-500 bg-gray-800/50 border-gray-700/50 placeholder-gray-500 text-white focus:ring-blue-500 '
            {...register('bio', { required: true })}
            placeholder='Your bio here'></textarea>
        </div>
      </div>
      <button
        type='submit'
        disabled={isSubmitting}
        className='inline-flex items-center justify-center px-5 min-w-[10rem] py-2.5 mt-4 sm:mt-6 text font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-600  hover:bg-blue-800'>
        {isSubmitting ? (
          <svg
            aria-hidden='true'
            role='status'
            className='inline w-6 h-6 animate-spin text-gray-600'
            viewBox='0 0 100 101'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
              className='fill-slate-400'
            />
            <path
              d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
              className='fill-slate-200'
            />
          </svg>
        ) : type === 'create' ? (
          'Submit'
        ) : (
          'Save'
        )}
      </button>
    </form>
  );
}

export default FormContact;
