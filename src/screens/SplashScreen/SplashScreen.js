import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import globalStyles from '../../styles/globalStyles';

export default function SplashScreen({ navigation }) {
  const onPressHandler = () => {
    console.log('Button Pressed, Navigating to Login Page');
    navigation.navigate("Login");
  }
  return (
    <View style={globalStyles.container}>
      <Text style={styles.localTextheader}>Hello World!</Text>
      <TouchableOpacity style={styles.button} onPress={onPressHandler}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}
//Add onto Local Stylesheet for convience
const styles = StyleSheet.create({
  localTextHeader:{
    fontSize: 16,
    fontWeight: 'extraLight', 
  },
  button:{
    backgroundColor: '#000000',
    width: 162,
    height: 54,
    borderRadius: 30,
    alignItems: 'center', // Center the text horizontally
    justifyContent: 'center', // Center the text vertically
    // iOS Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    // Android Shadow
    elevation: 5,
  },
  buttonText:{
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
});
