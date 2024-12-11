import React, { FC } from 'react';

import Stack from 'src/components/stack';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from 'src/components/icons';
import Center from 'src/components/center';

import FooterLink from './Link';
import { FooterConfigInstance } from './config/factory';

interface SocialMediaProps {
  config: FooterConfigInstance;
}

const SocialMedia: FC<SocialMediaProps> = ({ config }) => {
  return (
    <Center>
      <Stack marginY="2xl" spacing="2xl" direction="row">
        <FooterLink linkInstance={config.socialMedia.facebook[0]}>
          <FacebookIcon />
        </FooterLink>
        <FooterLink linkInstance={config.socialMedia.instagram[0]}>
          <InstagramIcon />
        </FooterLink>
        <FooterLink linkInstance={config.socialMedia.linkedin[0]}>
          <LinkedinIcon />
        </FooterLink>
        <FooterLink linkInstance={config.socialMedia.youtube[0]}>
          <YoutubeIcon />
        </FooterLink>
      </Stack>
    </Center>
  );
};

export default SocialMedia;
