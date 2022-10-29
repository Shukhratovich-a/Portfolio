import React from "react";

import benefits from "../../Datas/Benefits";

import styles from "./Benefits.module.scss";

const Benefits: React.FC = () => {
  const benefitsRef = React.useRef<HTMLUListElement>(null);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        benefitsRef.current &&
        benefitsRef.current!.offsetTop < window.scrollY + window.innerHeight - 180
      ) {
        benefitsRef.current?.classList.add(styles["benefits__list--icon-show"]);
      }
      if (
        benefitsRef.current &&
        benefitsRef.current!.offsetTop < window.scrollY + window.innerHeight - 250
      ) {
        benefitsRef.current?.classList.add(styles["benefits__list--desc-show"]);
      }
    });
  }, []);

  return (
    <ul className={`${styles.benefits__list}`} ref={benefitsRef}>
      {benefits.length > 0 &&
        benefits.map((benefit, index) => (
          <li
            className={`${styles.benefit}`}
            key={index}
            style={{ animationDelay: String(0.2 * index) + "s" }}
          >
            <div className={`${styles.benefit__icon}`}>
              <div className={`${styles.benefit__icon__inner}`}>{<benefit.image />}</div>
            </div>

            <div className={`${styles.benefit__inner}`}>
              <h2 className={`${styles.benefit__heading}`}>{benefit.heading}</h2>

              <p className={`${styles.benefit__description}`}>{benefit.describtion}</p>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default Benefits;
