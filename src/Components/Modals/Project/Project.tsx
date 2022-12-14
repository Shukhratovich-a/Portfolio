import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import useProjectInfo from "../../../Hooks/useProjectInfo";
import useProjectModal from "../../../Hooks/useProjectModal";

import Chevron from "../../Lib/Icons/Chevron";
import Close from "../../Lib/Icons/Close";
import Link from "../../Lib/Icons/Link";

import "swiper/scss";
import "swiper/scss/navigation";
import styles from "./Project.module.scss";

SwiperCore.use([Navigation]);

const Project: React.FC = () => {
  const projectInfo = useProjectInfo();
  const [projectModal, setProjectModal] = useProjectModal();

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  React.useEffect(() => {
    if (projectModal) {
      window.onkeydown = (evt) => {
        if (evt.keyCode === 27) {
          setProjectModal(false);
        }
      };
    }
  }, [projectModal, setProjectModal]);

  return (
    <div className={`${styles.modal} ${projectModal ? styles["modal--open"] : ""}`}>
      <div className={`${styles.modal__back}`} onClick={() => setProjectModal(false)}></div>

      <div className={`${styles.modal__inner}`}>
        <div className={`${styles.modal__gallery}`}>
          <Swiper
            className={`${styles.modal__gallery__slider}`}
            slidesPerView={1}
            spaceBetween={0}
            speed={800}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            modules={[Navigation]}
          >
            {projectInfo &&
              projectInfo.images.length > 0 &&
              projectInfo.images.map((image, index) => (
                <SwiperSlide className={`${styles.modal__gallery__slide}`} key={index}>
                  <img
                    className={`${styles.modal__image}`}
                    src={image}
                    alt={projectInfo.title}
                    width={700}
                    height={450}
                  />
                </SwiperSlide>
              ))}
          </Swiper>

          <div className={`${styles.modal__gallery__navigation}`}>
            <button className={`${styles.modal__gallery__button}`} ref={navigationPrevRef}>
              <Chevron left />
            </button>
            <button className={`${styles.modal__gallery__button}`} ref={navigationNextRef}>
              <Chevron right />
            </button>
          </div>
        </div>

        <div className={`${styles.modal__info}`}>
          <div className={`${styles.modal__info__top}`}>
            <h3 className={`${styles.modal__info__title}`}>{projectInfo.title}</h3>
            <span className={`${styles.modal__info__tag}`}>{projectInfo.tag}</span>
          </div>

          <p className={`${styles.modal__info__description}`}>{projectInfo.description}</p>
        </div>

        <button className={`${styles.modal__button}`} onClick={() => setProjectModal(false)}>
          <Close />
        </button>

        <a
          className={`${styles.modal__link}`}
          href={projectInfo.link}
          target={"_blank"}
          rel="noreferrer noopener"
        >
          <Link />
          <span>view site</span>
        </a>
      </div>
    </div>
  );
};

export default Project;
