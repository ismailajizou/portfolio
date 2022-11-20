import type { FC } from 'react';
import type { IconType } from 'react-icons';

interface Props {
  icon: IconType;
  name: string;
  className?: string;
  iconClassName?: string;
}

const Technology: FC<Props> = ({ icon, name, className, iconClassName }) => {
  const Icon = icon;
  return (
    <div className={`text-center hover:text-blue-400 ${className}`}>
      <Icon className={`mb-2 h-28 w-28 ${iconClassName}`} />
      <p>{name}</p>
    </div>
  );
};
export default Technology;
