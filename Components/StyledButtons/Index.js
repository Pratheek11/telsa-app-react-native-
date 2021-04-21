import React from 'react';
import {Text, View, Pressable} from 'react-native';
import styles from './style';

const StyledButtons = (props) => {

    const {type, content} = props;
    const background = type === 'primary' ? 'black' : 'white';
    const color = type === 'primary' ? 'white' : 'black';

    return(
    <View style={styles.container}>
        <Pressable style={[styles.button, {backgroundColor: background}]}
        onPress={() => {console.warn("Button pressed")}}>
            <Text style={[styles.text, {color: color}]}>
                {content}
            </Text>
        </Pressable>
    </View>
  );
}

export default StyledButtons;