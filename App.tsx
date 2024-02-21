import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Navigation from './src/navigations/Navigation.tsx';
import GradientProvider from './src/context/GradientContext.tsx';

// import FadeScreen from './src/screens/FadeScreen.tsx';

interface AppStateProps {
  children: JSX.Element | JSX.Element[];
}

const AppState = ({children}: AppStateProps) => {
  return <GradientProvider>{children}</GradientProvider>;
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
        {/*<FadeScreen />*/}
      </AppState>
    </NavigationContainer>
  );
};

export default App;
