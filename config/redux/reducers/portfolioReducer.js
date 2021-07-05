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
