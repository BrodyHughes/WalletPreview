import React from "react";
import Animated from "react-native-reanimated";
import { View, ScrollView, SafeAreaView } from "react-native";
import { screenStyles } from "../styles/screens";
import AssetCard from "./AssetCard";
import { portfolioData } from "../utils/mockData";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "./Text";

function Wallet() {
  const insets = useSafeAreaInsets();
  const isOddCount = portfolioData.length % 2 !== 0;

  return (
    <ScrollView
      style={screenStyles.scrollView}
      contentContainerStyle={screenStyles.scrollViewContent}
    >
      <View style={screenStyles.wallet}>
        <View style={screenStyles.walletNameContainer}>
          <Text style={screenStyles.walletNameText}>Wallet Name</Text>
        </View>
        {portfolioData.map((asset, index) => (
          <AssetCard 
            key={asset.id} 
            asset={asset}
            style={
              isOddCount && index === portfolioData.length - 1 
              ? { marginLeft: 10, marginRight: 'auto' }  // Match the container's left padding
              : undefined
            }
          />
        ))}
      </View>
    </ScrollView>
  );
}

export default Wallet;