import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

const Tag = ({ children, className }) => (
  <div
    className={classNames('bg-[#f8f9fa] py-xs px-sm inline-block', className)}
  >
    <p className="text-[#656f78] text-xs">{children}</p>
  </div>
);

Tag.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Tag.defaultProps = {
  className: '',
};

export default Tag;
