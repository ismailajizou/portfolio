import Link, { type LinkProps } from 'next/link';
import type { AnchorHTMLAttributes, FC, ReactNode } from 'react';
import type { IconType } from 'react-icons';

type NextLinkProps = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

interface Props extends NextLinkProps {
  icon: IconType;
  children: ReactNode;
}

const IconButtonWithText: FC<Props> = ({
  icon,
  href,
  children,
  locale,
  ...props
}) => {
  const Icon = icon;
  return (
    <Link
      href={href}
      locale={locale}
      style={{ transition: '.2s' }}
      className='btn-colors group relative m-1 inline-flex h-8 cursor-pointer items-center justify-start overflow-hidden
        rounded-full border bg-neutral-900 bg-opacity-70 p-4 text-sm font-medium
        focus:outline-none'
      {...props}
    >
      <Icon />
      <p
        style={{ transition: '.5s' }}
        className='max-w-0 opacity-0 group-hover:ml-2 group-hover:max-w-[6rem] group-hover:opacity-100'
      >
        {children}
      </p>
    </Link>
  );
};
export default IconButtonWithText;
