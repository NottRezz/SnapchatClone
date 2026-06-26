import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Mock friends data for the stories row
const friends = [
  { id: "1", name: "Alex", username: "alex.doe", initial: "A", color: "#E8A838" },
  { id: "2", name: "Kyle", username: "kyle_k", initial: "K", color: "#9B59B6" },
  { id: "3", name: "Ashley", username: "ash.123", initial: "A", color: "#16A085" },
  { id: "4", name: "Jamie", username: "jamie_j", initial: "J", color: "#27AE60" },
  { id: "5", name: "Vic", username: "vic_v", initial: "V", color: "#E74C3C" },
];

const discover = [
  { id: "1", title: "Daily Beats", sub: "Music ❤️", color: "#2C3E50" },
  { id: "2", title: "TechTalk", sub: "Sponsored", color: "#1A6B3C" },
  { id: "3", title: "Summer Tour\n2025", sub: "Live Events", color: "#4A1860" },
  { id: "4", title: "Meme Hub", sub: "Entertainment", color: "#8B6914" },
];

// Renders a single story circle with avatar, add button, name and username
function StoryCircle({ friend }: { friend: (typeof friends)[0] }) {
  return (
    <View style={styles.storyItem}>
      <View style={styles.storyRing}>
        <View style={[styles.storyAvatar, { backgroundColor: friend.color }]}>
          <Text style={styles.storyInitial}>{friend.initial}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.addBtn}>
        <Ionicons name="person-add-outline" size={13} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.storyName} numberOfLines={1}>
        {friend.name}
      </Text>
      <Text style={styles.storyUsername} numberOfLines={1}>
        {friend.username}
      </Text>
    </View>
  );
}

export default function StoriesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <View style={styles.headerBitmoji}>
          <Text style={styles.headerBitmojiText}>R</Text>
        </View>
        <TouchableOpacity style={styles.headerIconCircle}>
          <Ionicons name="search-outline" size={20} color="#555" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Stories</Text>
        <TouchableOpacity style={styles.headerIconCircle}>
          <Ionicons name="person-add-outline" size={20} color="#555" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerIconCircle}>
          <Ionicons name="ellipsis-horizontal" size={20} color="#555" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Friends section */}
        <TouchableOpacity style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Friends</Text>
          <Ionicons name="chevron-forward" size={18} color="#555" />
        </TouchableOpacity>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.storiesRow}
          style={styles.storiesScroll}
        >
          {friends.map((f) => (
            <StoryCircle key={f.id} friend={f} />
          ))}
        </ScrollView>

        {/* Discover section */}
        <Text style={[styles.sectionTitle, { paddingHorizontal: 16, marginTop: 16, marginBottom: 12 }]}>
          Discover
        </Text>

        <View style={styles.grid}>
          {discover.map((item) => (
            <TouchableOpacity key={item.id} style={styles.gridCard} activeOpacity={0.9}>
              <View style={[styles.cardBg, { backgroundColor: item.color }]}>
                <View style={styles.cardOverlay}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardSub}>{item.sub}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 6,
  },
  headerBitmoji: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#A8C0DE",
    alignItems: "center",
    justifyContent: "center",
  },
  headerBitmojiText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  headerIconCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#000",
  },

  storiesScroll: {
    paddingLeft: 16,
  },
  storiesRow: {
    flexDirection: "row",
    paddingRight: 16,
    gap: 6,
    paddingBottom: 8,
  },
  storyItem: {
    alignItems: "center",
    width: 88,
  },
  storyRing: {
    width: 84,
    height: 84,
    borderRadius: 42,
    borderWidth: 3,
    borderColor: "#8B2FC9",
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  storyAvatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  storyInitial: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
  },
  addBtn: {
    backgroundColor: "#3B82F6",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 5,
    marginTop: 6,
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  storyName: {
    fontSize: 12,
    fontWeight: "700",
    color: "#000",
    marginTop: 5,
    textAlign: "center",
  },
  storyUsername: {
    fontSize: 11,
    color: "#888",
    textAlign: "center",
    marginTop: 1,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 10,
    gap: 8,
    paddingBottom: 20,
  },
  gridCard: {
    width: "48%",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  cardBg: {
    height: 200,
    justifyContent: "flex-end",
  },
  cardOverlay: {
    padding: 12,
    backgroundColor: "rgba(0,0,0,0.25)",
  },
  cardTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 18,
  },
  cardSub: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 11,
    marginTop: 3,
  },
});
