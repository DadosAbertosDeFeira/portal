/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

export default function Link({ children, target, href, ...rest }) {
  return (
    <NextLink href={href}>
      <a {...rest} target={target}>
        {children}
      </a>
    </NextLink>
  );
}
Link.defaultProps = {
  target: '_self',
};
Link.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
};
