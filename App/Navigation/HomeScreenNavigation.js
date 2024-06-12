import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../Screens/HomeScreen";
import PlayVideoScreen from "../Screens/PlayVideoScreen";

function HomeScreenNavigation() {
    const Stack = createNativeStackNavigator();
  return (
   <Stack.Navigator>
    <Stack.Screen name='home' component={HomeScreen}/>
    <Stack.Screen name='playVideo' component={PlayVideoScreen}/>
   </Stack.Navigator>
  )
}

export default HomeScreenNavigation