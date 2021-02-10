import React, { useRef, useEffect } from 'react';
import { BiMenu, BiSearchAlt2 } from 'react-icons/bi';
import styles from '../styles/components/header.module.scss';

export default function components() {
  const navRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    let isScrollingDown = false;

    const onScroll = (e) => {
      const scrollTop = window.pageYOffset || navRef.scrollTop;
      if (scrollTop > 68) {
        if (isScrollingDown) {
          return;
        }
        isScrollingDown = true;
        navRef.current.classList.add(styles.decreasedSize);
        navRef.current.classList.remove(styles.defaultSize);
      } else {
        if (!isScrollingDown) {
          return;
        }
        isScrollingDown = false;
        navRef.current.classList.add(styles.defaultSize);
        navRef.current.classList.remove(styles.decreasedSize);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [navRef]);
  
  return (
    <nav id={styles.navbar} className={styles.defaultSize} ref={navRef}>
      <button type="button">
        <BiMenu size={24} />
      </button>
      <div id={styles.imageBox}>
      
      <img
        src="assets/logo.svg"
        alt="Logo grande Dados Abertos de Feira"
        ref={imgRef}
      />
      </div>
      
      <button type="button">
        <BiSearchAlt2 size={24} />
      </button>
    </nav>
  );
}
