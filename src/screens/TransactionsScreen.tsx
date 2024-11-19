// src/screens/TransactionsScreen.tsx
import React from 'react';
import Animated from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { screenStyles } from '../styles/screens';
import { TransactionList } from '../components/TransactionItem';

function TransactionsScreen() {
  return (
    <SafeAreaView style={screenStyles.container} edges={['top', 'left', 'right']}>
      <Animated.View style={screenStyles.content}>
        <TransactionList />
      </Animated.View>
    </SafeAreaView>
  );
}

export default TransactionsScreen;
