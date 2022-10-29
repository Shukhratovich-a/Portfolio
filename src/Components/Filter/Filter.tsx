import React from "react";

import useWindowDimensions from "../../Hooks/useWindowDimesions";

import filter from "../../Datas/Filter";

import styles from "./Filter.module.scss";

interface FilterItem {
  activeLang: string;
  setActiveLang: (state: string) => void;
  allProjects: Project[];
  setFilteredProjects: (state: Project[]) => void;
}

const Filter: React.FC<FilterItem> = ({
  setActiveLang,
  activeLang,
  allProjects,
  setFilteredProjects,
}) => {
  const { width } = useWindowDimensions();

  const [floatInnerLeft, setFloatInnerLeft] = React.useState(-25);
  const [floatLeft, setFloatLeft] = React.useState(200);
  const [floatWidth, setFloatWidth] = React.useState(111);

  const filterRef = React.useRef<HTMLDivElement>(null);
  const filterListRef = React.useRef<HTMLUListElement>(null);
  const floatRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        filterRef.current &&
        filterRef.current!.offsetTop < window.scrollY + window.innerHeight - 60
      ) {
        filterRef.current?.classList.add(styles["filter--show"]);
      }
    });
  }, []);

  React.useEffect(() => {
    if (floatRef.current) {
      floatRef.current?.childNodes[0].childNodes.forEach((item: any) => {
        const button: HTMLButtonElement = item.childNodes[0];
        if (item.childNodes[0]?.name === activeLang) {
          setFloatInnerLeft(-button.offsetLeft);
          setFloatWidth(button.offsetWidth);
        }
      });
    }

    if (filterListRef.current) {
      filterListRef.current?.childNodes.forEach((item: any) => {
        const button: HTMLButtonElement = item.childNodes[0];
        if (item.childNodes[0]?.name === activeLang) {
          setFloatLeft(button.offsetLeft);
        }
      });
    }
  }, [activeLang, width]);

  React.useEffect(() => {
    if (activeLang === "all") {
      setFilteredProjects(allProjects);
      return;
    }
    const filtered = allProjects.filter((project) => project.lang === activeLang);
    setFilteredProjects(filtered);
  }, [activeLang, allProjects, setFilteredProjects]);

  return (
    <div className={`${styles.filter}`} ref={filterRef}>
      <ul className={`${styles.filter__list}`} ref={filterListRef}>
        {filter.length > 0 &&
          filter.map((item, index) => (
            <li
              className={`${styles.filter__item} ${
                activeLang === item.short && styles.filter__item
              }`}
              key={index}
            >
              <button
                className={`${styles.filter__button}`}
                name={item.short}
                type={"button"}
                onClick={(evt) => setActiveLang(evt.currentTarget.name)}
              >
                <span className={`${styles.filter__button__text}`}>{item.title}</span>
              </button>
            </li>
          ))}
      </ul>

      <div
        className={`${styles.filter__float}`}
        style={{ width: floatWidth, left: floatLeft }}
        ref={floatRef}
      >
        <ul className={`${styles.filter__list}`} style={{ left: floatInnerLeft }}>
          {filter.length > 0 &&
            filter.map((item, index) => (
              <li
                className={`${styles.filter__item} ${
                  activeLang === item.short && styles.filter__item
                }`}
                key={index}
              >
                <button className={`${styles.filter__button}`} name={item.short} type={"button"}>
                  <span className={`${styles.filter__button__text}`}>{item.title}</span>
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
