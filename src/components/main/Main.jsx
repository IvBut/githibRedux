import './main.less';
import React, {useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../../actions/repos';
import Repo from "./repo/Repo";
import {setCurrentPage, setLoading} from "../../reducers/reposReducer";
import {createPages} from '../../utils/pagesCreator';

const Main = () => {
  const search = React.createRef();
  const dispatch = useDispatch();
  const repos = useSelector(state => state.repos.items);
  const isLoading = useSelector(state => state.repos.isLoading);
  const currentPage = useSelector(state => state.repos.currentPage);
  const perPage = useSelector(state => state.repos.perPage);
  const totalCount = useSelector(state => state.repos.totalCount);
  const pagesCount = Math.ceil(totalCount /  perPage);
  const pages = [];
  createPages(pages,pagesCount,currentPage);

  useEffect(() => {
    dispatch(getRepos({
      page: currentPage,
      perPage,
      search: search.current?.value,
    }));
  }, [currentPage]);

  const handleClick = () => {
    dispatch(setCurrentPage(1));
  };

  const load = (<div className="loading"></div>);

  return (
      <div>
        <h1>Repositories</h1>
        <div className="search">
          <input type="text" className="search-input" ref={search}/>
          <button className="search-btn" onClick={handleClick}>Search</button>
        </div>
        {
          !isLoading
              ?
                repos.map(repo => {
                  return <Repo key={repo.id} repo={repo}/>
                })
              :
              load
        }
        <div className="pages">
          {pages.map((page,index) => <span
              key={index}
              className={currentPage === page ? 'current-page' : 'page'}
              onClick={() => {dispatch(setCurrentPage(page))}}
          >{page}
          </span>)}
        </div>
      </div>
  )
};

export default Main
