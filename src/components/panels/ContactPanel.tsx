import { mailSchema, TMail } from '@/utils/schemas/mail.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CgSpinnerTwoAlt } from 'react-icons/cg';

const ContactPanel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TMail>({ resolver: zodResolver(mailSchema) });
  const [response, setResponse] = useState<{
    status: 'success' | 'error';
    message: string;
  } | null>(null);

  const onSubmit = async (data: TMail) => {
    try {
      const res = await axios.post('/api/mail', data);
      setResponse({ status: 'success', message: res.data.message });
    } catch (err) {
      if (err instanceof AxiosError)
        setResponse({ status: 'error', message: err.response?.data.message });
      else
        setResponse({
          status: 'error',
          message: 'Something went wrong. Please try again later.',
        });
    }
  };
  return (
    <div className='container my-24 mx-auto px-6'>
      <section className='mb-32 text-gray-800'>
        <div className='flex flex-wrap'>
          <div className='mb-6 w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-6/12 lg:px-6'>
            <h2 className='text-gradient gradient-blue mb-6 text-4xl'>
              Contact us
            </h2>
            <p className='mb-6 text-gray-200'>
              My inbox is always open. Whether you have a question or just want
              to say hi, I&apos;ll try my best to get back to you!
            </p>
            <p className='mb-2 text-gray-200'>Phone: + 01 234 567 89</p>
          </div>
          <div className='mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-6/12 lg:px-6'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-6 flex w-full gap-x-4'>
                <div className='w-full'>
                  <input
                    type='text'
                    className='w-full border border-solid border-gray-300 bg-gray-900 bg-opacity-80 bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-300 transition ease-in-out focus:border-blue-600 focus:bg-opacity-90 focus:outline-none'
                    placeholder='Name'
                    {...register('name')}
                  />
                  {errors.name?.message && (
                    <p className='font-medium text-red-600'>
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className='w-full'>
                  <input
                    type='email'
                    placeholder='Email address'
                    className='w-full border border-solid border-gray-300 bg-gray-900 bg-opacity-80 bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-300 transition ease-in-out focus:border-blue-600 focus:bg-opacity-90 focus:outline-none'
                    {...register('email')}
                  />
                  {errors.email?.message && (
                    <p className='font-medium text-red-600'>
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className='mb-6'>
                <input
                  type='text'
                  className='m-0 block w-full border border-solid border-gray-300 bg-gray-900 bg-opacity-80 bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-300 transition ease-in-out focus:border-blue-600 focus:bg-opacity-90 focus:outline-none'
                  placeholder='Subject'
                  {...register('subject')}
                />
                {errors.subject?.message && (
                  <p className='font-medium text-red-600'>
                    {errors.subject.message}
                  </p>
                )}
              </div>
              <div className='mb-6'>
                <textarea
                  className='m-0 block w-full border border-solid border-gray-300 bg-gray-900 bg-opacity-80 bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-300 ease-in-out focus:border-blue-600 focus:bg-opacity-90 focus:outline-none'
                  rows={4}
                  placeholder='Message'
                  {...register('body')}
                />
                {errors.body?.message && (
                  <p className='font-medium text-red-600'>
                    {errors.body.message}
                  </p>
                )}
              </div>
              <div className='flex items-center gap-x-4'>
                <button
                  type='submit'
                  className='btn-colors relative flex items-center justify-center gap-x-2 border px-6 py-2.5 font-medium uppercase leading-tight backdrop-blur-xs'
                >
                  {isSubmitting ? (
                    <CgSpinnerTwoAlt className='h-4 w-4 animate-spin' />
                  ) : null}
                  Send
                </button>
                {response && (
                  <p
                    className={`font-medium ${
                      response.status === 'success'
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}
                  >
                    {response.message}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ContactPanel;
