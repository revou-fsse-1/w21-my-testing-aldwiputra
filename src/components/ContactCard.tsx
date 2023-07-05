import { Contact } from '@/pages';
import Image from 'next/image';
import Link from 'next/link';
import TwitterHandle from './TwitterHandle';

type ContactProps = {
  data: Contact;
};

function ContactCard({ data }: ContactProps) {
  return (
    <li>
      <Link
        href={`/contacts/${data.id}`}
        className='block w-full text-center rounded-lg px-8 py-6 border border-gray-700 shadow bg-gray-800 hover:bg-gray-750 shadow-custom hover:border-gray-500'>
        <div className='space-y-4'>
          <div className='mx-auto relative aspect-square max-w-[4rem] bg-gray-600/10 rounded-full'>
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className='relative z-10 rounded-full w-full object-cover object-center h-full text-transparent'
                src={data.imgUrl}
                alt={`Photo of ${data.firstName}`}
                onError={(e) => (e.currentTarget.src = '/avatar.svg')}
              />
            }
          </div>
          <div className='flex flex-col gap-1'>
            <h4
              title={`${data.firstName} ${data.lastName}`}
              className='leading-tight whitespace-nowrap text-lg font-medium max-w-[80%] overflow-hidden mx-auto text-center overflow-ellipsis'>{`${data.firstName} ${data.lastName}`}</h4>
            <span className='text-sm text-slate-500  whitespace-nowrap max-w-[80%] overflow-hidden mx-auto text-center overflow-ellipsis'>
              {data.occupation}
            </span>
          </div>
          <TwitterHandle twitter={data.twitter} middle={true} />
        </div>
      </Link>
    </li>
  );
}

export default ContactCard;
