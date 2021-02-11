import React, { useRef, useEffect, useState } from 'react';
import { BiMenu, BiSearchAlt2 } from 'react-icons/bi';
import { MdBusiness, MdClose } from 'react-icons/md';
import { animated, useTransition } from 'react-spring';

import styles from '../styles/components/header.module.scss';

export default function components() {
  const navRef = useRef(null);
  const imgRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const [searchOpened, setSearchOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened((state) => !state);
  };

  const openSearch = () => {
    setSearchOpened(true);
  };
  const closeSearch = () => {
    setSearchOpened(false);
  };

  const transitions = useTransition(menuOpened, null, {
    from: {
      left: '-500px',
    },
    enter: {
      left: '0',
    },
    leave: {
      left: '-500px',
    },
  });

  useEffect(() => {
    let isScrollingDown = false;

    const onScroll = () => {
      const scrollTop = window.pageYOffset || navRef.scrollTop;
      if (scrollTop > 68) {
        if (isScrollingDown) {
          return;
        }
        isScrollingDown = true;
        navRef.current.classList.add(styles.decreasedSize);
        navRef.current.classList.remove(styles.defaultSize);
        closeSearch();
      } else {
        if (!isScrollingDown) {
          return;
        }
        isScrollingDown = false;
        navRef.current.classList.add(styles.defaultSize);
        navRef.current.classList.remove(styles.decreasedSize);
        closeSearch();
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [navRef]);

  return (
    <>
      <nav id={styles.navbar} className={styles.defaultSize} ref={navRef}>
        <header>
          {searchOpened ? (
            <>
              <div>
                <img
                  className={styles.decreasedSize}
                  src="assets/logo_pequena.svg"
                  alt="Logo pequena Dados Abertos de Feira"
                />
              </div>
              <form>
                <BiSearchAlt2 size={24} />
                <input type="text" placeholder="Digite aqui a sua busca" />
                <button type="button" onClick={closeSearch}>
                  <MdClose size={24} />
                </button>
              </form>
            </>
          ) : (
            <>
              <button type="button" onClick={toggleMenu}>
                <BiMenu size={24} />
              </button>
              <div id={styles.imageBox}>
                <img
                  src="assets/logo.svg"
                  alt="Logo Dados Abertos de Feira"
                  ref={imgRef}
                />
              </div>
              <button type="button" onClick={openSearch}>
                <BiSearchAlt2 size={24} />
              </button>
            </>
          )}
        </header>
      </nav>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div id={styles.menu} key={key} style={props}>
              <div id={styles.menuClose}>
                <button type="button" onClick={toggleMenu}>
                  <MdClose size={16} />
                </button>
              </div>
              <ul className={styles.list}>
                <li>
                  <div>
                    <MdBusiness size={16} />
                    <span>Prefeitura</span>
                  </div>
                  <ul className={styles.listItem}>
                    <li>
                      <span>Diário Oficial</span>
                    </li>
                    <li>
                      <span>Licitações</span>
                    </li>
                  </ul>
                </li>

                <li>
                  <div>
                    <MdBusiness size={16} />
                    <span>Câmara de Vereadores</span>
                  </div>
                  <ul className={styles.listItem}>
                    <li>
                      <span>Diário Oficial</span>
                    </li>
                    <li>
                      <span>Atas das Sessões</span>
                    </li>
                    <li>
                      <span>Lista de Presença</span>
                    </li>
                    <li>
                      <span>Agenda das Sessões</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </animated.div>
          )
      )}
      {/* {opened && (
        <animated.div id={styles.menu}>
          <div id={styles.menuClose}>
            <button type="button">
              <MdClose size={16} />
            </button>
          </div>
          <ul className={styles.list}>
            <li>
              <div>
                <MdBusiness size={16} />
                <span>Prefeitura</span>
              </div>
              <ul className={styles.listItem}>
                <li>
                  <span>Diário Oficial</span>
                </li>
                <li>
                  <span>Licitações</span>
                </li>
              </ul>
            </li>

            <li>
              <div>
                <MdBusiness size={16} />
                <span>Câmara de Vereadores</span>
              </div>
              <ul className={styles.listItem}>
                <li>
                  <span>Diário Oficial</span>
                </li>
                <li>
                  <span>Atas das Sessões</span>
                </li>
                <li>
                  <span>Lista de Presença</span>
                </li>
                <li>
                  <span>Agenda das Sessões</span>
                </li>
              </ul>
            </li>
          </ul>
        </animated.div>
      )} */}
    </>
  );
}
