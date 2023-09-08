/* eslint-disable prettier/prettier */
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native';
import styless from './components/react_native_styles/styling';
import Buttona from './components/basic_comps/Button';
import Input from './components/basic_comps/Input';
import Login from './Screeens/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signupa from './Screeens/Signup';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Splash from './Screeens/Splash';
import AppNavigator from './Screeens/IntroSlider';
import Home1 from './Screeens/Home1';
import Splach2 from './Screeens/Splach2';
import Splach3 from './Screeens/Splach3';
import Product from './Screeens/Product';
import SignUp from './Screeens/Login';
import AddTask from './Screeens/AddTask';
import Team from './Screeens/Tab Page/CreateTeam';
import Home from './Screeens/Tab Page/Home';
import BottomNav from './Screeens/BottomNav';
import TabNavigation from './Screeens/NvBar';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const App = () => {
  

  return (
  //   <SafeAreaView>
  // <View>
  //   <Text style={ styless.textDanger}>taha</Text>
  // <Buttona style={[styless.m5,styless.textSecondary]} color={styless._dark} title="heloo world"/>
  // <Input style={[styless.mt5,styless.bgBlack,styless.textDanger]} />
  // </View>
  // </SafeAreaView>
  <NavigationContainer>
    <Stack.Navigator  initialRouteName="Splash">
      <Stack.Screen options={{ headerShown: false,}} name="Splash"  component={Splash} />
      <Stack.Screen options={{ headerShown: false,}}  name="Product" component={Product}/>
      <Stack.Screen options={{ headerShown: false,}}  name="Splash2" component={Splach2}/>
      <Stack.Screen options={{ headerShown: false,}}  name="splash3" component={Splach3}/>
      {/* <Stack.Screen  options={{ headerShown: false,}} name="BottomNav" component={BottomNav}/> */}
      <Stack.Screen   name="SignUp" component={SignUp}/>
      <Stack.Screen options={{ headerShown: false,}}   name="Team" component={Team}/>
      <Stack.Screen options={{ headerShown: false,}}   name="Home" component={Home}/>
      <Stack.Screen options={{ headerShown: false,}}   name="Tab" component={TabNavigation}/>
      
      
       
    </Stack.Navigator>
  
  </NavigationContainer>
  )
};

export default App;
