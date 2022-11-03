import sano1 from "../Assets/Images/Projects/Sano/Sano-1.jpg";
import sano2 from "../Assets/Images/Projects/Sano/Sano-2.jpg";
import sano3 from "../Assets/Images/Projects/Sano/Sano-3.jpg";
import sano4 from "../Assets/Images/Projects/Sano/Sano-4.jpg";
import sano5 from "../Assets/Images/Projects/Sano/Sano-5.jpg";

import onur1 from "../Assets/Images/Projects/Onur/Onur-1.jpg";
import onur2 from "../Assets/Images/Projects/Onur/Onur-2.jpg";

const projectInfos: any = {
  sano: {
    title: "Sano",
    tag: "PEER GUIDED SHOPPING.",
    description:
      "The Mall is a place to follow the latest fashion purchases of your friends and favorite celebrities. Built with Node.js and Handlebars. Features the ability to import thousands of top brands products into one shopping site.",
    images: [sano1, sano2, sano3, sano4, sano5],
    link: "https://sanoagency.ru/",
  } as ProjectInfo,

  onur: {
    title: "Onur",
    tag: "PEER GUIDED SHOPPING.",
    description:
      "The Mall is a place to follow the latest fashion purchases of your friends and favorite celebrities. Built with Node.js and Handlebars. Features the ability to import thousands of top brands products into one shopping site.",
    images: [onur1, onur2],
    link: "https://onurcompany.com/",
  } as ProjectInfo,
};

export default projectInfos;
