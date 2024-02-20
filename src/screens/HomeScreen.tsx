import React from 'react';
import {ActivityIndicator, Button, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import useMovies from '../hooks/useMovies.tsx';

interface Props extends StackScreenProps<any, any> {}

const HomeScreen = (props: Props) => {
  const {navigation} = props;

  const {nowPlaying, isLoading} = useMovies();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <View>
      <Text>Home screen</Text>

      <Button
        title="go to detail"
        onPress={() => {
          navigation.navigate('DetailScreen');
        }}
      />
    </View>
  );
};

export default HomeScreen;
