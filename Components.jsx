import { useFonts } from 'expo-font';

// Import your custom font file
import MyCustomFont from "./assets/fonts/Poppins-Regular.ttf";

// Inside your functional component
const [fontsLoaded] = useFonts({
  customFont: MyCustomFont, // Register your custom font with a font family name
});

// Check if fonts are loaded before rendering text with custom font
if (!fontsLoaded) {
  return null; // Render nothing if fonts are not loaded
}

// Render text with custom font
return (
  <View>
    <Ionicons name="ios-checkmark-circle" size={32} color="green" />
    <Text style={{ fontFamily: 'customFont', fontSize: 20 }}>Custom Font Text</Text>
  </View>
);
