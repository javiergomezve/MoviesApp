import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import useMovies from '../hooks/useMovies.tsx';
import MoviePoster from '../components/MoviePoster.tsx';
import HorizontalSlider from '../components/HorizontalSlider.tsx';

const {width: windowsWidth} = Dimensions.get('window');

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
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{marginTop: top + 20}}>
        <Carousel
          layout={'default'}
          data={nowPlaying}
          renderItem={({item}) => (
            <MoviePoster movie={item} width={windowsWidth * 0.7} />
          )}
          sliderWidth={windowsWidth}
          itemWidth={300}
          inactiveSlideOpacity={0.9}
        />

        <HorizontalSlider movies={nowPlaying} title="In cine" />

        <HorizontalSlider movies={nowPlaying} title="Hot" />

        <HorizontalSlider movies={nowPlaying} title="Rotten tomatos" />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
