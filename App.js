import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "./screens/SearchScreen";
import ResultsShowScreen from "./screens/ResultsShowScreen";


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
       
      <Stack.Navigator
        screenOptions={{
          headerTitle: "Restoran Uygulaması",
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20, // İstediğiniz büyüklükte bir değer kullanabilirsiniz
          },
        }}
      >
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen
          name="ResultsShow"
          component={ResultsShowScreen}
          options={{
            headerStyle: {
              backgroundColor: "transparent", // Başlık arkaplanını şeffaf yapar
            },
            headerTransparent: true, // Başlığı şeffaf yapar
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
