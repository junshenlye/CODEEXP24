import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import logoImage from '../../../assets/Images/logoImage.png'

export default function SplashScreen({ navigation }) {
  const onPressHandler = () => {
    console.log('Button Pressed, Navigating to Login Page');
    navigation.navigate("Login");
  }
  return (
    <View style={globalStyles.container}>
      <View style={styles.flexBoxContainer}>
        <View style={styles.HeaderContainer}>
          <Text style={styles.localTextheader}>Developed by Team Bravo</Text>
        </View>
        <View>
          <Image style={styles.ImageContainer} source={logoImage}/>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onPressHandler}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
//Add onto Local Stylesheet for convience
const styles = StyleSheet.create({
  flexBoxContainer:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  HeaderContainer:{
    marginTop: '20%',
  },
  ImageContainer:{
    height: 400,
    width: 400,
  }, 
  buttonContainer:{
    marginBottom: '25%',
  }, 
  localTextHeader:{
    fontSize: 16,
    fontWeight: '100', 
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
