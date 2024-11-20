import React from 'react';
import Animated from 'react-native-reanimated';
import { View, ViewStyle } from 'react-native';
import { assetCardStyles } from '../styles/components';
import { Asset } from '../utils/mockData';
import { FontAwesome5 } from '@expo/vector-icons';
import { Text } from './Text';

interface AssetCardProps {
  asset: Asset;
  style?: ViewStyle;
}

function AssetCard({ asset, style }: AssetCardProps) {
  const getIconName = (symbol: string) => {
    switch (symbol.toLowerCase()) {
      case 'eth':
        return 'ethereum' as const;
      case 'btc':
        return 'bitcoin' as const;
      case 'usdc':
        return 'dollar-sign' as const;
      default:
        return 'wallet' as const;
    }
  };

  const renderChangeIcon = () => {
    return asset.change24h >= 0 ? (
      <FontAwesome5 name="arrow-up" size={16} color="#2ecc71" />
    ) : (
      <FontAwesome5 name="arrow-down" size={16} color="#e74c3c" />
    );
  };

  return (
    <Animated.View style={[assetCardStyles.card, style]}>
      <View style={assetCardStyles.iconContainer}>
        <FontAwesome5 name={getIconName(asset.symbol)} size={24} color={asset.colors.primary} />
        <Text style={assetCardStyles.symbol}>({asset.symbol})</Text>
      </View>
      <Text style={assetCardStyles.name}>{asset.name}</Text>
      <Text style={assetCardStyles.balance}>
        <FontAwesome5 name="wallet" size={16} color="#666" /> {''}
        {asset.balance} {asset.symbol}
      </Text>
      <Text style={assetCardStyles.value}>
        <FontAwesome5 name="dollar-sign" size={16} color="#666" /> Value: ${asset.value.toLocaleString()}
      </Text>
      <View style={assetCardStyles.changeContainer}>
        {renderChangeIcon()}
        <Text style={[assetCardStyles.change, { color: asset.change24h >= 0 ? '#2ecc71' : '#e74c3c' }]}>
          {' '}
          {asset.change24h > 0 ? '+' : ''}
          {asset.change24h.toFixed(4)}%
        </Text>
      </View>
    </Animated.View>
  );
}

export default AssetCard;
