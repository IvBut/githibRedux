import axios from 'axios';
import {setLoading, setRepos} from '../reducers/reposReducer';

export const getRepos = (params) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(`https://api.github.com/search/repositories?q=${params}&sort=stars`);
      dispatch(setRepos(response.data));
    } catch (e) {
      console.log(e)
    } finally {
      dispatch(setLoading(false));
      console.log('finaly ',)
    }

  }
};
