/* eslint-disable prettier/prettier */
import React from 'react';
import { TextInput, View } from 'react-native';
import styless from '../react_native_styles/styling';

const Input = (props) => {

    const [text, onChangeText] = React.useState('');
    console.log(text);
  return (
    <View>
        <TextInput
        style={props.style}
        onChangeText={onChangeText}
        value={value}
        placeholder={props.placeholder}
        keyboardType="text"
      />
    </View>
  );
};

export default Input;
