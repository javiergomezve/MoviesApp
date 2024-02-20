import React from "react";
import { Image, StyleSheet, View } from "react-native";

import { Movie } from "../interfaces/movieInterface.tsx";

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

const MoviePoster = (props: Props) => {
  const { movie, height = 420, width = 300 } = props;

  const posterUri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View style={{height, width}}>
      <View style={styles.imageShadow}>
        <Image source={{ uri: posterUri }} style={styles.image} />
      </View>
    </View>
  );
};

export default MoviePoster;

const styles = StyleSheet.create({
  imageShadow: {
    flex: 1,
    borderRadius: 18,
    marginVertical: 10,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.84,
    elevation: 10
  },
  image: {
    flex: 1,
    borderRadius: 18
  }
});
