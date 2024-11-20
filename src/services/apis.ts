/* eslint-disable no-console */
import Constants from 'expo-constants';
import { WalletData } from '../types';

const ETHERSCAN_API_KEY = Constants.expoConfig?.extra?.ETHERSCAN_API_KEY;
const COINGECKO_BASE_URL = 'https://api.coingecko.com/api/v3';

export const fetchCryptoData = async () => {
  const response = await fetch(
    `${COINGECKO_BASE_URL}/simple/price?ids=ethereum,bitcoin,usd-coin&vs_currencies=usd&include_24hr_change=true`,
  );
  return response.json();
};

// const defaultAddress = '0x089ba0BC08DcF2d52D3aa7Edd9A4Ac960FaAbe9E'

export const transformPortfolioData = (data: WalletData) => {
  const ethValue = Number(data.ethBalance) * data.prices.ethereum.usd;

  return [
    {
      id: '1',
      symbol: 'ETH',
      name: 'Ethereum',
      balance: data.ethBalance,
      value: ethValue,
      change24h: data.prices.ethereum.usd_24h_change,
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
      balance: '0.00', // You'd need to fetch BTC balance separately
      value: data.prices.bitcoin.usd,
      change24h: data.prices.bitcoin.usd_24h_change,
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
      balance: '0.00', // You'd need to fetch USDC balance separately
      value: data.prices['usd-coin'].usd,
      change24h: data.prices['usd-coin'].usd_24h_change,
      colors: {
        primary: '#2775CA',
        secondary: '#EEF4FB',
        text: '#FFFFFF',
      },
    },
  ];
};

const ETHERSCAN_BASE_URL = 'https://api.etherscan.io/api';

export const fetchWalletBalance = async (address: string) => {
  const response = await fetch(
    `${ETHERSCAN_BASE_URL}?module=account&action=balance&address=${address}&tag=latest&apikey=${ETHERSCAN_API_KEY}`,
  );
  return response.json();
};

// Add better error handling and typing
export const getPortfolioData = async (address: string) => {
  try {
    // In your service/api file, add better logging:

    const formatNumber = (num: number) => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(num);
    };

    const formatPercentage = (num: number) => {
      return `${num > 0 ? '+' : ''}${num.toFixed(2)}%`;
    };

    console.log('Price Data:', {
      BTC: {
        price: formatNumber(91934),
        change: formatPercentage(0.596),
      },
      ETH: {
        price: formatNumber(3085.75),
        change: formatPercentage(-2.27),
      },
      USDC: {
        price: formatNumber(1.001),
        change: formatPercentage(0.065),
      },
    });

    console.log('Wallet Data:', {
      status: 'OK',
      ethBalance: '0.5590 ETH',
      ethValue: formatNumber(0.559 * 3085.75),
    });

    // For the error case:
    console.log('Error:', {
      status: 'NOTOK',
      message: 'Error! Invalid address format',
    });
    const [prices, walletData] = await Promise.all([fetchCryptoData(), fetchWalletBalance(address)]);

    // Convert Wei to ETH (divide by 10^18)
    const ethBalance = walletData.result ? (Number(walletData.result) / 1e18).toFixed(4) : '0';

    return {
      prices,
      walletData: {
        ethBalance,
        address,
        status: walletData.status,
      },
    };
  } catch (error) {
    console.error('Error details:', error);
    throw error;
  }
};
export interface EtherscanResponse {
  status: string;
  message: string;
  result: string; // Balance in Wei
}

export interface CryptoPrice {
  usd: number;
  usd_24h_change: number;
}

export interface CryptoPrices {
  ethereum: CryptoPrice;
  bitcoin: CryptoPrice;
  'usd-coin': CryptoPrice;
}
