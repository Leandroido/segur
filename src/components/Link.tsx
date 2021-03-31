import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';

function Link({
  href,
  children
}: {
  href: string | undefined;
  children: React.ReactNode;
}): JSX.Element {
  return <NextLink href={href}>{children}</NextLink>;
}

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node
};

export default Link;
