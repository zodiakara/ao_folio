import li from "./LI_CLONE.JPG";
import swapp from "./SWAPP.JPG";
import wa from "./WA.JPG";
import folio from "./FOLIO.jpg";
import { t } from "i18next";

export const myProjects = [
  {
    name: t("projectspage-projects.project-one.name"),
    scope: "Frontend and Backend",
    stackFE: "React, Redux, MUI, Socket.io",
    stackBE: "NodeJs, Express, MongoDB, JWT, Socket.io",
    image: swapp,
    repoFE: "https://github.com/zodiakara/-capstone-project-FE",
    repoBE: "https://github.com/zodiakara/capstone-project-BE",
    prodFE: "https://swapp-app.netlify.app/",
    prodBE: "",
    description: t("projectspage-projects.project-one.description"),
  },
  {
    name: t("projectspage-projects.project-two.name"),
    scope: "Frontend and Backend",
    stackFE: "React, Redux, Bootstrap",
    stackBE: "NodeJs, Express, MongoDB, JWT",
    image: li,
    repoFE: "https://github.com/zodiakara/LINKEDIN-CLONE-FE",
    repoBE: "https://github.com/zodiakara/BW4-LINKEDIN-CLONE-BE",
    prodFE: "https://linkedin-clone-fe.netlify.app/",
    prodBE: "",
    description: t("projectspage-projects.project-two.description"),
  },
  {
    name: t("projectspage-projects.project-three.name"),
    scope: "Frontend and Backend",
    stackFE: "React, Redux, Typescript, MUI, Bootstrap, Socket.io",
    stackBE: "NodeJs, Express, MongoDB, JWT, Socket.io",
    image: wa,
    repoFE: "https://github.com/zodiakara/whatsapp-clone-fe",
    repoBE: "https://github.com/zodiakara/whatsapp-clone-be",
    prodFE: "",
    prodBE: "",
    description: t("projectspage-projects.project-three.description"),
  },
  // {
  //   name: "Calculator",
  //   scope: "Frontend",
  //   stackFE: "Javascript, CSS",
  //   stackBE: "",
  //   image:
  //     "https://media.cnn.com/api/v1/images/stellar/prod/201026153717-cancun-mexico.jpg?q=x_2,y_215,h_1228,w_2182,c_crop/h_720,w_1280/f_webp",
  //   repoFE: "https://github.com/zodiakara/calculator-js",
  //   repoBE: "",
  //   prodFE: "",
  //   prodBE: "",
  //   description: "",
  // },
  {
    name: t("projectspage-projects.project-four.name"),
    scope: "Frontend",
    stackFE: "React, MUI React, Redux, Typescript, MUI, Bootstrap, Socket.io",
    stackBE: "",
    image: folio,
    repoFE: "https://github.com/zodiakara/ao_folio",
    repoBE: "",
    prodFE: "https://agata-orminska.netlify.app/",
    prodBE: "",
    description: t("projectspage-projects.project-four.description"),
  },
];
