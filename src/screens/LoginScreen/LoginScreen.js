import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function LoginScreen({ navigation }) {
  const onPressHandler = () => {
    console.log('Button Pressed, Navigating to SplashScreen Page');
    navigation.navigate("SplashScreen");
  }
  const handleDismiss = () => {
    console.log('Login Button Pressed')
  }
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.container}>
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
