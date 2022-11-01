import LinkedIn from "../Lib/Socials/LinkedIn";
import Facebook from "../Lib/Socials/Facebook";
import Instagram from "../Lib/Socials/Instagram";
import Telegram from "../Lib/Socials/Telegram";

import styles from "./Socials.module.scss";

const Socials = () => {
  return (
    <ul className={`${styles.socials}`}>
      <li className={`${styles.social}`}>
        <a className={`${styles.social__link}`} href="#link">
          <LinkedIn />
        </a>
      </li>

      <li className={`${styles.social}`}>
        <a className={`${styles.social__link}`} href="#link">
          <Facebook />
        </a>
      </li>

      <li className={`${styles.social}`}>
        <a className={`${styles.social__link}`} href="#link">
          <Instagram />
        </a>
      </li>

      <li className={`${styles.social}`}>
        <a className={`${styles.social__link}`} href="#link">
          <Telegram />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
