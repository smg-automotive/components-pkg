import React, { FC } from 'react';

import FooterLink from './Link';
import { FooterConfigInstance } from './config/factory';
import Stack from '../stack';
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from '../icons';
import Center from '../center';

interface SocialMediaProps {
  config: FooterConfigInstance;
}

const SocialMedia: FC<SocialMediaProps> = ({ config }) => {
  return (
    <Center>
      <Stack marginY="24px" spacing="24px" direction="row">
        <FooterLink linkInstance={config.socialMedia.facebook[0]}>
          <FacebookIcon />
        </FooterLink>
        <FooterLink linkInstance={config.socialMedia.instagram[0]}>
          <InstagramIcon />
        </FooterLink>
        <FooterLink linkInstance={config.socialMedia.twitter[0]}>
          <TwitterIcon />
        </FooterLink>
        <FooterLink linkInstance={config.socialMedia.youtube[0]}>
          <YoutubeIcon />
        </FooterLink>
      </Stack>
    </Center>
  );
};

export default SocialMedia;
