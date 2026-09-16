import React from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import AppNavigator from './src/navigation/AppNavigator';
import { styles } from './src/theme/styles';

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />

      <AppNavigator />
    </SafeAreaView>
  );
}