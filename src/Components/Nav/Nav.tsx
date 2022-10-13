import React from "react";

import { Link } from "react-scroll";

import Container from "../Container/Container";

import styles from "./Nav.module.scss";

const Nav: React.FC = () => {
  return (
    <nav className={`${styles.nav}`}>
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
              offset={-53}
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
