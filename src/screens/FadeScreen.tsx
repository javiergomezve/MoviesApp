import {Animated, Button, View} from 'react-native';
import useFade from '../hooks/useFade.tsx';

const FadeScreen = () => {
  const {opacity, fadeIn, fadeOut} = useFade();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          backgroundColor: '#084F6A',
          width: 150,
          height: 150,
          borderColor: 'white',
          borderWidth: 10,
          opacity: opacity,
        }}
      />

      <Button title="Fade in" onPress={fadeIn} />

      <Button title="Fade out" onPress={fadeOut} />
    </View>
  );
};

export default FadeScreen;
