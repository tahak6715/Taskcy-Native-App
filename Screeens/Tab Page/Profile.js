

import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import IconFont from 'react-native-vector-icons/Ionicons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import { Get, Post } from '../../config/ApiHandeling';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { dark } from '@mui/material/styles/createPalette';
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import style from '../../components/react_native_styles/Styling1';


// import { Container } from './styles';

const Profile = () => {
  return <View style={styles.container}>
  <View style={styles.header}>
  <FeatherIcon name="chevron-left" size={29} />
  <Text style={[styles.headerText]}>Profile</Text>
  
</View>

<View style={{backgroundColor:'black',borderRadius:200,maxWidth:120,minHeight:110,marginTop:40,marginLeft:110}}>
<Text></Text>
</View>

<View style={{marginTop:10, marginLeft:100}}>
    <Text style={{fontSize:30}}>Taha Khan</Text>
    <Text style={{marginLeft:20}}>@tahakhan23</Text>
    <TouchableOpacity style={{marginLeft:40,marginTop:4,padding:4,borderColor:'black',borderWidth:4,fontSize:15, maxWidth:50}}>
        <Text>Edit</Text>
    </TouchableOpacity>
</View>

<View style={{position:'absolute' , top:450}}>
    <View style={{display:'flex'}}>
    <Text style={{fontSize:24,marginBottom:10,marginLeft:35,marginRight:80}}>My Projects </Text>
    
    </View>
    <View>
    <Text style={{fontSize:24,marginBottom:10,marginLeft:35}}>Join a Team</Text>
    </View>
    <View>
    <Text style={{fontSize:24,marginBottom:10,marginLeft:35}}>Settings</Text>
    </View>
    <View>
    <Text style={{fontSize:24,marginBottom:10,marginLeft:35}}>My Tasks</Text>
    </View>
</View>




</View>
}

const styles = StyleSheet.create({
    S:{
        color:'#007AFF',
        padding: 4,
        borderColor: dark,
        fontSize:40
    },
    Inp: {
        width: '100%',
        borderWidth: 1,
    
        borderColor: '#003566',
        paddingStart: 15,
        fontSize: 20,
        borderRadius: 20,
        height: 60,
    
      }, InpView: {
        marginHorizontal: 35,
        marginTop: 25,
      },
    S1:{
        padding: 20,
        border:2,
        borderColor:dark,
        borderWidth:2,
        marginRight:270,
        marginLeft:20,
        position:'relative',
        left:120,
        borderRadius:150
        
        


    },
    texta: {
        position:'relative',
        top:-40,
        left:100,
        marginBottom:-80

    },
    abc: {
        fontWeight:'bold',
        fontSize:30,
        position:'relative',
        left:-20

    },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    color: 'black',
    marginLeft: 95,
  },
  inputContainer: {
    marginBottom: 25,
    marginTop:50
  },
  label: {
    fontSize: 16,
    marginLeft: 15,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#003566',
    paddingStart: 15,
    fontSize: 20,
    borderRadius: 20,
    height: 60,
  },
  teamMembers: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  member: {
    backgroundColor: '#e0e0e0',
    padding: 8,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  memberName: {
    fontSize: 16,
    marginLeft: 5,
  },
  addMemberButton: {
    borderWidth: 1,
    width: 50,
    height: 50,
    borderRadius: 25,
    paddingTop: 12,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  typeButtons: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    borderWidth: 2,
    borderRadius: 10,
    width: 100,
    height: 45,
    paddingTop: 6,
    textAlign: 'center',
    marginHorizontal: 15,
  },
  selectedButton: {
    borderColor: '#b9b7f8',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(248, 241, 241, 0.8)',
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  userItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  userItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addUserButton: {
    borderWidth: 1,
    width: 50,
    height: 50,
    borderRadius: 25,
    paddingTop: 12,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userItemText: {
    fontSize: 18,
    color: 'black',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  btn: {
    backgroundColor: '#756ef2',
    borderRadius: 20,
    // paddingHorizontal:30,
    marginHorizontal: 35,
    paddingVertical: 15,
    marginVertical: 5,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
  }
});


export default Profile;