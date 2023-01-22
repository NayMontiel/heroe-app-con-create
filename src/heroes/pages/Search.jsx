import React from "react";
import queryString from 'query-string';
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getHeroeByName } from "../helpers";
import { HeroesCard } from "../components/HeroesCard";


export const Search = () => {
  const navegate = useNavigate();
  const location = useLocation();

  const { q = ''} = queryString.parse(location.search);

  const heroes = getHeroeByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0

  const {searchText, onInputChange, onResetForm} = useForm({searchText: q});

  const handleSubmit = (e) => {
    e.preventDefault();
    if ( searchText.trim().length <= 1) {
      return;
    }
    navegate(`?q=${searchText.toLowerCase().trim() }`)
    onResetForm();
  }


  return (
    <>
      <h2 className="mt-3">Search</h2>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form className="d-flex mt-4 animate__animated animate__fadeInLeft" onSubmit={handleSubmit}>
            <input
              className="form-control me-2 border-primary"
              type="text"
              placeholder="Search a Heroe"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={ onInputChange }
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div className="alert alert-info animate__animated animate__fadeInRight" style={{display: showSearch ? '' : 'none'}}>
              search a hero
          </div>
          <div className="alert alert-danger animate__animated animate__fadeInRight" style={{display: showError ? '' : 'none'}}>
              there's no result <b>{q}</b>
          </div>

          {
           heroes?.map(hero => (
            <HeroesCard key={hero.id} {...hero} />
           ))
          }
         

        </div>
      </div>
    </>
  );
};
