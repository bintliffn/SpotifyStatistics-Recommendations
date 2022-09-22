import { StatusBar } from "react-native";
import { DefaultTheme } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserProvider } from "./src/components/contexts/UserProvider";

// Screens
import LoginScreen from "./src/screens/login";
import NavBarRouter from "./src/screens/NavBarRouter";

const Stack = createNativeStackNavigator();
StatusBar.setBarStyle("light-content", true);

const MyTheme = {
  ...DefaultTheme,
  colors: {
    background: "#191414",
  },
};

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="NavBarRouter" component={NavBarRouter} />
          {/*<Stack.Screen name="User" component={User} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
