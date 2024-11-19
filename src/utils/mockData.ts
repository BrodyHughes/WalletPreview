import { CryptoPrices } from '../services/apis';

export interface Asset {
  id: string;
  symbol: string;
  name: string;
  balance: string;
  value: number;
  change24h: number;
  colors: {
    primary: string;
    secondary: string;
    text?: string;
  };
}

export function transformPriceDataToPortfolio(priceData: CryptoPrices | null) {
  if (!priceData) return [];

  return [
    {
      id: '1',
      symbol: 'ETH',
      name: 'Ethereum',
      balance: 'mocked', // This would come from wallet data in reality
      value: priceData.ethereum.usd,
      change24h: priceData.ethereum.usd_24h_change,
      colors: {
        primary: '#627EEA',
        secondary: '#ECF0FF',
        text: '#FFFFFF',
      },
    },
    {
      id: '2',
      symbol: 'BTC',
      name: 'Bitcoin',
      balance: '0.05',
      value: priceData.bitcoin.usd,
      change24h: priceData.bitcoin.usd_24h_change,
      colors: {
        primary: '#F7931A',
        secondary: '#FFF5E6',
        text: '#FFFFFF',
      },
    },
    {
      id: '3',
      symbol: 'USDC',
      name: 'USD Coin',
      balance: '500',
      value: priceData['usd-coin'].usd,
      change24h: priceData['usd-coin'].usd_24h_change,
      colors: {
        primary: '#2775CA',
        secondary: '#EEF4FB',
        text: '#FFFFFF',
      },
    },
  ];
}

export interface Transaction {
  id: string;
  type: 'receive' | 'send' | 'swap';
  amount: string;
  symbol: string;
  timestamp: string;
  status: 'completed' | 'pending' | 'failed';
  from?: string;
  to?: string;
  toAmount?: string;
  toSymbol?: string;
}

export const transactionHistory: Transaction[] = [
  {
    id: '1',
    type: 'receive',
    amount: '0.5',
    symbol: 'ETH',
    timestamp: '2024-03-18T10:30:00Z',
    status: 'completed',
    from: '0x1234...5678',
    to: '0xYOUR...WALLET',
  },
  {
    id: '2',
    type: 'send',
    amount: '0.1',
    symbol: 'BTC',
    timestamp: '2024-03-17T15:45:00Z',
    status: 'failed',
    from: '0xYOUR...WALLET',
    to: '0x8765...4321',
  },
  {
    id: '3',
    type: 'swap',
    amount: '1000',
    symbol: 'USDC',
    toAmount: '0.5',
    toSymbol: 'ETH',
    timestamp: '2024-03-16T09:15:00Z',
    status: 'pending',
  },
  {
    id: '4',
    type: 'receive',
    amount: '100',
    symbol: 'USDC',
    timestamp: '2024-03-15T14:20:00Z',
    status: 'completed',
    from: '0xABCD...EFGH',
    to: '0xYOUR...WALLET',
  },
  {
    id: '5',
    type: 'send',
    amount: '0.25',
    symbol: 'ETH',
    timestamp: '2024-03-14T11:10:00Z',
    status: 'completed',
    from: '0xYOUR...WALLET',
    to: '0x9876...DCBA',
  },
];

export const themeColors = {
  light: {
    background: '#FFFFFF',
    surface: '#F5F5F5',
    primary: '#3498db',
    secondary: '#2ecc71',
    text: '#2c3e50',
    border: '#bdc3c7',
    positive: '#2ecc71',
    negative: '#e74c3c',
    muted: '#95a5a6',
    cardBackground: '#FFFFFF',
    shadow: 'rgba(0, 0, 0, 0.1)',
  },
  dark: {
    background: '#121212',
    surface: '#1E1E1E',
    primary: '#3498db',
    secondary: '#2ecc71',
    text: '#FFFFFF',
    border: '#333333',
    positive: '#2ecc71',
    negative: '#e74c3c',
    muted: '#7f8c8d',
    cardBackground: '#242424',
    shadow: 'rgba(0, 0, 0, 0.2)',
  },
};
