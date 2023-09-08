import {React,useState} from 'react'
import { View , ImageBackground,ScrollView,ToastAndroid,TouchableOpacity, Image, Text, Button} from "react-native"
import style from '../components/react_native_styles/Styling1'
import Ionicons from 'react-native-vector-icons/Ionicons';
 
const Splach2 = ({navigation}) => {

  return (
    <>
      <View >
      <Image
        resizeMode="contain"
        style={{ height: 324, width:"100%" }}
        source={require('../components/images/intro2.png')} // Replace with your image file path
      />
      <View style={[style.p2]}>
        <View>

        <Text style={{color:"#746cf4",fontSize:25}}>Task Managment</Text>
        <Text style={[style.fs2 ,{color:"#002055",fontSize:40}]} >Work msore<Text style={{color:"#746cf4"}} >
           <Text>
            </Text>  <Text style={{fontWeight:"700"}}>
                 Structured </Text></Text>and Organized <Ionicons name="mail-forward" size={30} color="red" /></Text>
       
        </View>

      <View style={[style.pt3,{flexDirection:'row',justifyContent:'space-between'}]}>
      <TouchableOpacity onPress={() => navigation.navigate('Product')}>
          <Text style={{color:"#002055",fontSize:25,marginTop:100}}>Skip</Text>
          </TouchableOpacity>
        <Text>
        {/* <Ionicons name="mail-forward" size={30} color="red" /> */}
        <TouchableOpacity onPress={() => navigation.navigate('splash3')}>
          <Text style={{color:"#002055",fontSize:25,marginTop:100}}>Forward</Text>
          </TouchableOpacity>
        </Text>
      </View>
      </View>
    </View>
    </>
  )
}

export default Splach2
