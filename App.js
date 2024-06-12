import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Color from './App/Shared/Color';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreenNavigation from './App/Navigation/HomeScreenNavigation';

export default function App() {
  return (
    <NavigationContainer >
      <View style={styles.container}>
      <HomeScreenNavigation />
      </View> 
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    marginTop:24,
    backgroundColor:Color.black,
  },
});
