import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    headerContainer: {
        position: 'absolute',
        top: 40,
        zIndex: 100,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    logo: {
        height: 25,
        width: 100,
        resizeMode: 'contain',
    },
    menu: {
        height: 25,
        width: 25,
        resizeMode: 'contain'
    }
  });

  export default styles;