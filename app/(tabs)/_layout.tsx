import { Feather } from "@expo/vector-icons";
import { Stack, Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false, title: "CivicGuard" }}
      />
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
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="charts"
          options={{
            title: "Analytics",
            tabBarActiveTintColor: "#08A045",
            tabBarInactiveTintColor: "#9ca3af",
            tabBarIcon: ({ color }) => (
              <Feather size={28} name="bar-chart" color={color} />
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
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarActiveTintColor: "#08A045",
            tabBarInactiveTintColor: "#9ca3af",
            tabBarIcon: ({ color }) => (
              <Feather size={28} name="settings" color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
