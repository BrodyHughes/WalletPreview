import React from "react";
import Animated from "react-native-reanimated";
import { Text } from "react-native";
import { screenStyles } from "../styles/screens";

function SettingsScreen() {
  return (
    <Animated.View style={screenStyles.container}>
              <Text>⚙️</Text>
      <Text>Settings Screen!</Text>
    </Animated.View>
  );
}

export default SettingsScreen;