import { ADD_RECIPE, FOOD2FORK_KEY, DATA_LOAD } from '../constants';
import axios from 'axios';

//Todo add interface for payload
export const addRecipe = (payload: any) => {
  return { type: ADD_RECIPE, payload };
};

export const getData = () => {
  return function(dispatch: any) {
    return axios
      .get(
        `https://www.food2fork.com/api/search?key=${FOOD2FORK_KEY}&q=shredded%20chicken&count=10`
      )
      .then((response: any) => {
        dispatch({ type: DATA_LOAD, payload: response.data.recipes });
      });
  };
};
