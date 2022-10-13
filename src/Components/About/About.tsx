import Benefits from "../Benefits/Benefits";

import Container from "../Container/Container";

import styles from "./About.module.scss";

const About: React.FC = () => {
  return (
    <section className={`${styles.about}`} id={"about"}>
      <Container>
        <h2 className={`${styles.about__heading}`}>About</h2>

        <Benefits />
      </Container>
    </section>
  );
};

export default About;
