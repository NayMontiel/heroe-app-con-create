import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroeById } from "../helpers";

export const Heroes = () => {
  const { id } = useParams();
  const navegate = useNavigate();
  //se usa el usememo para memorizar la info que viene de la funcion y asi no hacer tan pesado nuestro funcional componets
  const hero = useMemo( () => getHeroeById(id), [id]);

  const retornar = () => {
      navegate(-1)
  }

  if (!hero) {
    return <Navigate to="/" />;
  }

  return (
    <div className="row mt-5 animate__animated animate__flipInY">
      <div className="col-4 t">
        <img
          src={`/heroes/${id}.jpg `}
          alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8 ">
        <h3 className="text-dark">{hero.superhero}</h3>
        <ul className="list-group list-grourp-flush ">
          <li className="list-group-item bg-dark text-white">
            <b>Alter Ego:</b> {hero.alter_ego}
          </li>
          <li className="list-group-item bg-dark text-white">
            <b>Publisher:</b> {hero.publisher}
          </li>
          <li className="list-group-item bg-dark text-white">
            <b>First Appearance:</b> {hero.first_appearance}
          </li>
          <div className="list-group-item bg-dark text-white">
            <h5 className="mt-3 ">Characters:</h5>
            <p>{hero.characters}</p>
          </div>
        </ul>

        <button 
          className="btn btn-outline-dark fw-bold mt-4"
          onClick ={retornar}
        >
          Anterior
        </button>
      </div>
    </div>
  );
};
