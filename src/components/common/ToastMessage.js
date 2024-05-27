import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import errorImage from '../../../assets/Svg/errorImage.svg'

const ToastMessage = ({ messageCode, title, message }) => {
  let containerStyle;
  let contentContainerStyle;
  if (messageCode == 1){
    containerStyle = styles.Errorcontainer
    contentContainerStyle = styles.errorContentContainer
  } else if (messageCode == 2) {
    containerStyle = styles.SuccessContainer
    contentContainerStyle = styles.SuccessContainer
  }
  return (
    <View style={containerStyle}>
        <View style={contentContainerStyle}>
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
  errorContentContainer:{
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
