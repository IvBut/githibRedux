import './main.less';
import React, {useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../../actions/repos';
import Repo from "./repo/Repo";
import {setLoading} from "../../reducers/reposReducer";

const Main = () => {
  const search = React.createRef();
  const dispatch = useDispatch();
  const repos = useSelector(state => state.repos.items);
  const isLoading = useSelector(state => state.repos.isLoading);

  useEffect(() => {
    dispatch(getRepos());
  }, []);

  const handleClick = () => {
    dispatch(getRepos(search.current.value));
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
      </div>
  )
};

export default Main
