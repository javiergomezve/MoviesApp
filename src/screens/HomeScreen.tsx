import React, {useContext, useEffect} from 'react';
import {ActivityIndicator, Dimensions, ScrollView, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import useMovies from '../hooks/useMovies.tsx';
import MoviePoster from '../components/MoviePoster.tsx';
import HorizontalSlider from '../components/HorizontalSlider.tsx';
import GradientBackground from '../components/GradientBackground.tsx';
import getImageColor from '../helpers/getImageColor.tsx';
import {GradientContext} from '../context/GradientContext.tsx';

const {width: windowsWidth} = Dimensions.get('window');

interface Props extends StackScreenProps<any, any> {}

const HomeScreen = ({}: Props) => {
  const {top} = useSafeAreaInsets();

  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();

  const {setMainColors} = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    const uri = `https://image.tmdb.org/t/p/w500${nowPlaying[index].poster_path}`;
    const [primary, secondary] = await getImageColor(uri);

    if (primary && secondary) {
      setMainColors({primary, secondary});
    }
  };

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlaying]);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <GradientBackground>
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
            onSnapToItem={index => getPosterColors(index)}
          />

          <HorizontalSlider movies={popular} title="Popular" />

          <HorizontalSlider movies={topRated} title="Top Rated" />

          <HorizontalSlider movies={upcoming} title="Upcoming" />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

export default HomeScreen;
