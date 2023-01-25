import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import NextButton from '../../components/NextButton';

const ActionGoalIncome = () => {
  return (
    <div>
      <Head>
        <title>ZEE BY RHB</title>
        <meta name='description' content='Card Expenses' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='min-h-screen bg-cyan-400 px-12 py-10 h-screen'>
        <Link legacyBehavior href='/onboarding'>
          <a className='text-3xl text-purple-700 pt-10'>
            <AiOutlineArrowLeft />
          </a>
        </Link>
        
        <div className='flex flex-col justify-between h-full'>
        <div className='my-6'>
          <h2 className='text-purple-700 text-2xl max-w-xl mx-auto font-bold'>
            Let us set you up!
          </h2>
          <p className='text-purple-700 text-md max-w-xl mx-auto mt-3'>
            A budget starts with what you have
          </p>

          <div className='mt-20'>
          <h1 className='text-pink-500 text-4xl py-5 md:text-2xl max-w-xl mx-auto font-bold'>
            What is your monthly income?
          </h1>
          <div className='text-white font-extrabold bg-purple-800 rounded-lg text-xl px-5 py-4 text-center my-8'>
            <div>
              <div className='relative mt-1 rounded-md shadow-sm'>
                <div className='absolute flex items-center pl-3 bg-purple-800'>
                  <p className='text-white text-xl font-bold'>RM</p>
                </div>
                <input
                  type='text'
                  name='price'
                  id='price'
                  className='block w-full rounded-md pl-12 pr-12 text-xl text-white bg-purple-800'
                  placeholder='0.00'
                />
              </div>
            </div>
          </div>
        </div>
        </div>

        <Link href='/onboarding/ActionGoalMetric'>
          <NextButton text='Next Step' />
        </Link>
        </div>
      </main>
    </div>
  );
};

export default ActionGoalIncome;
