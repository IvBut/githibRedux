import axios from 'axios';
import {setLoading, setRepos} from '../reducers/reposReducer';

export const getRepos = (params) => {
  return async (dispatch) => {
    try {
      const queryParams = [];
      queryParams.push(`q=${params.search || 'test'}`);
      if (params?.perPage) {
        queryParams.push(`per_page=${params.perPage}`)
      }
      if (params?.page) {
        queryParams.push(`page=${params.page}`)
      }
      dispatch(setLoading(true));
      const response = await axios.get(`https://api.github.com/search/repositories?${queryParams.join('&')}&sort=stars`);
      dispatch(setRepos(response.data));
    } catch (e) {
      console.log(e)
    } finally {
      dispatch(setLoading(false));
      console.log('finaly ',)
    }

  }
};
