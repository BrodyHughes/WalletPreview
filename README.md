```
<('.'<) <('.')> (>'.')> <('.')> <('.'<) <('.')> (>'.')> <('.')> <('.'<) <('.')> (>'.')>
<('.')> <('.'<) THIS IS THE TODO AND OVERVIEW OF WHAT I AM DOING HERE <('.')> (>'.')>
<('.'<) <('.')> (>'.')> <('.')> <('.'<) <('.')> (>'.')> <('.'<) <('.')> (>'.')> <('.')>
```

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
