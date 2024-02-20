import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {Movie} from '../interfaces/movieInterface.tsx';

interface Props {
  movie: Movie;
}

const MoviePoster = ({movie}: Props) => {
  const posterUri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View style={styles.imageContainer}>
      <View style={styles.imageShadow}>
        <Image source={{uri: posterUri}} style={styles.image} />
      </View>
    </View>
  );
};

export default MoviePoster;

const styles = StyleSheet.create({
  imageContainer: {
    width: 200,
    height: 400,
  },
  imageShadow: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.84,
    elevation: 10,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
