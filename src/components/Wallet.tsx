import React from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { screenStyles } from '../styles/screens';
import AssetCard from './AssetCard';
import { Text } from './Text';
import { CryptoPrices } from '../services/apis';
import { transformPriceDataToPortfolio } from '../utils/mockData';

// Then in your Wallet component:
interface WalletProps {
  priceData: CryptoPrices | null;
  isLoading: boolean;
}

function Wallet({ priceData, isLoading }: WalletProps) {
  const livePortfolioData = transformPriceDataToPortfolio(priceData);
  return (
    <ScrollView
      style={screenStyles.scrollView}
      contentContainerStyle={screenStyles.scrollViewContent}
    >
      <View style={screenStyles.wallet}>
        <View style={screenStyles.walletNameContainer}>
          <Text style={screenStyles.walletNameText}>Wallet Name</Text>
        </View>
        {isLoading ? (
          <ActivityIndicator size="large" color="#3498db" />
        ) : (
          livePortfolioData.map((asset, index) => {
            // Get the current price data for this asset
            const currentPrice =
              asset.symbol.toLowerCase() === 'eth'
                ? priceData?.ethereum
                : asset.symbol.toLowerCase() === 'btc'
                  ? priceData?.bitcoin
                  : priceData?.['usd-coin'];

            return (
              <AssetCard
                key={asset.id}
                asset={{
                  ...asset,
                  // Update value and change with live data if available
                  value: currentPrice?.usd || asset.value,
                  change24h: currentPrice?.usd_24h_change || asset.change24h,
                }}
                style={
                  livePortfolioData.length % 2 !== 0 && index === livePortfolioData.length - 1
                    ? { marginLeft: 16 }
                    : undefined
                }
              />
            );
          })
        )}
      </View>
    </ScrollView>
  );
}

export default Wallet;
