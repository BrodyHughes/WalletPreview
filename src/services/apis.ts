const COINGECKO_BASE_URL = 'https://api.coingecko.com/api/v3';

export const fetchCryptoData = async (ids: string[]) => {
  const response = await fetch(
    `${COINGECKO_BASE_URL}/simple/price?ids=ethereum,bitcoin,usd-coin&vs_currencies=usd&include_24hr_change=true`
  );
  return response.json();
};