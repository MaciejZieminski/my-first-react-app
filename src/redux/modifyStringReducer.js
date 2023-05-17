//actions
const createActionName = actionName => `app/searchString/${actionName}`;
const MODIFY_SEARCHSTRING = createActionName('MODIFY_SEARCHSTRING');

// action creators
export const modifySearchString = payload => ({type: MODIFY_SEARCHSTRING, payload});

const modifyStringReducer = (statePart = '', action) => {
    switch(action.type) {
      case MODIFY_SEARCHSTRING:
        return action.payload
      default:
        return statePart;
    }
};

export default modifyStringReducer;