import type { ReactNode, FC } from 'react';
import type { IconType } from 'react-icons';

interface Props {
  children?: ReactNode;
  href?: string;
  icon: IconType;
}

const IconButton: FC<Props> = ({ href, icon }) => {
  const Icon = icon;
  return (
    <a
      href={href}
      className='btn-colors m-1 flex h-8 w-8 cursor-pointer items-center justify-center
        rounded-full border bg-neutral-900 bg-opacity-70 font-medium
        focus:outline-none'
    >
      <Icon />
    </a>
  );
};
export default IconButton;
