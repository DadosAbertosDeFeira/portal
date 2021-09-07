import React from 'react';
import { useRouter } from 'next/router';

import BodyText from '../BodyText';
import Button from '../Button';
import styles from './HowContribute.module.scss';

const HowContribute = () => {
  const router = useRouter();

  return (
    <section id="colabore" className={styles.contribute}>
      <img
        className={styles.contributeImage}
        src="/assets/people-contribute.svg"
        alt="Como contribuir"
      />
      <div className={styles.contentWrapper}>
        <h2 className={styles.text}>Como contribuir</h2>
        <BodyText className={styles.text}>
          Essa é uma iniciativa voluntária, feita a muitas mãos, e qualquer
          pessoa interessada pode fazer parte!
        </BodyText>
        <Button
          className={styles.button}
          onClick={() => router.push('/colabore')}
        >
          Veja como contribuir
        </Button>
      </div>
    </section>
  );
};

export default HowContribute;
