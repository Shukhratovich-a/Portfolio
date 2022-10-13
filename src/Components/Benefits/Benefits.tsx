import benefits from "../../Datas/Benefits";

import styles from "./Benefits.module.scss";

const Benefits: React.FC = () => {
  return (
    <ul className={`${styles.benefits__list}`}>
      {benefits.length > 0 &&
        benefits.map((benefit, index) => (
          <li className={`${styles.benefit}`} key={index}>
            <div className={`${styles.benefit__icon}`}>
              <div className={`${styles.benefit__icon__inner}`}>{<benefit.image />}</div>
            </div>

            <h2 className={`${styles.benefit__heading}`}>{benefit.heading}</h2>

            <p className={`${styles.benefit__description}`}>{benefit.description}</p>
          </li>
        ))}
    </ul>
  );
};

export default Benefits;
