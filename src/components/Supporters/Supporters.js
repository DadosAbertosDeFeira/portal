import React from 'react';
import Link from '../Link';

import supporters from '../../utils/supporters';

import styles from './Supporters.module.scss';

const Supporters = () => {
  const { financial, institutional, regular } = supporters;
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="m-xl">Financiamento e Prêmios</h2>
        <div className="flex items-center justify-center">
          {financial.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={`${styles.logo} m-md ${
                  item.id === 'shuttleworth' ? styles.shuttleworthLogo : ''
                }`}
                src={item.logo}
                alt={item.name}
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 className="m-xl">Apoio Institucional</h2>
        <div className="flex items-center justify-center">
          {institutional.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={`${styles.logo} m-md`}
                src={item.logo}
                alt={item.name}
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 className="m-xl">Apoio</h2>
        <div className="flex items-center justify-center">
          {regular.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={`${styles.logo} m-md ${
                  item.id === 'absam' ? styles.absamLogo : ''
                }`}
                src={item.logo}
                alt={item.name}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Supporters;
