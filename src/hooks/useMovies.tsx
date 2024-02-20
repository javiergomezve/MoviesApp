import {useEffect, useState} from 'react';

import movieDB from '../api/movieDB.tsx';
import {Movie, MovieDBNowPlaying} from '../interfaces/movieInterface.tsx';

const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);

  const getNowPlayingMovies = async () => {
    const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    setTimeout(() => {
      setNowPlaying(resp.data.results);
      setIsLoading(false);
    }, 3000);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return {
    isLoading,
    nowPlaying,
  };
};

export default useMovies;
