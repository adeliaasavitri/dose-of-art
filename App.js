import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import Home from "./screens/Home";
import Details from "./screens/Details";


const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background:"transparent"
  }
}
 
export default function App() {
  const [loaded] = useFonts({
    WorkSansBold: require("./assets/fonts/static/WorkSans-Bold.ttf"),
    WorkSansSemiBold: require("./assets/fonts/static/WorkSans-SemiBold.ttf"),
    WorkSansMedium: require("./assets/fonts/static/WorkSans-Medium.ttf"),
    WorkSansRegular: require("./assets/fonts/static/WorkSans-Regular.ttf"),
    WorkSansLight: require("./assets/fonts/static/WorkSans-Light.ttf")
  });

  if(!loaded){
    return null;
  } else { return( 
      <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Details" component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
}

