import React from 'react';
import PropTypes from 'prop-types';
import NextHead from 'next/head';

function Head({ children }: { children: React.ReactNode }): JSX.Element {
  return <NextHead>{children}</NextHead>;
}

Head.propTypes = {
  children: PropTypes.node
};

export default Head;
