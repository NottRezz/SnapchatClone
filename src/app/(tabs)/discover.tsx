import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Mock data for the currently playing video post
const post = {
  username: "USER123",
  sound: "user123 · Original Sound",
  comments: "492",
  reposts: "25K",
  shares: "16K",
  avatarColor: "#2980B9",
  initial: "U",
};

export default function SpotlightScreen() {
  return (
    <View style={styles.container}>
      {/* Black background simulates a video playing fullscreen */}
      <View style={styles.videoArea} />

      <SafeAreaView edges={["top"]} style={styles.topBar}>
        <View style={styles.topLeft}>
          <View style={styles.bitmoji}>
            <Text style={styles.bitmojiText}>R</Text>
          </View>
          <TouchableOpacity style={styles.topCircle}>
            <Ionicons name="search-outline" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.toggleRow}>
          <TouchableOpacity style={styles.toggleActive}>
            <Text style={styles.toggleActiveText}>For You</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.toggleInactive}>Following</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.topRight}>
          <TouchableOpacity>
            <Ionicons name="person-add-outline" size={22} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="add-outline" size={26} color="#fff" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {/* Action buttons on the right side */}
      <View style={styles.rightActions}>
        <View style={styles.actionItem}>
          <View style={[styles.creatorAvatar, { backgroundColor: post.avatarColor }]}>
            <Text style={styles.creatorInitial}>{post.initial}</Text>
          </View>
          <View style={styles.followBtn}>
            <Ionicons name="add" size={14} color="#fff" />
          </View>
        </View>

        <ActionBtn icon="heart-outline" count={null} />
        <ActionBtn icon="chatbubble-outline" count={post.comments} hasDot />
        <ActionBtn icon="repeat-outline" count={post.reposts} />
        <ActionBtn icon="arrow-redo-outline" count={post.shares} />
        <ActionBtn icon="ellipsis-horizontal" count={null} />
      </View>

      <SafeAreaView edges={["bottom"]} style={styles.bottomInfo}>
        <Text style={styles.creatorName}>@{post.username}</Text>
        <View style={styles.soundRow}>
          <Ionicons name="musical-notes-outline" size={14} color="rgba(255,255,255,0.9)" />
          <Text style={styles.soundText}> {post.sound}</Text>
        </View>
      </SafeAreaView>

      {/* Gradient fade at the bottom so text is readable over the video */}
      <View style={styles.bottomGradient} />
    </View>
  );
}

// Reusable button for the right-side action bar (like, comment, share, etc.)
function ActionBtn({ icon, count, hasDot }: { icon: string; count: string | null; hasDot?: boolean }) {
  return (
    <View style={styles.actionItem}>
      <View>
        <Ionicons name={icon as any} size={32} color="#fff" />
        {hasDot && <View style={styles.actionDot} />}
      </View>
      {count && <Text style={styles.actionCount}>{count}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  videoArea: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#000",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 6,
  },
  topLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  topCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(80,80,80,0.7)",
    alignItems: "center",
    justifyContent: "center",
  },
  bitmoji: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#A8C0DE",
    alignItems: "center",
    justifyContent: "center",
  },
  bitmojiText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  toggleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  toggleActive: {
    backgroundColor: "rgba(80,80,80,0.8)",
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 7,
  },
  toggleActiveText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
  },
  toggleInactive: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 15,
    fontWeight: "500",
  },
  topRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  rightActions: {
    position: "absolute",
    right: 14,
    bottom: 120,
    gap: 20,
    alignItems: "center",
  },
  actionItem: {
    alignItems: "center",
    gap: 4,
  },
  creatorAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#FFFC00",
  },
  creatorInitial: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  followBtn: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#0EADFF",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -10,
  },
  actionDot: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#E74C3C",
    borderWidth: 1.5,
    borderColor: "#000",
  },
  actionCount: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
  },
  bottomInfo: {
    position: "absolute",
    bottom: 0,
    left: 14,
    right: 70,
    paddingBottom: 16,
  },
  creatorName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  soundRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  soundText: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 13,
  },
  bottomGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
});
