import {useEffect, useState} from 'react';

import movieDB from '../api/movieDB.tsx';
import {Movie, MovieDBResponse} from '../interfaces/movieInterface.tsx';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getNowPlayingMovies = async () => {
    const resp = await Promise.all([
      movieDB.get<MovieDBResponse>('/now_playing'),
      movieDB.get<MovieDBResponse>('/popular'),
      movieDB.get<MovieDBResponse>('/top_rated'),
      movieDB.get<MovieDBResponse>('/upcoming'),
    ]);

    setMoviesState({
      nowPlaying: resp[0].data.results,
      popular: resp[1].data.results,
      topRated: resp[2].data.results,
      upcoming: resp[3].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return {
    isLoading,
    ...moviesState,
  };
};

export default useMovies;
