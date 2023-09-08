import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Team from './Tab Page/CreateTeam';
import Home from './Tab Page/Home';
import TodayTask from './Tab Page/TodayTask';
import CreatePage from './Tab Page/CreatePage';
import Message from './Tab Page/Message';
import Profile from './Tab Page/Profile';
import Ionicons from 'react-native-vector-icons/Foundation';
import Fonticons from 'react-native-vector-icons/FontAwesome5';
import Anticons from 'react-native-vector-icons/AntDesign';
import BottomHalfModal from '../components/Modal';
import React, { useState, useEffect,useRef  } from 'react';



const Tab = createBottomTabNavigator();




export default function TabNavigation(){

  const [isModalVisible, setIsModalVisible] = useState(false);
  const buttonRef = useRef();


  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

    return<>


<Tab.Navigator    screenOptions={{
  headerShown :false  ,
        tabBarShowLabel:false,
        tabBarStyle:{
          position:'absolute',
          elevation:0,
          backgroundColor:'white',
          height:90,
       
                  }
      }}>


        <Tab.Screen name="Home"options={{
       
      
        tabBarIcon:({focused})=>{
          return(
          <View style={{alignItems:'center',justifyContent:'center'}}>
        <Ionicons name="home" size={35}   style={{
         color:focused? '#756ef2' : "gray"
          
        }} />
          
         </View>
          )
        }
      }}  
      
      
        
        
        component={Home} />
        <Tab.Screen name="task" options={{
       
      
       tabBarIcon:({focused})=>{
         return(
         <View style={{alignItems:'center',justifyContent:'center', marginRight:40}}>
       <Fonticons name="folder-minus" size={30}   style={{
        color:focused? '#756ef2' : "gray"
       }} />
         
        </View>
         )
       }
     }}  component={TodayTask} />


        {/* <Tab.Screen name="Create"  options={{
        tabBarIcon:({focused})=>
        
        
        (
         
          <Anticons name="plus" size={30} style={{color:"white"}}   />
         
    
          ),
          tabBarButton:(props)=>(
            <CustomTabBarButton  {...props}  />
          )
        
      }} component={CreatePage} /> */}

        
        <Tab.Screen name="message" options={{
      
      
       tabBarIcon:({focused})=>{
         return(
         <View style={{alignItems:'center',justifyContent:'center', paddingLeft:40}}>
       <Anticons name="message1" size={30}   style={{
        color:focused? '#756ef2' : "gray"
       }} />
         
        </View>
         )
       }
     }}  component={Message} />
    <Tab.Screen name="profile" options={{
       
      
       tabBarIcon:({focused})=>{
         return(
         <View style={{alignItems:'center',justifyContent:'center'}}>
       <Fonticons name="user" size={30}   style={{
        color:focused? '#756ef2' : "gray"
       }} />
         
        </View>
         )
       }
     }}  component={Profile} />
   





      </Tab.Navigator>
    
    
<View >

{/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor:"red", position:"absolute",bottom:10}}>
   */}
    <TouchableOpacity 
  style={{ 
    flex:1,
    flexDirection:"row",
  justifyContent:"center",
alignItems:"center",
bottom:40,
...style.shadow}}
  onPress={toggleModal}>
    <View  style={{
      width:70,
    height:70,
    borderRadius:35,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#756ef2"}}>

    <Anticons name="plus" size={30} style={{color:"white"}}   />

    </View>
    </TouchableOpacity>

    <BottomHalfModal isVisible={isModalVisible} onClose={toggleModal} buttonRef={buttonRef} />
  </View>
  {/* </View> */}
    
    </>
}




const style= StyleSheet.create({

  shadow:{
    shadowOffset:{
      width:0,
      height:10,
    },
    shadowOpacity:0.25,
    shadowRadius:3.5,
    elevation:5   
  }
})