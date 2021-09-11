/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

const isExternal = (url) => {
  const isExternalRegex = new RegExp(/^(http|https):\/\//, 'i');
  return isExternalRegex.test(url);
};

export default function Link({ children, target, href, ...rest }) {
  const isExternalLink = isExternal(href);
  return isExternalLink ? (
    <a href={href} target={target} {...rest}>
      {children}
    </a>
  ) : (
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
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
};
