import React from 'react';
import {FlatList, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';

import {MovieFull} from '../interfaces/movieInterface.tsx';
import {Cast} from '../interfaces/creditsInterface.tsx';
import CastItem from './CastItem.tsx';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

const MovieDetails = (props: Props) => {
  const {movieFull, cast} = props;

  return (
    <>
      <View style={{marginHorizontal: 20, marginBottom: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" size={16} color="grey" />

          <Text>{movieFull.vote_average}</Text>

          <Text style={{marginLeft: 5}}>
            - {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>

        <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>
          Historia
        </Text>

        <Text style={{fontSize: 16}}>{movieFull.overview}</Text>

        <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>
          Presupuesto
        </Text>

        <Text style={{fontSize: 16}}>
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>

        <View style={{marginTop: 10, marginBottom: 100}}>
          <Text
            style={{
              fontSize: 23,
              marginTop: 10,
              fontWeight: 'bold',
            }}>
            Actores
          </Text>

          <FlatList
            data={cast}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View style={{marginRight: 20, marginLeft: 7}}>
                <CastItem actor={item} />
              </View>
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{paddingVertical: 10}}
          />
        </View>
      </View>
    </>
  );
};

export default MovieDetails;
