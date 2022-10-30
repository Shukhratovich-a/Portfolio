import sano1 from "../Assets/Images/Projects/thumb-1.jpg";
import sano2 from "../Assets/Images/Projects/thumb-3.jpg";
import onur1 from "../Assets/Images/Projects/thumb-2.jpg";

const projectInfos: any = {
  sano: {
    title: "Sano",
    tag: "PEER GUIDED SHOPPING.",
    description:
      "The Mall is a place to follow the latest fashion purchases of your friends and favorite celebrities. Built with Node.js and Handlebars. Features the ability to import thousands of top brands products into one shopping site.",
    images: [sano1, sano2],
    link: "https://sanoagency.ru/",
  } as ProjectInfo,

  onur: {
    title: "Onur",
    tag: "PEER GUIDED SHOPPING.",
    description:
      "The Mall is a place to follow the latest fashion purchases of your friends and favorite celebrities. Built with Node.js and Handlebars. Features the ability to import thousands of top brands products into one shopping site.",
    images: [onur1],
    link: "https://onurcompany.com/",
  } as ProjectInfo,
};

export default projectInfos;
