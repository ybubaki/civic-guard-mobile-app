import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import "../global.css";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
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
      </Stack>
    </QueryClientProvider>
  );
}
