import React from "react";

import Container from "../Container/Container";

import styles from "./Contact.module.scss";

const Contact = () => {
  const headingTextRef = React.useRef<HTMLHeadingElement>(null);
  const headingLineRef = React.useRef<HTMLSpanElement>(null);
  const headingHighlightRef = React.useRef<HTMLSpanElement>(null);
  const formRef = React.useRef<HTMLFormElement>(null);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        headingTextRef.current &&
        headingTextRef.current!.offsetTop < window.scrollY + window.innerHeight - 150
      ) {
        headingTextRef.current?.classList.add(styles["contact__heading__text--show"]);
      }
      if (
        headingLineRef.current &&
        headingLineRef.current!.offsetTop < window.scrollY + window.innerHeight - 100
      ) {
        headingLineRef.current?.classList.add(styles["contact__top__line--show"]);
      }
      if (
        headingHighlightRef.current &&
        headingHighlightRef.current!.offsetTop < window.scrollY + window.innerHeight - 100
      ) {
        headingHighlightRef.current?.classList.add(styles["contact__top__highlight--show"]);
      }
      if (
        formRef.current &&
        formRef.current!.offsetTop < window.scrollY + window.innerHeight - 300
      ) {
        formRef.current?.classList.add(styles["contact__form--show"]);
      }
    });
  }, []);

  return (
    <section className={`${styles.contact}`} id={"contact"}>
      <div className={`${styles.contact__back}`}>
        <svg
          className={`${styles.contact__triangle}`}
          preserveAspectRatio="none"
          viewBox="0 0 100 102"
          width="100%"
          height="75"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m0 0 50 100L100 0Z" fill="currentColor" stroke="currentColor" />
        </svg>
      </div>

      <Container className={`${styles.container}`}>
        <div className={`${styles.contact__top}`}>
          <h2 className={`${styles.contact__heading}`}>
            <span className={`${styles.contact__heading__text}`} ref={headingTextRef}>
              contact
            </span>
          </h2>

          <span className={`${styles.contact__top__line}`} ref={headingLineRef}></span>

          <span className={`${styles.contact__top__highlight}`} ref={headingHighlightRef}>
            Have a question or want to work together?
          </span>
        </div>

        <form className={`${styles.contact__form}`} ref={formRef}>
          <input
            className={`${styles.contact__form__input}`}
            name={"name"}
            type={"text"}
            placeholder={"Name"}
          />

          <input
            className={`${styles.contact__form__input}`}
            name={"email"}
            type={"text"}
            placeholder={"Enter Email"}
          />

          <textarea
            className={`${styles.contact__form__input}`}
            name={"message"}
            cols={30}
            rows={7}
            placeholder={"Your Message"}
          />

          <button className={`${styles.contact__from__button}`}>
            <span>submit</span>
          </button>
        </form>
      </Container>
    </section>
  );
};

export default Contact;
