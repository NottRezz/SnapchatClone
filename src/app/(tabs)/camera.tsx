import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Sizes for the bottom row buttons
const shutterSize = 68;
const gallerySize = 50;
const lensSize = 46;
const spacing = 8;
const rowHeight = 80;

// Mock lens filter options shown to the right of the shutter
const lenses = [
  { initial: "A", color: "#E8A838" },
  { initial: "B", color: "#E74C3C" },
  { initial: "C", color: "#9B59B6" },
];

export default function CameraScreen() {
  // Get the real screen width so we can center the shutter button exactly
  const { width: screenWidth } = useWindowDimensions();

  // Calculate where each button in the bottom row should sit
  const shutterLeft = (screenWidth - shutterSize) / 2;
  const galleryLeft = shutterLeft - spacing - gallerySize;
  const lensStart = shutterLeft + shutterSize + spacing;

  const shutterTop = (rowHeight - shutterSize) / 2;
  const galleryTop = (rowHeight - gallerySize) / 2;
  const lensTop = (rowHeight - lensSize) / 2;

  return (
    <View style={styles.container}>
      <SafeAreaView edges={["top"]}>
        <View style={styles.topBar}>
          <View style={styles.topLeft}>
            <View style={styles.bitmoji}>
              <Text style={styles.bitmojiText}>R</Text>
            </View>
            <TouchableOpacity style={styles.topCircle}>
              <Ionicons name="search-outline" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          <View style={styles.topRight}>
            <TouchableOpacity>
              <Ionicons name="person-add-outline" size={22} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.topCircle}>
              <Ionicons name="camera-reverse-outline" size={22} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      {/* Side icons float on the right side of the viewfinder */}
      <View style={styles.rightIcons}>
        <TouchableOpacity style={styles.rightIcon}>
          <Ionicons name="flash-off-outline" size={26} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.rightIcon}>
          <Ionicons name="musical-notes-outline" size={26} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.rightIcon}>
          <Ionicons name="happy-outline" size={26} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.rightIcon, styles.topCircle]}>
          <Ionicons name="chevron-down" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Push the shutter row to the bottom */}
      <View style={{ flex: 1 }} />

      <SafeAreaView edges={["bottom"]}>
        <View style={styles.expandRow}>
          <TouchableOpacity style={styles.topCircle}>
            <Ionicons name="expand-outline" size={18} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* All three elements use absolute positioning so the shutter stays centered */}
        <View style={[styles.shutterRow, { height: rowHeight }]}>
          <TouchableOpacity
            style={[styles.galleryBtn, { left: galleryLeft, top: galleryTop }]}
          >
            <Ionicons name="images-outline" size={26} color="#fff" />
            <View style={styles.galleryBadge}>
              <Text style={styles.galleryBadgeText}>3</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.shutter, { left: shutterLeft, top: shutterTop }]}
            activeOpacity={0.9}
          />

          {lenses.map((lens, i) => (
            <TouchableOpacity
              key={i}
              style={[
                styles.lensCircle,
                {
                  backgroundColor: lens.color,
                  left: lensStart + i * (lensSize + spacing),
                  top: lensTop,
                },
              ]}
            >
              <Text style={styles.lensInitial}>{lens.initial}</Text>
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
    backgroundColor: "#111",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  topLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  topRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  bitmoji: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#A8C0DE",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.4)",
    alignItems: "center",
    justifyContent: "center",
  },
  bitmojiText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  topCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(80,80,80,0.7)",
    alignItems: "center",
    justifyContent: "center",
  },
  rightIcons: {
    position: "absolute",
    right: 16,
    top: "28%",
    gap: 22,
    zIndex: 10,
  },
  rightIcon: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  expandRow: {
    alignItems: "center",
    marginBottom: 6,
  },
  shutterRow: {
    position: "relative",
  },
  galleryBtn: {
    position: "absolute",
    width: gallerySize,
    height: gallerySize,
    borderRadius: 12,
    backgroundColor: "rgba(80,80,80,0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  galleryBadge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "#E74C3C",
    borderRadius: 8,
    minWidth: 16,
    height: 16,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 3,
  },
  galleryBadgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  shutter: {
    position: "absolute",
    width: shutterSize,
    height: shutterSize,
    borderRadius: shutterSize / 2,
    borderWidth: 4,
    borderColor: "#fff",
    backgroundColor: "transparent",
  },
  lensCircle: {
    position: "absolute",
    width: lensSize,
    height: lensSize,
    borderRadius: lensSize / 2,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.3)",
  },
  lensInitial: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});
