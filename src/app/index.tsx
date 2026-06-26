import { Redirect } from "expo-router";

// Send users straight to the chat tab when the app opens
export default function Index() {
  return <Redirect href="/(tabs)/chat" />;
}
