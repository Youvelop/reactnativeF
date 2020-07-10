// import { registerRootComponent } from 'expo';
import 'react-native-gesture-handler';
import React from 'react';
import Main from './components/MainComponent';
import { NavigationContainer } from '@react-navigation/native';

export default class App extends React.Component {
  render() {
    <NavigationContainer>
      return <Main />;
    </NavigationContainer>;
  }
}
// registerRootComponent(App);
