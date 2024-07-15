import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { BottomFabBar } from 'rn-wave-bottom-bar';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{

        tabBarActiveTintColor: '#fff',
        tabBarActiveBackgroundColor: '#fff',
        tabBarInactiveBackgroundColor: 'red',
      }}
      tabBar={(props) => (
        <BottomFabBar
          mode={'default'}


          bottomBarContainerStyle={{
           
            shadowColor: '#E5E5E5', // Couleur de l'ombre
            shadowOffset: { width: 0, height: 0 }, // Décalage de l'ombre
            shadowOpacity: 1, // Opacité de l'ombre
            shadowRadius: 15, // Rayon de l'ombre
            elevation: 5,
            borderRaduis:10,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
          }}
          {...props}
        />
      )}
    >

      <Tabs.Screen
        options={{
          tabBarIcon: () => <TabBarIcon name='home' color='#E76D40' />,
        }}
        name="index"

      />
      <Tabs.Screen
        name="two"
        options={{ tabBarIcon: () => <TabBarIcon name='caret-square-o-down' color='#E76D40' />, }}

      />
      <Tabs.Screen
        name="add"
        options={{ tabBarIcon: () => <TabBarIcon name='plus' color='#E76D40' />, }}

      />
      <Tabs.Screen
        name="favorite"
        options={{ tabBarIcon: () => <TabBarIcon name='heartbeat' color='#E76D40' />, }}

      />
      
    </Tabs>
  );
}
