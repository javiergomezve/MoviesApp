import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {Cast} from '../interfaces/creditsInterface.tsx';

interface Props {
  actor: Cast;
}

const CastItem = ({actor}: Props) => {
  const posterUri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image
          source={{uri: posterUri}}
          style={{width: 50, height: 50, borderRadius: 10}}
        />
      )}

      <View style={styles.actorInfo}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{actor.name}</Text>
        <Text style={{fontSize: 16, opacity: 0.7}}>{actor.character}</Text>
      </View>
    </View>
  );
};

export default CastItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.84,
    elevation: 5,
    paddingRight: 10,
  },
  actorInfo: {
    marginLeft: 10,
  },
});
