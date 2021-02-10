import React, { useRef, useEffect } from 'react';
import { BiMenu, BiSearchAlt2 } from 'react-icons/bi';
import styles from '../styles/components/header.module.scss';

export default function components() {
  const navRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    let isScrollingDown = false;

    const changeImageFrame = (small) => {
      // imgRef.current.classList.add(styles.transitionImageUp);
      setTimeout(() => {
        // imgRef.current.src = small
        //   ? 'assets/logo_pequena.svg'
        //   : 'assets/logo.svg';
      }, 300);
      setTimeout(() => {
        // imgRef.current.classList.remove(styles.transitionImageUp);
      }, 700);
    };

    const onScroll = (e) => {
      const scrollTop = window.pageYOffset || navRef.scrollTop;
      if (scrollTop > 68) {
        if (isScrollingDown) {
          return;
        }
        isScrollingDown = true;
        navRef.current.classList.add(styles.decreasedSize);
        navRef.current.classList.remove(styles.defaultSize);
        changeImageFrame(true);
      } else {
        if (!isScrollingDown) {
          return;
        }
        isScrollingDown = false;
        navRef.current.classList.add(styles.defaultSize);
        navRef.current.classList.remove(styles.decreasedSize);
        changeImageFrame(false);
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
