import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { screenStyles } from "../styles/screens";
import Wallet from "../components/Wallet";
import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { fetchCryptoData } from '../services/apis';
import { Text } from "../components/Text";

function PortfolioScreen() {
  const [portfolio, setPortfolio] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        setIsLoading(true);
        const data = await fetchCryptoData(['ethereum', 'bitcoin', 'usd-coin']);
        console.log('data', data);
        setPortfolio(data);
      } catch (err) {
        setError('Failed to load portfolio');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#3498db" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <SafeAreaView
      style={screenStyles.container}
      edges={["top", "left", "right"]}
    >
      <Animated.View style={[screenStyles.container]}>
        <Wallet />
      </Animated.View>
    </SafeAreaView>  );
}

export default PortfolioScreen;
