import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ToastMessage from '../../components/common/ToastMessage';

export default function LoginScreen({ navigation }) {
  const onPressHandler = () => {
    console.log('Button Pressed, Navigating to SplashScreen Page');
    navigation.navigate("SplashScreen");
  }
  return (
    <View style={styles.container}>
      <Button title='Back' onPress={onPressHandler}/>
      <ToastMessage
      colorValue={1}
      title={"Success"}
      message={"This is a Toast Messsage"}
      />
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
