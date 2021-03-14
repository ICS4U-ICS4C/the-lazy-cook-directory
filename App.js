import { StatusBar } from 'expo-status-bar';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Pasta</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});