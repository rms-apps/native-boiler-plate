import 'react-native-reanimated';
import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useSettingsStore } from '@/context/Settings/store';
import MobileAds, { MaxAdContentRating } from 'react-native-google-mobile-ads';

import '../global.css';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    NotoSansExtraBold: require('../assets/fonts/NotoSans-ExtraBold.ttf'),
    NotoSansBold: require('../assets/fonts/NotoSans-Bold.ttf'),
    NotoSansSemiBold: require('../assets/fonts/NotoSans-SemiBold.ttf'),
    NotoSansMedium: require('../assets/fonts/NotoSans-Medium.ttf'),
    NotoSansRegular: require('../assets/fonts/NotoSans-Regular.ttf'),
    NotoSansThin: require('../assets/fonts/NotoSans-Thin.ttf'),
    NotoSansLight: require('../assets/fonts/NotoSans-Light.ttf'),
    NotoSansCondensedSemiBold: require('../assets/fonts/NotoSans_Condensed-SemiBold.ttf'),
    NotoSansCondensedRegular: require('../assets/fonts/NotoSans_Condensed-Regular.ttf'),
  });

  const hasHydrated = useSettingsStore((state) => state.hasHydrated);

  // const initializeAdForAdMob = () => {
  //   MobileAds()
  //     .setRequestConfiguration({
  //       maxAdContentRating: MaxAdContentRating.PG,
  //       tagForChildDirectedTreatment: false,
  //       tagForUnderAgeOfConsent: false,
  //     })
  //     .then(() => {
  //       MobileAds().initialize();
  //     })
  //     .then(() => {
  //       console.log('Google Mobile AdMob SDK initialized');
  //     })
  //     .catch((error) => {
  //       console.error('Failed to initialize Google Mobile AdMob SDK', error);
  //     });
  // };

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      // initializeAdForAdMob();
    }
  }, [loaded]);

  if (!loaded || !hasHydrated) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
