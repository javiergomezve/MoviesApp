import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

import {Movie} from '../interfaces/movieInterface.tsx';
import {useNavigation} from '@react-navigation/native';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

const MoviePoster = (props: Props) => {
  const {movie, height = 420, width = 300} = props;

  const posterUri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{height, width}}
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate('DetailScreen', movie);
      }}>
      <View style={styles.imageShadow}>
        <Image source={{uri: posterUri}} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

export default MoviePoster;

const styles = StyleSheet.create({
  imageShadow: {
    flex: 1,
    borderRadius: 18,
    marginVertical: 10,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
