import React from "react";
import Animated from "react-native-reanimated";
import { Text } from "react-native";
import { screenStyles } from "../styles/screens";

function PortfolioScreen() {
  return (
    <Animated.View style={screenStyles.container}>
              <Text>📈</Text>
      <Text>Portfolio Screen!</Text>
    </Animated.View>
  );
}

export default PortfolioScreen;