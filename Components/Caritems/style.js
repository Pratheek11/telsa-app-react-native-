import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    carContainer: {
      width: '100%',
      height: Dimensions.get('window').height,  
    },
    title: {
      width: '100%',
      marginTop: '28%',
      alignItems: 'center',
    },
    header: {
      fontSize: 35,
      fontWeight: '600'
    },
    price: {
      fontSize: 15,
      fontWeight: '100'
    },
    imageBackground: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute'
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 50,
      width: '100%'
    },
    subtitle: {
      textDecorationLine: 'underline',
    }
  });

  export default styles;