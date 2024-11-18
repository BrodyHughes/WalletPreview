<('.'<) <('.')> (>'.')> <('.')> <('.'<) <('.')> (>'.')> <('.')> <('.'<) <('.')> (>'.')> 
<('.')> <('.'<)  THIS IS THE TODO AND OVERVIEW OF WHAT I AM DOING HERE  <('.')> (>'.')> 
<('.'<) <('.')> (>'.')> <('.')> <('.'<) <('.')> (>'.')> <('.'<) <('.')> (>'.')> <('.')> 

# Crypto Portfolio Preview App

## Project Overview
Build a React Native app that displays crypto portfolio information and transactions, focusing on UI/UX without actual blockchain integration yet. This will cover multiple learning objectives while building something relevant to wallet development.

## Core Features & Learning Objectives

### Phase 1: Basic Components & Navigation
- Create reusable components for:
  - Asset Card (showing crypto balance & price)
  - Transaction List Item
  - Price Change Indicator
  - Custom Button Components
- Implement bottom tab navigation:
  - Portfolio Overview
  - Transaction History
  - Settings

### Phase 2: State Management & Data
- Implement local state management using:
  - useState for component-level state
  - useContext for theme/settings
  - Later: Redux for transaction/portfolio data
- Add mock data handling:
  - Hardcoded portfolio data initially
  - Later: API integration with CoinGecko

### Phase 3: Animations & Polish
- Add Reanimated animations:
  - Price changes
  - Tab transitions
  - Pull to refresh
  - Card flip animations
  - List item animations

### Phase 4: Data Persistence & Advanced Features
- Implement AsyncStorage for:
  - User preferences
  - Transaction history
  - Portfolio data
- Add advanced features:
  - Dark/Light mode
  - Currency conversion
  - Price alerts (mock)

## Implementation Steps

2. **Initial Component Structure**
```jsx
src/
  components/
    AssetCard.js
    TransactionItem.js
    PriceIndicator.js
    CustomButton.js
  screens/
    PortfolioScreen.js
    TransactionsScreen.js
    SettingsScreen.js
  context/
    ThemeContext.js
  utils/
    mockData.js
```

3. **Mock Data Structure**
```javascript
// mockData.js
export const portfolioData = [
  {
    id: '1',
    symbol: 'ETH',
    name: 'Ethereum',
    balance: '1.5',
    value: 3200.50,
    change24h: 2.5,
  },
  // ... more assets
];

export const transactionHistory = [
  {
    id: '1',
    type: 'receive',
    amount: '0.5',
    symbol: 'ETH',
    timestamp: '2024-03-18T10:30:00Z',
    status: 'completed',
  },
  // ... more transactions
];
```

## Learning Value Alignment
- Custom Components ✓
- Navigation ✓
- State Management ✓
- API Integration ✓
- Animations ✓
- Local Storage ✓

## Extension Possibilities
1. Add Web3 Integration:
   - Read-only wallet connection
   - Transaction signature simulation
2. Add Testing:
   - Unit tests for components
   - Integration tests for navigation
3. Add Authentication:
   - Biometric authentication
   - PIN code protection