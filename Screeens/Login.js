import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import IconFont from 'react-native-vector-icons/FontAwesome';
import { Get, Post } from "../Config/APIHandling";
import { useState } from "react";
export default function SignUp(props) {

  const [model, setModel] = useState({})
  
  let SendFormData=()=>{
    // Post("user/Sign",model)
    //   .then((res) => {
    //       console.log(res)
    //   // setList(res.data)
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     });

  }

  return (
    <ScrollView>

    <View >

      <View style={{ display: "flex", flexDirection: "row" }}>
        <View style={styles.Backset}>

          <IconFont name='chevron-left' size={29} />
        </View>
        <View style={styles.Backsettoptext}>

          <Text style={{ fontSize: 40, color: "black" }}> Sign Up</Text>
        </View>
      </View>

      <View style={{ marginTop: 20, marginLeft: 35 }}>

        <View>

          <Text style={styles.TitleText}>
            Create Account
          </Text>
          <Text style={styles.TitleText1}>

            Please Inter your information and
          </Text>
          <Text style={styles.TitleText1}>
            create your account
          </Text>
        </View>
      </View>


      <View style={styles.InpView}>
        <TextInput placeholder="Your Name" style={styles.Inp} onChangeText={(e)=>{setModel({ ...model,userName:e })}}/>

      </View>

      <View style={styles.InpView}>
        <TextInput placeholder="Your Email" style={styles.Inp} onChangeText={(e)=>{setModel({ ...model,email:e })}}/>

      </View>
      <View style={styles.InpView}>
        <TextInput placeholder="Enter your Password" style={styles.Inp} />

      </View>
      <Text style={{ textAlign: "right", fontSize: 19, color: "black", marginTop: 3 }} onChangeText={(e)=>{setModel({ ...model,password:e })}}>
        Forgot Password?
      </Text>
      <View>

        <TouchableOpacity style={styles.btn} onPress={SendFormData}>
          <Text style={styles.btnText} >Sign Up</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ textAlign: "center", fontSize: 16 }}>
        Signin with
      </Text>


      <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 15 }}>

        <View style={{ display: "flex", flexDirection: "row" }}>
          <TouchableOpacity style={styles.btn1}>
            <Text style={styles.btnText1}><IconFont name="apple" size={30} />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn1}>
            <Text style={styles.btnText1}><IconFont name="google" size={30} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ alignItems: 'center' ,marginVertical:20 }}>
        <Text>
          <View>
            <Text>

              Not Register Yet?  </Text>
          </View>
          <TouchableOpacity onPress={() => { props.navigation.navigate('SignUp') }} >
            <Text style={{ marginHorizontal: 5, color: '#756ef2' }} >
              Sign in
            </Text>
          </TouchableOpacity>
        </Text>

      </View>

      </View>
</ScrollView>
  )
}

const styles = StyleSheet.create({
  
  Backset: {
    
    borderColor: 'black',
    borderWidth: 2,
    width: 40,
    height: 40,
    borderRadius: 32,
    paddingTop: 3,
    paddingLeft: 3,
    marginTop: 10
  },
  Backsettoptext: {
    display: "flex",
    paddingLeft: 78,
  },
  TitleText: {
    fontSize: 35,
    color: 'black',
    fontWeight: 'bold'
  },
  TitleText1: {
    fontSize: 22

  }
  ,
  backImage: {
    flex: 1,
    resizeMode: "cover",
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
  btn: {
    backgroundColor: '#756ef2',
    borderRadius: 30,
    // paddingHorizontal:30,
    marginHorizontal: 35,
    paddingVertical: 15,
    marginVertical: 30,
  },
  btn1: {
    // backgroundColor: '#9da2a5',
    borderColor: "#9da2a5",
    borderWidth: 1,
    borderRadius: 10,
    // paddingHorizontal:30,
    width: 55,
    height: 55,
    paddingTop: 10,
    textAlign: "center",
    marginHorizontal: 15

  },

  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
  },
  btnText1: {
    color: '#003566',
    textAlign: 'center',
    fontSize: 22,
  },
})