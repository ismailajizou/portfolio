import { env } from '@/env/client.mjs';
import type { IconType } from 'react-icons';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import ButtonsStack from './ButtonsStack';
import IconButton from './IconButton';

type SocialMedia = 'linkedin' | 'github' | 'facebook' | 'twitter';
type T = {
  [k in SocialMedia]: {
    icon: IconType;
    link: string;
    alt: string;
    label: string;
  };
};

const SOCIAL_LINKS: T = {
  github: {
    icon: FaGithub,
    link: env.NEXT_PUBLIC_PROFILE_GITHUB,
    alt: 'Github',
    label: 'Github profile',
  },
  facebook: {
    icon: FaFacebookF,
    link: env.NEXT_PUBLIC_PROFILE_FACEBOOK,
    alt: 'Facebook',
    label: 'Facebook profile',
  },
  linkedin: {
    icon: FaLinkedinIn,
    link: env.NEXT_PUBLIC_PROFILE_LINKEDIN,
    alt: 'LinkedIn',
    label: 'LinkedIn profile',
  },
  twitter: {
    icon: FaTwitter,
    link: env.NEXT_PUBLIC_PROFILE_TWITTER,
    alt: 'Twitter',
    label: 'Twitter profile',
  },
};

const Sidebar = () => {
  return (
    <div className='mx-auto flex h-full w-16 items-center justify-center'>
      <ButtonsStack>
        {Object.entries(SOCIAL_LINKS).map(
          ([key, { icon, link, alt, label }]) => (
            <IconButton
              key={key}
              href={link}
              icon={icon}
              alt={alt}
              label={label}
            />
          )
        )}
      </ButtonsStack>
    </div>
  );
};
export default Sidebar;
