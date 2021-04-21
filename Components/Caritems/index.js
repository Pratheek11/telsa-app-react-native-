import React from 'react';
import {Text, View, ImageBackground } from 'react-native';
import styles from './style';
import StyledButtons from '../StyledButtons/Index'

const Caritems = (props) => {

  const {name, price, taglineCTA, image} = props.car;

  return (
    <View style={styles.container}>
      <View style={styles.carContainer}>
      <ImageBackground source={image}
        style={styles.imageBackground}
      />

        <View style={styles.title}>
          <Text style={styles.header}>{name}</Text>
          <Text style={styles.price}>{price}{' '}
            <Text style={styles.subtitle}>
              {taglineCTA}
            </Text>
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <StyledButtons type="primary" content="Coustom Order"/>
          <StyledButtons type="secondary" content="Existing Inventory"/>
        </View>
      </View>
    </View>
  );
}

export default Caritems;