import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  
  const router = useRouter()
  // Uncomment to simulate missing back button issue.
  // Simulate Push Notification Response
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('flights/123')
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer>
          <Drawer.Screen
            name="index"
            options={{
              title: 'Home',
            }}
          />
          <Drawer.Screen
            name="flights"
            options={{
              title: 'Flights',
              headerShown: false,
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
  );
}
