import React from "react";

import { Link } from "react-scroll";

import Container from "../Container/Container";

import styles from "./Nav.module.scss";

const Nav: React.FC = () => {
  const navRef = React.useRef<HTMLDivElement>(null);
  const [isSticky, setSticky] = React.useState<boolean>(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        navRef.current &&
        2 * window.innerHeight - 3 <=
          window.scrollY + window.innerHeight - navRef.current!.offsetHeight &&
        !isSticky
      ) {
        setSticky(true);
      }
      if (2 * window.innerHeight > window.scrollY + window.innerHeight) {
        setSticky(false);
      }
    });
  }, [isSticky]);

  return (
    <nav className={`${styles.nav} ${isSticky ? styles["nav--show"] : ""}`} ref={navRef}>
      <Container>
        <ul className={`${styles.nav__list}`}>
          <li className={`${styles.nav__item}`}>
            <Link
              className={`${styles.nav__link}`}
              activeClass={`${styles["nav__link--active"]}`}
              to="hero"
              spy={true}
            >
              Home
            </Link>
          </li>

          <li className={`${styles.nav__item}`}>
            <Link
              className={`${styles.nav__link}`}
              activeClass={`${styles["nav__link--active"]}`}
              to="about"
              spy={true}
            >
              About
            </Link>
          </li>

          <li className={`${styles.nav__item}`}>
            <Link
              className={`${styles.nav__link}`}
              activeClass={`${styles["nav__link--active"]}`}
              to="portfilio"
              spy={true}
            >
              Portfilio
            </Link>
          </li>

          <li className={`${styles.nav__item}`}>
            <Link
              className={`${styles.nav__link}`}
              activeClass={`${styles["nav__link--active"]}`}
              to="blog"
              spy={true}
            >
              Blog
            </Link>
          </li>

          <li className={`${styles.nav__item}`}>
            <Link
              className={`${styles.nav__link}`}
              activeClass={`${styles["nav__link--active"]}`}
              to="contact"
              spy={true}
            >
              Contact
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Nav;
