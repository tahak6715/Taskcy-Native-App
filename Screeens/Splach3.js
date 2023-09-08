import {React,useState} from 'react'
import { View , ImageBackground,ScrollView,ToastAndroid,TouchableOpacity, Image, Text, Button} from "react-native"
import style from '../components/react_native_styles/Styling1'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styless from '../components/react_native_styles/styling';
 
const Splach3 = ({navigation}) => {

  return (
    <>
      <View >
      <Image
        resizeMode="contain"
        style={{ height: 324, width:"100%" }}
        source={require('../components/images/intro3.png')} // Replace with your image file path
      />
      <View style={[style.p2]}>
        <View>

        <Text style={{color:"#746cf4",fontSize:25}}>Task Managment</Text>
        <Text style={[style.fs2 ,{color:"#002055",fontSize:40}]} >Manage Your <Text style={{color:"#746cf4"}} >
           <Text>
            </Text> <Text style={{fontWeight:"700"}}>
                 Tasks </Text></Text>and quickly for results <Ionicons name="mail-forward" size={30} color="red" /></Text>
       
        </View>

      <View style={[style.pt3,{flexDirection:'row',marginTop:100,justifyContent:'space-between'}]}>
      <TouchableOpacity onPress={() => navigation.navigate('splach2')}>
          <Text style={{color:"#002055",fontSize:25}}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Tab')}>
          <Text style={{color:"#002055",fontSize:25,marginLeft:160}}>Forward</Text>
          </TouchableOpacity>
        <Text>
        </Text>
      </View>
      </View>
    </View>
    </>
  )
}

export default Splach3
