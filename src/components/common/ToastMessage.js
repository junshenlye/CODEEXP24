import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ToastMessage = ({ title, message }) => {
  return (
    <View style={styles.container}>
        <Text>{title}</Text>
        <Text>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ToastMessage;
