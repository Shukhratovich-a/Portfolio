import React from "react";

import Container from "../Container/Container";

import styles from "./Blog.module.scss";

const Blog = () => {
  const headingTextRef = React.useRef<HTMLHeadingElement>(null);
  const headingLineRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        headingTextRef.current &&
        headingTextRef.current!.offsetTop < window.scrollY + window.innerHeight - 150
      ) {
        headingTextRef.current?.classList.add(styles["blog__heading__text--show"]);
      }
      if (
        headingLineRef.current &&
        headingLineRef.current!.offsetTop < window.scrollY + window.innerHeight - 100
      ) {
        headingLineRef.current?.classList.add(styles["blog__top__line--show"]);
      }
    });
  }, []);

  return (
    <section className={`${styles.blog}`} id={'blog'}>
      <Container className={`${styles.container}`}>
        <div className={`${styles.blog__top}`}>
          <h2 className={`${styles.blog__heading}`}>
            <span className={`${styles.blog__heading__text}`} ref={headingTextRef}>
              blog
            </span>
          </h2>

          <span className={`${styles.blog__top__line}`} ref={headingLineRef}></span>
        </div>
      </Container>
    </section>
  );
};

export default Blog;
