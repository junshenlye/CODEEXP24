import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import globalStyles from '../../styles/globalStyles';

export default function SplashScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text>Hello World!</Text>
      <Button title="Click Here" onPress={() => navigation.navigate("Login")} />
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
