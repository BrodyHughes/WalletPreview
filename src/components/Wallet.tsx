/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { screenStyles } from '../styles/screens';
import AssetCard from './AssetCard';
import { Text } from './Text';
import { CryptoPrices, getPortfolioData, transformPortfolioData } from '../services/apis';
import { Asset } from '../utils/mockData';

interface WalletProps {
  priceData: CryptoPrices | null;
  isLoading: boolean;
}
function Wallet({}: WalletProps) {
  const [portfolioData, setPortfolioData] = useState<any>(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const data = await getPortfolioData('YOUR_ADDRESS');
        const transformedData = transformPortfolioData(data as any);
        setPortfolioData(transformedData);
      } catch (error) {
        console.error('Error fetching portfolio:', error);
      }
    };

    fetchPortfolio();
  }, []);

  return (
    <ScrollView style={screenStyles.scrollView} contentContainerStyle={screenStyles.scrollViewContent}>
      <View style={screenStyles.wallet}>
        <View style={screenStyles.walletNameContainer}>
          <Text style={screenStyles.walletNameText}>ETH Balance: {portfolioData?.[0]?.balance ?? '0.00'} ETH</Text>
        </View>
        {portfolioData?.map((asset: Asset, index: number) => (
          <AssetCard
            key={asset.id}
            asset={asset}
            style={portfolioData.length % 2 !== 0 && index === portfolioData.length - 1 ? { marginLeft: 16 } : undefined}
          />
        ))}
      </View>
    </ScrollView>
  );
}
export default Wallet;
