import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';

export default function LoginScreen({ navigation }) {
  const onPressHandler = () => {
    console.log('Button Pressed, Navigating to SplashScreen Page');
    navigation.navigate("SplashScreen");
  }
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.container}>
      <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button title='Back' onPress={onPressHandler}/>
      </Modal>
      <Button title='Back' onPress={onPressHandler}/>
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
