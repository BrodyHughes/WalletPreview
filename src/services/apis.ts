const COINGECKO_BASE_URL = 'https://api.coingecko.com/api/v3';

export const fetchCryptoData = async () => {
  const response = await fetch(
    `${COINGECKO_BASE_URL}/simple/price?ids=ethereum,bitcoin,usd-coin&vs_currencies=usd&include_24hr_change=true`,
  );
  return response.json();
};

const ETHERSCAN_BASE_URL = 'https://api.etherscan.io/api';
const ETHERSCAN_API_KEY = 'YOUR_API_KEY'; // You'll need to get this from Etherscan

export const fetchWalletBalance = async (address: string) => {
  const response = await fetch(
    `${ETHERSCAN_BASE_URL}?module=account&action=balance&address=${address}&tag=latest&apikey=${ETHERSCAN_API_KEY}`,
  );
  return response.json();
};

export const getPortfolioData = async (address: string) => {
  try {
    // Get prices
    const prices = await fetchCryptoData();
    // Get wallet balance
    const walletData = await fetchWalletBalance(address);

    // Combine the data
    return {
      prices,
      walletData,
    };
  } catch (error) {
    console.error('Error fetching portfolio data:', error);
    throw error;
  }
};

export interface CryptoPrice {
  usd: number;
  usd_24h_change: number;
}

export interface CryptoPrices {
  ethereum: CryptoPrice;
  bitcoin: CryptoPrice;
  'usd-coin': CryptoPrice;
}

export interface WalletBalance {
  // Add types based on Etherscan response
}
