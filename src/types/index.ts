// src/types/index.ts

export interface Asset {
  id: string;
  symbol: string;
  name: string;
  balance: string;
  value: number;
  change24h: number;
  icon: string;
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

export interface Theme {
  background: string;
  surface: string;
  primary: string;
  secondary: string;
  text: string;
  border: string;
  positive: string;
  negative: string;
}
