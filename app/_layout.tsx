import { useColorScheme } from '@/hooks/useColorScheme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import 'react-native-reanimated';
import RootStack from './(tabs)/RootStack';
import { auth } from './config';

const Stack = createNativeStackNavigator();


export default function RootLayout() {
  
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    'Lexend-300': require('../assets/fonts/Lexend-Thin.ttf'),
    'Lexend-200': require('../assets/fonts/Lexend-ExtraLight.ttf'),
    'Lexend-100': require('../assets/fonts/Lexend-Light.ttf'),
    'Lexend-500': require('../assets/fonts/Lexend-Regular.ttf'),
    'Lexend-400': require('../assets/fonts/Lexend-Medium.ttf'),
    'Lexend-600': require('../assets/fonts/Lexend-SemiBold.ttf'),
    'Lexend-700': require('../assets/fonts/Lexend-Bold.ttf'),
    'Lexend-800': require('../assets/fonts/Lexend-ExtraBold.ttf'),
    'Lexend-900': require('../assets/fonts/Lexend-Black.ttf'),
  });
  

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  console.log("auth" , auth)

  return (
     <>
      {/* <Stack.Navigator initialRouteName="Home"> */}
        {/* <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="sum" component={CreateSummrey} /> */}
          <RootStack />
      {/* </Stack.Navigator> */}
     </>
  );
}
