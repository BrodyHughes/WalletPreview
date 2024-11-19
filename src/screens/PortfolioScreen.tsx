import Animated from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { screenStyles } from '../styles/screens';
import Wallet from '../components/Wallet';
import React, { useEffect, useState } from 'react';
import { CryptoPrices, fetchCryptoData } from '../services/apis';

function PortfolioScreen() {
  const [prices, setPrices] = useState<CryptoPrices | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        setIsLoading(true);
        const data = await fetchCryptoData();
        // console.log('data', data);
        setPrices(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  // Pass prices and loading state to Wallet
  return (
    <SafeAreaView style={screenStyles.container} edges={['top', 'left', 'right']}>
      <Animated.View style={[screenStyles.container]}>
        <Wallet priceData={prices} isLoading={isLoading} />
      </Animated.View>
    </SafeAreaView>
  );
}

export default PortfolioScreen;
