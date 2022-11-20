import type { FC, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  direction?: 'vertical' | 'horizontal';
  className?: string;
}

const ButtonsStack: FC<Props> = ({
  direction = 'vertical',
  children,
  className,
}) => {
  return (
    <div
      className={`
        flex 
        rounded-full 
        bg-neutral-500
        bg-opacity-60 
        backdrop-blur-xs
        ${direction === 'vertical' ? 'flex-col' : 'flex-row'} 
        ${className}
    `}
    >
      {children}
    </div>
  );
};

export default ButtonsStack;
