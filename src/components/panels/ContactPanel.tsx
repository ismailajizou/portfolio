'use client';
import { type TDictionary } from '@/dictionaries';
import { env } from '@/env/client.mjs';
import { init } from '@/utils/init_i18n';
import { mailSchema, type TMail } from '@/utils/schemas/mail.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError } from 'axios';
import { type Locale } from 'i18n-config';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { CgSpinnerTwoAlt } from 'react-icons/cg';

const ContactPanel = ({
  dictionary,
  locale,
}: {
  dictionary: TDictionary;
  locale: Locale;
}) => {
  useEffect(() => {
   init(locale);
  }, [locale]);
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
      const res = await axios.post(`/${locale}/mail`, data);
      setResponse({ status: 'success', message: res.data.message });
    } catch (err) {
      if (err instanceof AxiosError)
        setResponse({ status: 'error', message: err.response?.data.message });
    }
  };

  return (
    <div className='container mx-auto my-24 px-6'>
      <section className='mb-32 text-gray-800'>
        <div className='flex flex-wrap'>
          <div className='mb-6 w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-6/12 lg:px-6'>
            <h2 className='text-gradient gradient-blue mb-6 text-4xl font-bold'>
              {dictionary['contact'].title}
            </h2>
            <p className='mb-6 text-gray-200'>
              {dictionary['contact'].description}
            </p>
            <p className='mb-6 text-gray-200'>
              {dictionary['contact'].social.description}
            </p>
            <p className='mb-2 text-gray-200'>
              {dictionary['contact'].social.phone}:{' '}
              {env.NEXT_PUBLIC_PHONE_NUMBER}
            </p>
          </div>
          <div className='mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-6/12 lg:px-6'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-6 flex w-full gap-x-4'>
                <div className='w-full'>
                  <input
                    type='text'
                    className='w-full border border-solid border-gray-300 bg-gray-900 bg-opacity-80 bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-300 transition ease-in-out focus:border-blue-600 focus:bg-opacity-90 focus:outline-none'
                    placeholder={dictionary['contact'].form.name ?? 'Name'}
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
                    placeholder={dictionary['contact'].form.email}
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
                  placeholder={dictionary['contact'].form.subject}
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
                  placeholder={dictionary['contact'].form.message}
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
                  {dictionary['contact'].form.submit}
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
