import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const cardGap = 8;
const cardWidth = '47%';
const sidesPadding = (windowWidth - (2 * (windowWidth * 0.47)) - cardGap) / 2;

export const screenStyles = StyleSheet.create({
  content: {
    flex: 1,
    width: "100%",
  },
  container: {
    flex: 1,
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  walletNameContainer: {
    width: "100%",
    paddingHorizontal: 8, // Add padding to align with cards
  },
  walletNameText: {
    color: "#000",
    fontSize: 30,
    padding: 2,
    fontWeight: '600'
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
  },
  wallet: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "center", // Keep center alignment for pairs
    width: '100%',
  },
});
