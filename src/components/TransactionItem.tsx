import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Transaction, transactionHistory } from "../utils/mockData";
import { transactionStyles } from "../styles/components";

interface TransactionItemProps {
  transaction: Transaction;
}

const TransactionItem = ({ transaction }: TransactionItemProps) => {
  const getIconName = (type: Transaction["type"]) => {
    switch (type) {
      case "receive":
        return "arrow-down";
      case "send":
        return "arrow-up";
      case "swap":
        return "exchange-alt";
      default:
        return "question";
    }
  };

  const getStatusColor = (status: Transaction["status"]) => {
    switch (status) {
      case "completed":
        return "#2ecc71";
      case "pending":
        return "#f1c40f";
      case "failed":
        return "#e74c3c";
      default:
        return "#95a5a6";
    }
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString();
  };

  return (
    <View style={transactionStyles.transactionItem}>
      <View
        style={[
          transactionStyles.iconContainer,
          { backgroundColor: getStatusColor(transaction.status) + "20" },
        ]}
      >
        <FontAwesome5
          name={getIconName(transaction.type)}
          size={16}
          color={getStatusColor(transaction.status)}
        />
      </View>

      <View style={transactionStyles.detailsContainer}>
        <View style={transactionStyles.topRow}>
          <Text style={transactionStyles.type}>
            {transaction.type.charAt(0).toUpperCase() +
              transaction.type.slice(1)}
          </Text>
          <Text style={transactionStyles.amount}>
            {transaction.type === "receive" ? "+" : "-"} {transaction.amount}{" "}
            {transaction.symbol}
          </Text>
        </View>

        <View style={transactionStyles.bottomRow}>
          <Text style={transactionStyles.date}>
            {formatDate(transaction.timestamp)}
          </Text>
          <Text
            style={[
              transactionStyles.status,
              { color: getStatusColor(transaction.status) },
            ]}
          >
            {transaction.status}
          </Text>
        </View>

        {transaction.type === "swap" && (
          <Text style={transactionStyles.swapDetails}>
            Recieved: {transaction.toAmount} {transaction.toSymbol}
          </Text>
        )}
      </View>
    </View>
  );
};

export function TransactionList() {
  return (
    <FlatList
      data={transactionHistory}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TransactionItem transaction={item} />}
      style={transactionStyles.container}
      contentContainerStyle={transactionStyles.contentContainer}
    />
  );
}
