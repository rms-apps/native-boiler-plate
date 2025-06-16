import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Header } from '@/components/common/Header';
import { useAppColors } from '@/lib/hooks/useAppColors';
import { BannerAdvertisement } from '@/components/common/Advertisement/BannerAd';

export default function TabLayout() {
  const { BACKGROUND_SECONDARY } = useAppColors();
  return (
    <>
      <Header title="App" />

      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarLabelStyle: {
            fontSize: 12,
            marginTop: 2,
            marginBottom: 2,
          },
          tabBarItemStyle: {
            marginTop: 12,
            alignItems: 'center',
            justifyContent: 'center',
          },
          tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            left: 30,
            right: 16,
            height: 90,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            backgroundColor: BACKGROUND_SECONDARY,
            borderTopWidth: 0,
            elevation: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 8,
          },
          tabBarActiveTintColor: '#3B82F6',
          tabBarInactiveTintColor: '#64748B',
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={22} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="settings"
          options={{
            title: 'Settings',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" size={22} color={color} />
            ),
          }}
        />
      </Tabs>

      {/* <BannerAdvertisement adId="" /> */}
    </>
  );
}
