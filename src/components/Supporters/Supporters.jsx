import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import supporters from '../../utils/supporters';

const Supporters = () => {
  const { financial, institutional, regular } = supporters;
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="m-lg tablet:m-xl">Financiamento e Prêmios</h2>
        <div className="flex flex-col tablet:flex-row items-center justify-center">
          {financial.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="max-w-[200px] m-lg tablet:m-md"
                src={item.logo}
                alt={item.name}
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 className="m-lg tablet:m-xl">Apoio Institucional</h2>
        <div className="flex flex-col tablet:flex-row items-center justify-center">
          {institutional.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="max-w-[200px] m-lg tablet:m-md"
                src={item.logo}
                alt={item.name}
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 className="m-lg tablet:m-xl">Apoio</h2>
        <div className="flex flex-col tablet:flex-row items-center justify-center">
          {regular.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="max-w-[200px] m-lg tablet:m-md"
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
