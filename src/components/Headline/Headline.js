import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Headline.module.scss';

const Headline = ({ className, size, children, testId }) => {
  const defaultHeadline = (
    <h2
      data-testid={testId}
      className={classnames(styles.headline, styles.medium, className)}
    >
      {children}
    </h2>
  );

  switch (size) {
    case 'large': {
      return (
        <h1
          data-testid={testId}
          className={classnames(styles.headline, styles.large, className)}
        >
          {children}
        </h1>
      );
    }

    case 'small': {
      return (
        <h3
          data-testid={testId}
          className={classnames(styles.headline, styles.small, className)}
        >
          {children}
        </h3>
      );
    }

    default: {
      return defaultHeadline;
    }
  }
};

Headline.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.array,
    PropTypes.object,
  ]),
};

Headline.defaultProps = {
  className: '',
  size: 'medium',
  children: '',
};

export default Headline;
