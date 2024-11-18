// src/utils/mockData.js
export const portfolioData = [
  {
    id: "1",
    symbol: "ETH",
    name: "Ethereum",
    balance: "1.5",
    value: 3200.5,
    change24h: 2.5,
    icon: "⟠", // placeholder for actual icon
  },
  {
    id: "2",
    symbol: "BTC",
    name: "Bitcoin",
    balance: "0.05",
    value: 2150.75,
    change24h: -1.2,
    icon: "₿", // placeholder for actual icon
  },
  {
    id: "3",
    symbol: "USDC",
    name: "USD Coin",
    balance: "500",
    value: 500.0,
    change24h: 0.01,
    icon: "$", // placeholder for actual icon
  },
];

export const transactionHistory = [
  {
    id: "1",
    type: "receive",
    amount: "0.5",
    symbol: "ETH",
    timestamp: "2024-03-18T10:30:00Z",
    status: "completed",
    from: "0x1234...5678",
    to: "0xYOUR...WALLET",
  },
  {
    id: "2",
    type: "send",
    amount: "0.1",
    symbol: "BTC",
    timestamp: "2024-03-17T15:45:00Z",
    status: "completed",
    from: "0xYOUR...WALLET",
    to: "0x8765...4321",
  },
  {
    id: "3",
    type: "swap",
    amount: "100",
    symbol: "USDC",
    toAmount: "0.05",
    toSymbol: "ETH",
    timestamp: "2024-03-16T09:15:00Z",
    status: "completed",
  },
];

// Theme constants for consistent styling
export const themeColors = {
  light: {
    background: "#FFFFFF",
    surface: "#F5F5F5",
    primary: "#3498db",
    secondary: "#2ecc71",
    text: "#2c3e50",
    border: "#bdc3c7",
    positive: "#2ecc71",
    negative: "#e74c3c",
  },
  dark: {
    background: "#121212",
    surface: "#1E1E1E",
    primary: "#3498db",
    secondary: "#2ecc71",
    text: "#FFFFFF",
    border: "#333333",
    positive: "#2ecc71",
    negative: "#e74c3c",
  },
};
