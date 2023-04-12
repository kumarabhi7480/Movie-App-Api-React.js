import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeContainer from '../Container/Home';
import AboutContainer from "../Container/About";
import ContactContainer from "../Container/Contact";

import MoviesContainer from "../Container/Movies";
import SearchContainer from "../Container/Search";
import DetailsContainer from '../Container/Details';
import TvSeriesContainer from "../Container/TVSeries";
import HeaderComponents from '../Components/Header';
import FooterComponents from '../Components/Footer';
const RouterComponent = () => {
    return (
        <>
        <BrowserRouter>
        <HeaderComponents />
            <Routes>
             <Route path='/'  element={<HomeContainer />}/>
            <Route path="/about" element={<AboutContainer />} />
          <Route path="/movies" element={<MoviesContainer />} />
          <Route path="/series" element={<TvSeriesContainer />} />
          <Route path="/search" element={<SearchContainer />} />
          <Route path='/deails/:movieid/:/movietype' element={<DetailsContainer />} />
          <Route path="/contact" element={<ContactContainer />} />
       
            </Routes>
           <FooterComponents />
        </BrowserRouter>
            
        </>
    );
};

export default RouterComponent;