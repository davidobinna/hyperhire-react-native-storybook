import React from 'react';
import { View, Text } from 'react-native';
import StorybookUIRoot from '../.storybook'; 
const HomeScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Home Screen!</Text>
    </View>
  );
};

const App = () => {
  if (__DEV__) {
    return <StorybookUIRoot />;
  }

  return <HomeScreen />;
};

export default App;
