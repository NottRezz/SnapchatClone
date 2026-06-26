import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";

// Tab bar that shows at the bottom of every main screen
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#777",
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="map"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="map-outline" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "chatbubble" : "chatbubble-outline"}
              size={26}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "camera" : "camera-outline"}
              size={26}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="people"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "people" : "people-outline"}
              size={26}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          tabBarIcon: ({ focused, color }) => (
            // Wrap in a View so we can position the red dot badge on top
            <View>
              <Ionicons name={focused ? "play" : "play-outline"} size={26} color={color} />
              <View style={styles.redDot} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: 1,
    borderTopColor: "#EFEFEF",
    backgroundColor: "#fff",
    height: 60,
    paddingBottom: 8,
    paddingTop: 6,
  },
  redDot: {
    position: "absolute",
    top: 0,
    right: -2,
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: "#E74C3C",
    borderWidth: 1,
    borderColor: "#fff",
  },
});
