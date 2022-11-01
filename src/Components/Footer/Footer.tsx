import Container from "../Container/Container";
import Socials from "../Socials/Socials";
import DoubleChevron from "../Lib/Icons/DoubleChevron";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <Container className={`${styles.container}`}>
        <button
          className={`${styles.footer__button}`}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <DoubleChevron />
        </button>

        <Socials />

        <div className={`${styles.footer__copyright}`}>
          <span className={`${styles.footer__copyright__text}`}>Abdulaziz Abdunabiyev </span>
          <span className={`${styles.footer__copyright__light}`}>©2022</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
