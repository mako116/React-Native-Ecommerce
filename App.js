import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator} from "@react-navigation/native-stack"


 import React, { useCallback } from 'react';
import {useFonts} from 'expo-font'
import { StyleSheet} from 'react-native';
 import  * as splashScreen from "expo-splash-screen"
import BottomTabNavigation from "./BottomTabNavigation";
import { Cart } from "./screens";
 

const Stack = createNativeStackNavigator()
  export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    ExtraBold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    Light: require("./assets/fonts/Poppins-Light.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    Thin: require("./assets/fonts/Poppins-Thin.ttf"),
    Semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  })

  const onLayoutRootView = useCallback(async()=>{
    if(fontsLoaded){
      await splashScreen.hideAsync();
    }
  },[fontsLoaded]);

  if(!fontsLoaded){
    return null
  }
  return (
    <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen 
      name="Bottom Navigation" 
      component={BottomTabNavigation}
      options={{headerShown:false}}
      />

<Stack.Screen 
      name="Cart" 
      component={Cart}
      options={{headerShown:false}}
      />
     </Stack.Navigator>
    </NavigationContainer>
   );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: 'center',
  },
  textStyle:{
    fontWeight: "bold",
    fontSize:20,
   }
})