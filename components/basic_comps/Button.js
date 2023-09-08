/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Button } from 'react-native';
import styless from '../react_native_styles/styling';

const Buttona = (props) => {
  return (
    <View style={props.style}>
        <Button
  onPress={props.onPress}
  color={props.color}
  title={props.title}
  style={styless.rounded}
/>
    </View>

  );
};

export default Buttona;
