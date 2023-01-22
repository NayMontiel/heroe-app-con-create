import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components";


import { DcPages, Error404, Heroes, Home, MarvelPages, Search } from "../pages";


export const HeroesRotes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="marvel" element={<MarvelPages />} />
          <Route path="dc" element={<DcPages />} />

          <Route path="search" element={<Search />} />
          <Route path="heroe/:id" element={<Heroes />} />

          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </>
  );
};
