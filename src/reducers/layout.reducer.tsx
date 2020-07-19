import { layoutTemplate, actionType } from "../types";
//Reducer for character information Initialize State
const initState: layoutTemplate = {
  collapsed: true,
};

//Define Actions
const layoutReducer = (state = initState, action: any) => {
  switch (action.type) {
    //Change character name
    case "COLLAPSED":
      return { ...initState, collapsed: action.payload };
    default:
      return state;
  }
};

export default layoutReducer;
