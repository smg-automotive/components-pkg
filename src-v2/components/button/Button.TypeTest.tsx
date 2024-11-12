// eslint-disable @typescript-eslint/ban-ts-comment

import React from 'react';

import { ShareIcon } from '../icons';

import Button from './index';

const _Button = () => {
  return (
    <div>
      {/* @ts-expect-error children is missing */}
      <Button onClick={() => null} />
      {/* @ts-expect-error href not allowed */}
      <Button href="foo/bar" onClick={() => null}>
        Label
      </Button>
      {/* @ts-expect-error isExternal not allowed */}
      <Button isExternal={true} onClick={() => null}>
        Label
      </Button>
      {/* @ts-expect-error rel not allowed */}
      <Button rel="foo" onClick={() => null}>
        Label
      </Button>
      {/* @ts-expect-error onClick is missing */}
      <Button>Label</Button>
      <Button onClick={() => null}>Label</Button>
      <Button
        onClick={() => null}
        variant="secondary"
        leftIcon={<ShareIcon />}
        rightIcon={<ShareIcon />}
        size="md"
      >
        Label
      </Button>
    </div>
  );
};
const _SubmitButton = () => {
  return (
    <div>
      {/* @ts-expect-error children is missing */}
      <Button type="submit" />
      {/* @ts-expect-error href not allowed */}
      <Button type="submit" href="foo/bar">
        Label
      </Button>
      {/* @ts-expect-error isExternal not allowed */}
      <Button type="submit" isExternal={true}>
        Label
      </Button>
      {/* @ts-expect-error rel not allowed */}
      <Button rel="foo" onClick={() => null}>
        Label
      </Button>
      <Button type="submit">Label</Button>
      <Button
        type="submit"
        onClick={() => null}
        variant="secondary"
        leftIcon={<ShareIcon />}
        rightIcon={<ShareIcon />}
        size="md"
      >
        Label
      </Button>
    </div>
  );
};

const _LinkButton = () => {
  return (
    <div>
      {/* @ts-expect-error children is missing */}
      <Button as="a" href="foo/bar" />
      {/* @ts-expect-error isDisabled must be false */}
      <Button as="a" href="foo/bar" isDisabled={true}>
        Label
      </Button>
      <Button as="a" href="foo/bar">
        Label
      </Button>
      <Button as="a" href="foo/bar" rel="foo">
        Label
      </Button>
    </div>
  );
};

const _IconButton = () => {
  return (
    <div>
      {/* @ts-expect-error aria-label is missing */}
      <Button icon={<ShareIcon />} onClick={() => null} />
      {/* @ts-expect-error children not allowed */}
      <Button icon={<ShareIcon />} ariaLabel="share" onClick={() => null}>
        Share
      </Button>
      {/* @ts-expect-error leftIcon not allowed */}
      <Button
        icon={<ShareIcon />}
        ariaLabel="share"
        leftIcon={<ShareIcon />}
        onClick={() => null}
      />
      {/* @ts-expect-error onClick missing */}
      <Button icon={<ShareIcon />} ariaLabel="share" />
      <Button icon={<ShareIcon />} ariaLabel="share" type="submit" />
      <Button icon={<ShareIcon />} ariaLabel="share" onClick={() => null} />
      <Button icon={<ShareIcon />} ariaLabel="share" as="a" href="foo/bar" />;
    </div>
  );
};
