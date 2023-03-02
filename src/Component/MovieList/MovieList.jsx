import React, { useEffect, useState } from 'react';
import '../MovieList/movieList.css';
import { useParams } from 'react-router-dom';
import Card from '../Card/Card';
import axios from 'axios';

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);

  const { type } = useParams();

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          type ? type : 'popular'
        }?api_key=85a43aee3ae6e1b43024e1388378c389`
      )
      .then((data) => setMovieList(data.data.results));
  };

  useEffect(() => {
    getData();
  }, [type]);

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : 'POPULAR').toUpperCase()}</h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <Card movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
