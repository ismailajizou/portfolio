import Link from 'next/link';
import type { FC, PropsWithChildren } from 'react';
import type { IconType } from 'react-icons';

interface Props extends PropsWithChildren {
  icon: IconType;
  href: string;
}

const IconButtonWithText: FC<Props> = ({ icon, href, children }) => {
  const Icon = icon;
  return (
    <Link
      href={href}
      style={{ transition: '.2s' }}
      className='btn-colors group relative m-1 inline-flex h-8 cursor-pointer items-center justify-start overflow-hidden
        rounded-full border bg-neutral-900 bg-opacity-70 p-4 text-sm font-medium
        focus:outline-none'
    >
      <Icon />
      <span
        style={{ transition: '.5s' }}
        className='max-w-0 opacity-0 group-hover:ml-2 group-hover:max-w-[6rem] group-hover:opacity-100'
      >
        {children}
      </span>
    </Link>
  );
};
export default IconButtonWithText;
