import React from 'react';
import PropTypes from 'prop-types';

import styles from './Tag.module.scss';

const Tag = ({ children, className }) => (
  <div className={`${styles.tag} py-xs px-sm inline-block ${className}`}>
    <p className={`${styles.text} text-xs`}>{children}</p>
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
