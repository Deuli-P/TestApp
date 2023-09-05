import { Stack, useGlobalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Details() {
  const router : useRouter();
  const params : useGlobalSearchParams();
  return (
    <View>
      <Stack.Screen
        options={{
          title: params.name,
        }}
      />
      <View>
        <Text style={styles.name}> Intégration {params.name}</Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    margin: 10,
  },
});