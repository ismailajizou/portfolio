import Link from 'next/link';
import type { AnchorHTMLAttributes, FC, ReactNode } from 'react';
import type { IconType } from 'react-icons';

interface Props
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'area-label'> {
  children?: ReactNode;
  href: string;
  icon: IconType;
  label: string;
  alt: string;
}

const IconButton: FC<Props> = ({ href, icon, label, alt, ...props }) => {
  const Icon = icon;
  return (
    <Link
      href={href}
      aria-label={alt}
      className='btn-colors m-1 flex h-8 w-8 cursor-pointer items-center justify-center
        rounded-full border bg-neutral-900 bg-opacity-70 font-medium
        focus:outline-none'
      {...props}
    >
      <Icon />
      <span className='sr-only'>{label}</span>
    </Link>
  );
};
export default IconButton;
