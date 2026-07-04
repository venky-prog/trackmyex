import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

function TabBarIcon(props: Readonly<{
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}>) {
  return <FontAwesome size={18} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="scanner"
        options={{
          title: 'Scanner',
          tabBarIcon: ({ color }) => <TabBarIcon name="camera" color={color.toString()} />,
        }}
      />
      <Tabs.Screen
        name="tab2"
        options={{
          title: 'Tab 2',
          tabBarIcon: ({ color }) => <TabBarIcon name="star-o" color={color.toString()} />,
        }}
      />
    </Tabs>
  );
}
