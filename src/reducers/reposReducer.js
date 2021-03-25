const SET_REPORTS = 'SET_REPORTS';
const SET_LOADING = 'SET_LOADING';

const defaultState = {
  items: [],
  isLoading: true
};

const reposReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_REPORTS:
      return {
        ...state,
        items: action.payload.items
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state
  }
};

export const setRepos = (repos) => ({type: SET_REPORTS, payload: repos});
export const setLoading = (isLoading) => ({type: SET_LOADING, payload: isLoading});

export default reposReducer;
