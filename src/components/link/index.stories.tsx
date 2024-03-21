import { ArrowLeftIcon, ErrorIcon } from '../index';

import Link from './index';

export default {
  title: 'Components/Navigation/Link',
  component: Link,
};

export const Overview = {
  render: () => <Link href="https://autoscout24.ch">AutoScout24 Homepage</Link>,
  name: 'Overview',
};

export const LinkWithLeftIcon = {
  render: () => <Link leftIcon={<ArrowLeftIcon />}>Back</Link>,
  name: 'Link with Left icon',
};

export const LinkWithRightIcon = {
  render: () => (
    <Link rightIcon={<ErrorIcon />} href="https://google.com" target="_blank">
      Go to External Link
    </Link>
  ),
  name: 'Link with Right icon',
};

export const LinkWithLeftRightIcons = {
  render: () => (
    <Link leftIcon={<ArrowLeftIcon />} rightIcon={<ErrorIcon />}>
      Terms & Conditions
    </Link>
  ),
  name: 'Link with Left & Right icons',
};

export const LinkAsPartOfAParagraph = {
  render: () => (
    <p>
      You need to accept<Link>Terms & Conditions</Link>before you proceed
    </p>
  ),
  name: 'Link as part of a paragraph',
};

export const LinkWithRelAndTarget = {
  render: () => (
    <Link
      rel="nofollow noopener noreferrer"
      target="_blank"
      href="https://autoscout24.ch"
    >
      AutoScout24 Homepage
    </Link>
  ),

  name: 'Link with rel and target',
};

export const LinkWithExternalRel = {
  render: () => (
    <Link isExternal={true} href="https://autoscout24.ch">
      AutoScout24 Homepage
    </Link>
  ),
  name: 'Link with external rel',
};
