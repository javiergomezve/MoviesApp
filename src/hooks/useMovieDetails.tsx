import {useEffect, useState} from 'react';

import movieDB from '../api/movieDB.tsx';
import {MovieFull} from '../interfaces/movieInterface.tsx';
import {Cast, CreditsResponse} from '../interfaces/creditsInterface.tsx';

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMoviesDetails = async () => {
    const [movieDetailsResp, castResp] = await Promise.all([
      movieDB.get<MovieFull>(`/${movieId}`),
      movieDB.get<CreditsResponse>(`/${movieId}/credits`),
    ]);

    setState({
      isLoading: false,
      movieFull: movieDetailsResp.data,
      cast: castResp.data.cast,
    });
  };

  useEffect(() => {
    getMoviesDetails();
  }, []);

  return {...state};
};

export default useMovieDetails;
