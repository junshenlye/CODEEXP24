import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import errorImage from '../../../assets/Svg/errorImage.svg'

const ToastMessage = ({ colorValue, title, message }) => {

  return (
    <View style={styles.Errorcontainer}>
        <View style={styles.contentContainer}>
            <Text style={styles.font}>{title}</Text>
            <Text style={styles.message}>{message}</Text>
        </View>
    </View>
  );
};

//color is a conditional variable: Red/Green [Error/Success]

const styles = StyleSheet.create({
  Errorcontainer: {
    borderWidth: 2,
    width: '80%',
    height: 50, // Adjust the height according to your preference
    backgroundColor: '#fff6f6',
    borderColor: '#ffe7e7',
    borderRadius: 10, // Adjust the borderRadius as needed
  },      
  SuccessContainer: {

  }, 
  contentContainer:{
    padding: 5,
  },
  font:{
    fontsize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    fontWeight: 'normal',
  },
});

export default ToastMessage;
