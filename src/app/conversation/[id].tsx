import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const YELLOW = "#FFFC00";

// Mock messages for the conversation
const messages = [
  { id: "1", text: "Hey! What's up? 👋", sent: false, time: "10:21 AM" },
  { id: "2", text: "Not much, just chilling 😎", sent: true, time: "10:22 AM" },
  { id: "3", text: "Did you see the game last night?", sent: false, time: "10:23 AM" },
  { id: "4", text: "Yeah it was insane!! That last minute goal 🔥", sent: true, time: "10:24 AM" },
  { id: "5", text: "I know right!! Are you coming out this weekend?", sent: false, time: "10:25 AM" },
  { id: "6", text: "For sure, what time?", sent: true, time: "10:26 AM" },
  { id: "7", text: "Probably around 8pm, I'll send the address later", sent: false, time: "10:27 AM" },
  { id: "8", text: "Sounds good 👍", sent: true, time: "10:28 AM" },
];

export default function ConversationScreen() {
  const router = useRouter();
  // Pull the contact info that was passed in from the chat screen
  const { name, avatarColor, initial } = useLocalSearchParams<{
    id: string;
    name: string;
    avatarColor: string;
    initial: string;
  }>();

  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={26} color="#000" />
        </TouchableOpacity>
        <View style={[styles.headerAvatar, { backgroundColor: avatarColor ?? "#888" }]}>
          <Text style={styles.headerAvatarText}>{initial ?? "?"}</Text>
        </View>
        <View style={styles.headerInfo}>
          <Text style={styles.headerName}>{name ?? "Unknown"}</Text>
          <Text style={styles.headerStatus}>Active now</Text>
        </View>
        <TouchableOpacity style={styles.headerAction}>
          <Ionicons name="videocam-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerAction}>
          <Ionicons name="call-outline" size={22} color="#000" />
        </TouchableOpacity>
      </View>

      {/* messages */}
      <ScrollView
        style={styles.messageList}
        contentContainerStyle={styles.messageContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.dateSeparator}>Today</Text>
        {messages.map((msg) => (
          <View
            key={msg.id}
            style={[styles.messageRow, msg.sent ? styles.messageRowSent : styles.messageRowReceived]}
          >
            {!msg.sent && (
              <View style={[styles.msgAvatar, { backgroundColor: avatarColor ?? "#888" }]}>
                <Text style={styles.msgAvatarText}>{initial ?? "?"}</Text>
              </View>
            )}
            <View style={msg.sent ? styles.sentBubble : styles.receivedBubble}>
              <Text style={msg.sent ? styles.sentText : styles.receivedText}>
                {msg.text}
              </Text>
            </View>
          </View>
        ))}
        <Text style={styles.readReceipt}>Read · 10:28 AM</Text>
      </ScrollView>

      {/* input bar */}
      <View style={styles.inputBar}>
        <TouchableOpacity style={styles.inputAction}>
          <Ionicons name="camera-outline" size={26} color="#555" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.inputField} activeOpacity={0.8}>
          <Text style={styles.inputPlaceholder}>Send a chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inputAction}>
          <Ionicons name="mic-outline" size={26} color="#555" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.inputAction}>
          <Ionicons name="happy-outline" size={26} color="#555" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.inputAction}>
          <Ionicons name="image-outline" size={26} color="#555" />
        </TouchableOpacity>
      </View>
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
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
    gap: 8,
  },
  backBtn: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
  },
  headerAvatarText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  headerInfo: {
    flex: 1,
  },
  headerName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },
  headerStatus: {
    fontSize: 12,
    color: "#aaa",
  },
  headerAction: {
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
  },
  messageList: {
    flex: 1,
  },
  messageContent: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 8,
  },
  dateSeparator: {
    textAlign: "center",
    fontSize: 12,
    color: "#bbb",
    fontWeight: "600",
    marginBottom: 8,
  },
  messageRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
  },
  messageRowSent: {
    justifyContent: "flex-end",
  },
  messageRowReceived: {
    justifyContent: "flex-start",
  },
  msgAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 2,
  },
  msgAvatarText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "bold",
  },
  sentBubble: {
    backgroundColor: YELLOW,
    borderRadius: 20,
    borderBottomRightRadius: 4,
    paddingHorizontal: 14,
    paddingVertical: 10,
    maxWidth: "72%",
  },
  receivedBubble: {
    backgroundColor: "#F0F0F0",
    borderRadius: 20,
    borderBottomLeftRadius: 4,
    paddingHorizontal: 14,
    paddingVertical: 10,
    maxWidth: "72%",
  },
  sentText: {
    fontSize: 15,
    color: "#000",
  },
  receivedText: {
    fontSize: 15,
    color: "#000",
  },
  readReceipt: {
    textAlign: "right",
    fontSize: 11,
    color: "#bbb",
    marginTop: 2,
  },
  inputBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
    gap: 4,
  },
  inputAction: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  inputField: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    borderRadius: 22,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  inputPlaceholder: {
    fontSize: 15,
    color: "#aaa",
  },
});
