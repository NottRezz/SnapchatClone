import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Friends shown in the bottom tray - hasBadge means they posted recently
const friendAvatars = [
  { id: "1", initial: "R", color: "#A8C0DE", hasBadge: true },
  { id: "2", initial: "J", color: "#E8A838", hasBadge: false },
  { id: "3", initial: "S", color: "#16A085", hasHome: true },
  { id: "4", initial: "T", color: "#27AE60", hasBadge: false },
];

const actionPills = ["Memories", "Visited", "Favorites", "Popular"];

export default function MapScreen() {
  return (
    <View style={styles.container}>
      {/* Map background built with colored views layered on top of each other */}
      <View style={styles.mapBg}>
        <View style={styles.park} />
        <View style={styles.ponds} />
        <View style={styles.urban} />
        <View style={styles.roadNS} />
        <View style={styles.roadEW} />
        <View style={styles.roadEW2} />
        <View style={styles.roadNS2} />

        <View style={[styles.hwMarker, { top: "54%", left: "22%" }]}>
          <Text style={styles.hwText}>2A</Text>
        </View>
        <View style={[styles.hwMarker, { top: "49%", left: "32%" }]}>
          <Text style={styles.hwText}>101</Text>
        </View>

        <Text style={[styles.placeLabel, { top: "16%", left: "8%" }]}>Lakeside Park</Text>
        <Text style={[styles.placeLabel, { bottom: "22%", right: "6%" }]}>WEST RIDGE</Text>

        <View style={[styles.topPickCard, { top: "24%", left: "52%" }]}>
          <Text style={styles.topPickName}>Brew House</Text>
          <Text style={styles.topPickTag}>Top Pick</Text>
        </View>
        <View style={[styles.topPickCard, { top: "35%", right: "4%" }]}>
          <Text style={styles.topPickName}>City Mini Golf</Text>
          <Text style={styles.topPickTag}>Top Pick</Text>
        </View>

        <View style={[styles.pinWrap, { top: "20%", left: "28%" }]}>
          <View style={[styles.pinAvatar, { backgroundColor: "#E8A838" }]}>
            <Text style={styles.pinInitial}>J</Text>
          </View>
        </View>
        <View style={[styles.pinWrap, { top: "43%", left: "58%" }]}>
          <View style={[styles.pinAvatar, { backgroundColor: "#16A085" }]}>
            <Text style={styles.pinInitial}>S</Text>
          </View>
        </View>

        <View style={[styles.mePin, { top: "47%", left: "38%" }]}>
          <View style={styles.mePinSnap}>
            <Ionicons name="logo-snapchat" size={24} color="#fff" />
          </View>
          <View style={styles.mePinLabel}>
            <Text style={styles.mePinText}>Me  now</Text>
          </View>
        </View>

        {/* Top overlay sits on top of the map */}
        <SafeAreaView edges={["top"]} style={styles.topOverlay}>
          <View style={styles.topRow}>
            <View style={styles.topBitmoji}>
              <Text style={styles.topBitmojiText}>R</Text>
            </View>

            <View style={styles.locationPill}>
              <Text style={styles.locationText}>Somewhere</Text>
            </View>

            <TouchableOpacity style={styles.settingsBtn}>
              <Ionicons name="settings-outline" size={22} color="#000" />
            </TouchableOpacity>
          </View>

          <View style={styles.subRow}>
            <View style={styles.exploredPill}>
              <Text style={styles.exploredText}>46.1% Explored</Text>
            </View>
            <View style={styles.weatherPill}>
              <Ionicons name="partly-sunny-outline" size={16} color="#555" />
              <Text style={styles.weatherText}>  18 °C</Text>
            </View>
          </View>
        </SafeAreaView>

        <View style={styles.rightCard}>
          <TouchableOpacity style={styles.rightCardBtn}>
            <Ionicons name="globe-outline" size={22} color="#000" />
          </TouchableOpacity>
          <View style={styles.rightCardDivider} />
          <TouchableOpacity style={styles.rightCardBtn}>
            <Ionicons name="layers-outline" size={22} color="#000" />
          </TouchableOpacity>
          <View style={styles.rightCardDivider} />
          <TouchableOpacity style={styles.rightCardBtn}>
            <Ionicons name="chevron-down" size={22} color="#000" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.navArrow}>
          <Ionicons name="navigate" size={22} color="#000" />
        </TouchableOpacity>
      </View>

      <SafeAreaView edges={["bottom"]} style={styles.tray}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.friendsRow}
        >
          <TouchableOpacity style={styles.trayCircle}>
            <Ionicons name="search-outline" size={22} color="#555" />
          </TouchableOpacity>
          {friendAvatars.map((f) => (
            <TouchableOpacity key={f.id} style={styles.trayAvatarWrap}>
              <View style={[styles.trayAvatar, { backgroundColor: f.color }]}>
                <Text style={styles.trayAvatarText}>{f.initial}</Text>
              </View>
              {f.hasBadge && <View style={styles.redDot} />}
              {f.hasHome && (
                <View style={styles.homeBadge}>
                  <Ionicons name="home" size={9} color="#fff" />
                </View>
              )}
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.addFriendBtn}>
            <Ionicons name="person-add-outline" size={16} color="#555" />
            <Text style={styles.addFriendText}> Add Friends</Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.pillsRow}>
          {actionPills.map((label) => (
            <TouchableOpacity key={label} style={styles.actionPill}>
              <Text style={styles.actionPillText}>{label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F0D4",
  },

  mapBg: {
    flex: 1,
    backgroundColor: "#E8F0D4",
    overflow: "hidden",
  },
  park: {
    position: "absolute",
    top: "8%",
    left: "4%",
    width: "38%",
    height: "32%",
    backgroundColor: "#C4E09A",
    borderRadius: 6,
  },
  ponds: {
    position: "absolute",
    top: "10%",
    left: "6%",
    width: "18%",
    height: "14%",
    backgroundColor: "#A8D4F0",
    borderRadius: 40,
    opacity: 0.7,
  },
  lake: {
    position: "absolute",
    top: "56%",
    left: "30%",
    width: "38%",
    height: "16%",
    backgroundColor: "#C8E4F8",
    borderRadius: 30,
  },
  urban: {
    position: "absolute",
    top: "55%",
    left: 0,
    width: "30%",
    bottom: 0,
    backgroundColor: "#EDE8D8",
  },
  roadNS: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "44%",
    width: 10,
    backgroundColor: "#FAFAF0",
  },
  roadEW: {
    position: "absolute",
    left: 0,
    right: 0,
    top: "52%",
    height: 10,
    backgroundColor: "#FAFAF0",
  },
  roadEW2: {
    position: "absolute",
    left: 0,
    right: 0,
    top: "40%",
    height: 6,
    backgroundColor: "#F0EEE0",
  },
  roadNS2: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "28%",
    width: 6,
    backgroundColor: "#F0EEE0",
  },
  hwMarker: {
    position: "absolute",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 3,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  hwText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#000",
  },
  placeLabel: {
    position: "absolute",
    fontSize: 11,
    color: "#777",
    fontWeight: "500",
    letterSpacing: 0.5,
  },
  topPickCard: {
    position: "absolute",
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 8,
    padding: 6,
    maxWidth: 110,
  },
  topPickName: {
    fontSize: 11,
    fontWeight: "600",
    color: "#000",
  },
  topPickTag: {
    fontSize: 10,
    color: "#E8A838",
    fontWeight: "700",
  },
  pinWrap: {
    position: "absolute",
    alignItems: "center",
  },
  pinAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#fff",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  pinInitial: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  mePin: {
    position: "absolute",
    alignItems: "center",
  },
  mePinSnap: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#5AC8FA",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#fff",
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  mePinLabel: {
    backgroundColor: "#000",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginTop: 4,
  },
  mePinText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "600",
  },

  topOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingTop: 6,
  },
  topBitmoji: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#A8C0DE",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },
  topBitmojiText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  locationPill: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 22,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  locationText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#000",
  },
  settingsBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 2,
  },
  subRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginTop: 8,
  },
  exploredPill: {
    backgroundColor: "#7B2FBE",
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 5,
  },
  exploredText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",
  },
  weatherPill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 5,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  weatherText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
  },

  rightCard: {
    position: "absolute",
    right: 12,
    top: "35%",
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingVertical: 4,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  rightCardBtn: {
    width: 46,
    height: 46,
    alignItems: "center",
    justifyContent: "center",
  },
  rightCardDivider: {
    height: 1,
    backgroundColor: "#EFEFEF",
    marginHorizontal: 8,
  },

  navArrow: {
    position: "absolute",
    bottom: 16,
    right: 12,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  tray: {
    backgroundColor: "#fff",
    paddingTop: 10,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  friendsRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    gap: 10,
    paddingBottom: 10,
  },
  trayCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    justifyContent: "center",
  },
  trayAvatarWrap: {
    position: "relative",
  },
  trayAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },
  trayAvatarText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  redDot: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#E74C3C",
    borderWidth: 2,
    borderColor: "#fff",
  },
  homeBadge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#3B82F6",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },
  addFriendBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 22,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  addFriendText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  pillsRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    paddingBottom: 6,
  },
  actionPill: {
    backgroundColor: "#F0F0F0",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  actionPillText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
  },
});
