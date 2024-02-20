import React from "react";
import { ActivityIndicator, Dimensions, FlatList, ScrollView, Text, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";


import useMovies from "../hooks/useMovies.tsx";
import MoviePoster from "../components/MoviePoster.tsx";

const { width: windowsWidth } = Dimensions.get("window");

interface Props extends StackScreenProps<any, any> {
}

const HomeScreen = (props: Props) => {
  const { navigation } = props;

  const { top } = useSafeAreaInsets();

  const { nowPlaying, isLoading } = useMovies();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20 }}>
        <Carousel
          layout={"default"}
          data={nowPlaying}
          renderItem={({ item }) =>
            <MoviePoster movie={item} width={windowsWidth * 0.7} />
          }
          sliderWidth={windowsWidth}
          itemWidth={300}
        />

        <View style={{ backgroundColor: "red", height: 260 }}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>In cine</Text>
          <FlatList
            data={nowPlaying}
            renderItem={({ item }) =>
              <MoviePoster movie={item} height={200} width={140} />
            }
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
