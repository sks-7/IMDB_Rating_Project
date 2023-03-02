import React, { useEffect, useState } from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import "../Home/home.css";

import axios from 'axios';
import { Link } from "react-router-dom";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const getData = () => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=85a43aee3ae6e1b43024e1388378c389'
      )
      .then((res) => {
        setPopularMovies(res.data.results);
        // console.log(res.data.results);
      })
      .catch((e) => console.log('err', e));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            <Link
              style={{ textDecoration: 'none', color: 'white' }}
              to={`/movie/${movie.id}`}
            >
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">
                  {movie ? movie.original_title : ''}
                </div>
                <div className="posterImage__runtime">
                  {movie ? movie.release_date : ''}
                  <span className="posterImage__rating">
                    {movie ? movie.vote_average : ''}
                    <i className="fas fa-star" />{' '}
                  </span>
                </div>
                <div className="posterImage__description">
                  {movie ? movie.overview : ''}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
        {/* <MovieList /> */}
      </div>
    </>
  );
};

export default Home;
