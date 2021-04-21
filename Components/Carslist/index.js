import React from 'react';
import {FlatList, Text, View, Dimensions} from 'react-native';
import styles from './style';
import Caritem from '../Caritems/index';
import cars from './cars'

const Carslist = (props) => {

  return (
    <View style={styles.container}>
      <FlatList data={cars}
        renderItem={({item}) => <Caritem car={item}/>} 
        snapToAlignment={'start'}
        decelerationRate={'normal'}
        snapToInterval={Dimensions.get('window').height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default Carslist;