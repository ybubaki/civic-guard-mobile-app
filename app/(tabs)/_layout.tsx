import { Feather } from "@expo/vector-icons";
import { Stack, Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
            tabBarActiveTintColor: "#08A045",
            tabBarInactiveTintColor: "#9ca3af",
            tabBarIcon: ({ color }) => (
              <Feather size={28} name="home" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: "Search",
            tabBarActiveTintColor: "#08A045",
            tabBarInactiveTintColor: "#9ca3af",
            tabBarIcon: ({ color }) => (
              <Feather size={28} name="search" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            title: "History",
            tabBarActiveTintColor: "#08A045",
            tabBarInactiveTintColor: "#9ca3af",
            tabBarIcon: ({ color }) => (
              <Feather size={28} name="clock" color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
