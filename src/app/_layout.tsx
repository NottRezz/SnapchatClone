import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Root layout - wraps the whole app and sets up the main navigator
export default function RootLayout() {
  return (
    <SafeAreaProvider>
      {/* Hide the default header on every screen since we build our own */}
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  );
}
