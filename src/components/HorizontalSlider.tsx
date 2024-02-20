import {Movie} from '../interfaces/movieInterface.tsx';
import {FlatList, Text, View} from 'react-native';
import MoviePoster from './MoviePoster.tsx';
import React from 'react';

interface Props {
  title?: string;
  movies: Movie[];
}

const HorizontalSlider = ({title, movies}: Props) => {
  return (
    <View
      style={{
        paddingVertical: 10,
        paddingHorizontal: 15,
      }}>
      {title && <Text style={{fontSize: 30, fontWeight: 'bold'}}>{title}</Text>}

      <FlatList
        data={movies}
        renderItem={({item}) => (
          <MoviePoster movie={item} height={200} width={140} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalSlider;
