import { ADD_RECIPE, DATA_LOAD } from '../constants';

interface Action {
  payload: any;
  type: string;
}

interface InitialState {
  recipes: any[];
  remote_recipes: any[];
}

const initialState: InitialState = {
  recipes: [],
  remote_recipes: []
};

const rootReducer = (state = initialState, action: Action) => {
  if (action.type === ADD_RECIPE) {
    return Object.assign({}, state, {
      recipes: state.recipes.concat(action.payload)
    });
  }
  if (action.type === DATA_LOAD) {
    return Object.assign({}, state, {
      remote_recipes: state.remote_recipes.concat(action.payload)
    });
  }
  return state;
};

export default rootReducer;
