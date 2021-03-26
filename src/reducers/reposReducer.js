const SET_REPORTS = 'SET_REPORTS';
const SET_LOADING = 'SET_LOADING';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const defaultState = {
  items: [],
  isLoading: true,
  currentPage: 1,
  perPage: 10,
  totalCount: 0
};

const reposReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_REPORTS:
      return {
        ...state,
        items: action.payload.items,
        totalCount: action.payload.total_count
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };
    default:
      return state
  }
};

export const setRepos = (repos) => ({type: SET_REPORTS, payload: repos});
export const setLoading = (isLoading) => ({type: SET_LOADING, payload: isLoading});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, payload: page});

export default reposReducer;
