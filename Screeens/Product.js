import {React,useState} from 'react'
import { View , ImageBackground,ScrollView,ToastAndroid,TouchableOpacity, Image, Text, Button} from "react-native"
import style from '../components/react_native_styles/Styling1'
import Ionicons from 'react-native-vector-icons/Ionicons'
 
const Product = ({navigation}) => {

  return (
    <>
      <View >
      <Image
        resizeMode="contain"
        style={{ height: 324, width:"100%" }}
        source={require('../components/images/intro1.png')} // Replace with your image file path
      />
      <View style={[style.p2]}>
        <View>

        <Text style={{color:"#746cf4",fontSize:25}}>Task Managment</Text>
        <Text style={[style.fs2 ,{color:"#002055",fontSize:42}]} >Lets Create a <Text style={{color:"#746cf4"}} > <Text style={{fontWeight:"700"}}>
                 Space </Text></Text>for your workflows</Text>
        </View>

      <View style={[style.pt3,{flexDirection:'row',justifyContent:'space-between'}]}>
      <TouchableOpacity >
          <Text style={{color:"#002055",fontSize:20,marginTop:100}}>Skip</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Splash2')}>
          <Text style={{color:"#002055",fontSize:20,marginTop:100}}>Forward</Text>
          </TouchableOpacity>
      </View>
      </View>
    </View>
    </>
  )
}

export default Product
