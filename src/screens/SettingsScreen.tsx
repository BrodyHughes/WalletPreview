import React from 'react';
import Animated from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '../components/Text';
import { screenStyles } from '../styles/screens';

function SettingsScreen() {
  return (
    <SafeAreaView style={screenStyles.container} edges={['top', 'left', 'right']}>
      <Animated.View style={[screenStyles.content]}>
        <Text>⚙️</Text>
        <Text>Settings Screen!</Text>
      </Animated.View>
    </SafeAreaView>
  );
}

export default SettingsScreen;
