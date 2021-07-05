import actionType from "../actions/rootAction";

const initialState = {
  sidebarIsOpen: false,
  sidabarLinkData: [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      path: "/portfolio",
    },
    {
      id: 3,
      title: "Skill",
      path: "/skill",
    },
    {
      id: 4,
      title: "Contact",
      path: "/contact",
    },
  ],
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SidebarChange:
      return {
        ...state,
        sidebarIsOpen: !state.sidebarIsOpen,
      };
    default:
      return state;
  }
};

export default sidebarReducer;
