import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import useMovies from '../hooks/useMovies.tsx';
import MoviePoster from '../components/MoviePoster.tsx';

interface Props extends StackScreenProps<any, any> {}

const HomeScreen = (props: Props) => {
  const {navigation} = props;

  const {top} = useSafeAreaInsets();

  const {nowPlaying, isLoading} = useMovies();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <View style={{marginTop: top + 20}}>
      <MoviePoster movie={nowPlaying[1]} />
    </View>
  );
};

export default HomeScreen;
