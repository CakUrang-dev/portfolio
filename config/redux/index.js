import homeReducer from "./reducers/homeReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import rootReducer from "./reducers/rootReducer";
import portfolioReducer from "./reducers/portfolioReducer";
import skillReducer from "./reducers/skillReducer";
import modalReducer from "./reducers/modalReducer";

import {combineReducers} from "redux";

const reducers = combineReducers({
  home: homeReducer,
  sidebar: sidebarReducer,
  root: rootReducer,
  portfolio: portfolioReducer,
  skill: skillReducer,
  modal: modalReducer
});

export default reducers;
