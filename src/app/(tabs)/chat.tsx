import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Alert,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const YELLOW = "#FFFC00";
const BLUE = "#5AC8FA";

// Mock chat data - each entry shows up as a row in the chat list
const chats = [
  {
    id: "1",
    name: "Amazon",
    isAd: true,
    adText: "Short on cash? Get Up To $750 Now.",
    status: "",
    time: "",
    avatarColor: "#5B8DEF",
    initial: "A",
    action: "link",
    indicator: "none",
  },
  {
    id: "2",
    name: "John Smith",
    status: "New Snap",
    time: "· 8h",
    avatarColor: "#E8A838",
    initial: "J",
    action: "camera",
    indicator: "red-filled",
  },
  {
    id: "3",
    name: "Study Group",
    status: "Chat from Ryan",
    time: "· 1w",
    avatarColor: "#9B59B6",
    initial: "S",
    action: "camera",
    indicator: "blue-chat-filled",
    muted: true,
  },
  {
    id: "4",
    name: "Jordan Smith",
    status: "Called",
    time: "· 1w",
    avatarColor: "#E8A838",
    initial: "J",
    action: "camera",
    indicator: "call",
  },
  {
    id: "5",
    name: "Emma",
    status: "Received",
    time: "· 2w",
    avatarColor: "#E74C3C",
    initial: "E",
    action: "camera",
    indicator: "blue-outline",
  },
  {
    id: "6",
    name: "Tyler Brown",
    status: "Double tap to reply",
    time: "",
    avatarColor: "#27AE60",
    initial: "T",
    action: "camera",
    indicator: "red-outline",
  },
  {
    id: "7",
    name: "Sophie Lee",
    status: "Received",
    time: "· 6w",
    avatarColor: "#16A085",
    initial: "S",
    action: "camera",
    indicator: "blue-outline",
  },
  {
    id: "8",
    name: "Music Club",
    status: "Called",
    time: "· 12w",
    avatarColor: "#95A5A6",
    initial: "M",
    action: "call",
    indicator: "call",
  },
  {
    id: "9",
    name: "Jake",
    status: "Called",
    time: "· 17w",
    avatarColor: "#2980B9",
    initial: "J",
    action: "camera",
    indicator: "call",
  },
  {
    id: "10",
    name: "Chris Davis",
    status: "Received",
    time: "· 17w",
    avatarColor: "#D35400",
    initial: "C",
    action: "camera",
    indicator: "blue-outline",
  },
];

// Renders a single row in the chat list - tapping it opens the conversation screen
function ChatRow({ chat }: { chat: (typeof chats)[0] }) {
  const router = useRouter();

  const handlePress = () => {
    if (!chat.isAd) {
      // Pass the contact info as params so the conversation screen can display them
      router.push({
        pathname: "/conversation/[id]",
        params: {
          id: chat.id,
          name: chat.name,
          avatarColor: chat.avatarColor,
          initial: chat.initial,
        },
      });
    }
  };

  return (
    <TouchableOpacity style={styles.chatRow} onPress={handlePress} activeOpacity={chat.isAd ? 1 : 0.6}>
      <View style={[styles.chatAvatar, { backgroundColor: chat.avatarColor }]}>
        <Text style={styles.chatAvatarText}>{chat.initial}</Text>
      </View>

      <View style={styles.chatInfo}>
        <View style={styles.chatNameRow}>
          <Text style={styles.chatName}>{chat.name}</Text>
          {chat.isAd && (
            <>
              <Ionicons name="star" size={13} color="#F5A623" style={{ marginLeft: 4 }} />
              <Text style={styles.adLabel}> · Ad</Text>
            </>
          )}
          {chat.muted && (
            <Ionicons name="notifications-off-outline" size={14} color="#aaa" style={{ marginLeft: 4 }} />
          )}
        </View>

        {chat.isAd ? (
          <View style={styles.subtitleRow}>
            <View style={[styles.squareIndicator, { backgroundColor: "#E74C3C" }]} />
            <Text style={styles.adSubtitle}>{chat.adText}</Text>
          </View>
        ) : (
          <View style={styles.subtitleRow}>
            {chat.indicator === "red-filled" && (
              <View style={[styles.squareIndicator, { backgroundColor: "#E74C3C" }]} />
            )}
            {chat.indicator === "blue-chat-filled" && (
              <Ionicons name="chatbubble" size={14} color="#0EADFF" style={{ marginRight: 4 }} />
            )}
            {chat.indicator === "blue-outline" && (
              <View style={[styles.squareOutline, { borderColor: "#0EADFF" }]} />
            )}
            {chat.indicator === "red-outline" && (
              <View style={[styles.squareOutline, { borderColor: "#E74C3C" }]} />
            )}
            {chat.indicator === "call" && (
              <Ionicons name="call-outline" size={15} color="#0EADFF" style={{ marginRight: 3 }} />
            )}
            <Text
              style={[
                styles.chatSubtitle,
                chat.indicator === "red-filled" && styles.subtitleNewSnap,
                chat.indicator === "blue-chat-filled" && styles.subtitleNewChat,
              ]}
            >
              {chat.status}
            </Text>
            {chat.time ? (
              <Text style={styles.chatSubtitle}> {chat.time}</Text>
            ) : null}
          </View>
        )}
      </View>

      {chat.action === "camera" && (
        <Ionicons name="camera-outline" size={22} color="#ccc" />
      )}
      {chat.action === "link" && (
        <Ionicons name="arrow-forward-circle-outline" size={22} color="#ccc" />
      )}
      {chat.action === "call" && (
        <View style={styles.callButton}>
          <Ionicons name="call-outline" size={15} color="#000" />
          <Text style={styles.callButtonText}> Call</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

export default function ChatScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View>
            <View style={[styles.headerAvatar, { backgroundColor: "#A8C0DE" }]}>
              <Text style={styles.headerAvatarText}>R</Text>
            </View>
            <View style={styles.headerRedDot} />
          </View>
          <TouchableOpacity style={styles.searchCircle}>
            <Ionicons name="search-outline" size={18} color="#555" />
          </TouchableOpacity>
        </View>

        <Text style={styles.headerTitle}>Chat</Text>

        <View style={styles.headerRight}>
          <TouchableOpacity>
            <View style={[styles.headerIconCircle, { backgroundColor: YELLOW }]}>
              <Ionicons name="person-add" size={20} color="#000" />
              <View style={styles.badge}>
                <Text style={styles.badgeText}>7</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.headerIconCircle, { backgroundColor: "#F0F0F0" }]}>
            <Ionicons name="ellipsis-horizontal" size={20} color="#555" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabsContent}
        style={styles.tabsScroll}
      >
        <View style={[styles.tab, styles.activeTab]}>
          <Text style={styles.activeTabText}>All</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.tabText}>Unread </Text>
          <View style={styles.tabBadge}>
            <Text style={styles.tabBadgeText}>5</Text>
          </View>
        </View>
        <View style={styles.tab}>
          <Text style={styles.tabText}>Stories </Text>
          <View style={styles.tabBadge}>
            <Text style={styles.tabBadgeText}>9+</Text>
          </View>
        </View>
        <View style={styles.tab}>
          <Text style={styles.tabText}>Groups</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.tabText}>🤖 My AI</Text>
        </View>
      </ScrollView>

      <ScrollView style={styles.chatList} bounces={false} overScrollMode="never">
        {chats.map((chat) => (
          <ChatRow key={chat.id} chat={chat} />
        ))}

        <TouchableOpacity
          style={styles.alertButton}
          onPress={() => Alert.alert("Alert Button pressed")}
        >
          <Text style={styles.alertButtonText}>Alert</Text>
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity style={styles.fab}>
        <Ionicons name="create-outline" size={26} color="#000" />
      </TouchableOpacity>
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
  },
  headerLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  headerAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  headerAvatarText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  headerRedDot: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 11,
    height: 11,
    borderRadius: 6,
    backgroundColor: "#E74C3C",
    borderWidth: 2,
    borderColor: "#fff",
  },
  searchCircle: {
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
    fontWeight: "bold",
    color: "#000",
  },
  headerRight: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 8,
  },
  headerIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  badge: {
    position: "absolute",
    top: -2,
    right: -2,
    backgroundColor: "#E74C3C",
    borderRadius: 8,
    minWidth: 16,
    height: 16,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 3,
  },
  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  tabsScroll: {
    maxHeight: 48,
    paddingLeft: 12,
  },
  tabsContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingRight: 16,
  },
  tab: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 7,
    borderRadius: 20,
  },
  tabBadge: {
    backgroundColor: "#0EADFF",
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    marginLeft: 2,
  },
  tabBadgeText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "700",
  },
  activeTab: {
    backgroundColor: BLUE,
  },
  tabText: {
    fontSize: 14,
    color: "#555",
    fontWeight: "500",
  },
  activeTabText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "600",
  },
  chatList: {
    flex: 1,
  },
  chatRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 12,
  },
  chatAvatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: "center",
    justifyContent: "center",
  },
  chatAvatarText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  chatInfo: {
    flex: 1,
  },
  chatNameRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  chatName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },
  adLabel: {
    fontSize: 14,
    color: "#888",
  },
  subtitleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },
  squareIndicator: {
    width: 13,
    height: 13,
    marginRight: 5,
  },
  squareOutline: {
    width: 13,
    height: 13,
    borderWidth: 2,
    marginRight: 5,
  },
  chatSubtitle: {
    fontSize: 13,
    color: "#888",
  },
  subtitleNewSnap: {
    color: "#E74C3C",
    fontWeight: "700",
  },
  subtitleNewChat: {
    color: "#0EADFF",
    fontWeight: "700",
  },
  adSubtitle: {
    fontSize: 13,
    color: "#E74C3C",
    fontWeight: "600",
    flexShrink: 1,
  },
  callButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  callButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  alertButton: {
    backgroundColor: "#E74C3C",
    marginHorizontal: 20,
    marginTop: 16,
    marginBottom: 20,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  alertButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  fab: {
    position: "absolute",
    bottom: 70,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: YELLOW,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
