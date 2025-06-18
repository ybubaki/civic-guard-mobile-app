import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import "../global.css";
import { StatusBar } from "expo-status-bar";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="create-report"
          options={{
            presentation: "formSheet",
            animation: "slide_from_bottom",
            sheetInitialDetentIndex: 1,
            sheetAllowedDetents: [0.5, 1],
            sheetGrabberVisible: true,
            headerShown: false,
          }}
        />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen
          name="message-info"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="detail/[id]"
          options={{
            presentation: "formSheet",
            animation: "slide_from_bottom",
            sheetGrabberVisible: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="manage_account"
          options={{
            title: "Manage Account",
            headerShown: false,
            presentation: "formSheet",
            animation: "slide_from_bottom",
            sheetGrabberVisible: true,
            sheetInitialDetentIndex: 0,
            sheetAllowedDetents: [0.5, 1],
          }}
        />
        <Stack.Screen
          name="change_password"
          options={{
            title: "Change Password",
            headerShown: false,
            presentation: "formSheet",
            animation: "slide_from_bottom",
            sheetGrabberVisible: true,
            sheetInitialDetentIndex: 0,
            sheetAllowedDetents: [0.5, 1],
          }}
        />
        <Stack.Screen
          name="help"
          options={{
            title: "Help & Support",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="forgot-password"
          options={{
            title: "Forgot Password",
          }}
        />
      </Stack>
      <StatusBar style="dark" />
    </QueryClientProvider>
  );
}
