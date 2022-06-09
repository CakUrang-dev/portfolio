import actionType from "../actions/rootAction";

const initialState = {
  portfolioItem: [
    {
      src: "/img/arthoof.png",
      alt: "arthoof",
      title: "ARTHOOF",
    },
    {
      src: "/img/portofolio.png",
      alt: "portfolio",
      title: "Portfolio",
    },
    {
      src: "/img/bonnethood.png",
      alt: "bonnethood",
      title: "Bonnethood",
    },
    {
      src: "/img/searchrealty.png",
      alt: "searchrealty",
      title: "Search Realty",
    },
  ],
  isHover: false,
  modalPortfolio: [
    {
      src: "/img/arthoof.png",
      alt: "arthoof",
      title: "ARTHOOF",
      tech: ["Bootstrap 5", "Javascript", "HTML", "CSS"],
      desc: "this project is my first project, this project is designed to be a wordpress template but needs further development to make it lighter and faster",
    },
    {
      src: "/img/portofolio.png",
      alt: "portfolio",
      title: "Portfolio",
      tech: [
        "Javascript",
        "Redux",
        "React-Redux",
        "React.js",
        "Next.js",
        "Tailwind CSS",
      ],
      desc: "This project was created to show the projects that I've made",
    },
    {
      src: "/img/bonnethood.png",
      alt: "bonnethood",
      title: "Bonnethood",
      tech: [
        "Typescript",
        "Redux",
        "React-Redux",
        "React.js",
        "Next.js",
        "Styled Component",
      ],
      desc: "This project is my second project from freelancing, I get this project from my client for a bug fixing and css fixing",
    },
    {
      src: "/img/searchrealty.png",
      alt: "searchrealty",
      title: "Searchrealty",
      tech: [
        "Javascript",
        "Redux",
        "React-Redux",
        "React.js",
        "React Bootstrap",
      ],
      desc: "This project is my first project from freelancing, I get this project from my client to build the whole page and convert wordpress to React website. I build this project from scratch, from the navigation bar until the footer, and I create this page for 3 days",
    },
  ],
};

const portfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ChangeIsHover:
      return {
        ...state,
        isHover: true,
      };
    default:
      return state;
  }
};

export default portfolioReducer;
