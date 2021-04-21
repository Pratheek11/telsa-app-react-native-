import React from 'react';
import {View, Image} from 'react-native';
import styles from './style';

const Header = () => {

    return (
        <View style={styles.headerContainer}>
            <Image style={styles.logo} source={require('../../imges/logo.png')}/>
            <Image style={styles.menu} source={require('../../imges/menu.png')}/>
        </View>

    );

}
export default Header;