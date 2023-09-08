import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Button,
  StyleSheet,
  Modal,
  FlatList,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Get } from '../../config/ApiHandeling';
import style from '../../components/react_native_styles/Styling1';
import { dark } from '@mui/material/styles/createPalette';

const initialModel = {
  TeamName: '',
  select: 'Private',
  TeamMember: [], // Use an array to store selected team members
};

export default function Team() {
  const [model, setModel] = useState(initialModel);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedButton, setSelectedButton] = useState([]);
  
  let GetAllUserData = () => {


    Get("user/user", model)
      .then((res) => {
        
  
        // console.log(res.data.data)
        setSelectedButton([...res.data.data])
  
      })
      .catch((err) => {
        console.log(err)
      });
  }
    useEffect(() => {
      // Fetch user data when the component mounts
      GetAllUserData();
    }, []);
  const handleUserSelect = (user) => {
    // Add the selected user to the TeamMember array
    setModel({ ...model, TeamMember: [...model.TeamMember, user] });
    setModalVisible(false);
  };
  
  
  let SendCreateData= ()=>{
    console.log(model)  
  
  console.log(typeof(model.TeamMember))
  
  }

  return (
    <View style={[styles.container]}>
      <View style={styles.header}>
        <FeatherIcon name="chevron-left" size={29} />
        <Text style={styles.headerText}>Create Team</Text>
      </View>
      <View style={[style.my5,styles.S1,]}>
        <Text style={[style.fs5,styles.S]}>S</Text>
      </View>
      <View style={styles.texta}>
        <Text style={styles.abc}>Upload Logo File</Text>
        <Text>Your logo will Publish always</Text> 
      </View>
      <View style={[styles.inputContainer]}>
        <Text style={styles.label}>Team Name</Text>
        <TextInput
          placeholder="Team Name"
          style={styles.input}
          onChangeText={(text) => setModel({ ...model, TeamName: text })}
        />
      </View>
      <View style={[]}>
        <Text style={styles.label}>Team Members</Text>
        <View style={styles.teamMembers}>
          {model.TeamMember.map((member) => (
            <View key={member._id} style={styles.member}>
              <Text style={styles.memberName}>{member.userName}</Text>
            </View>
          ))}
          <TouchableOpacity
            style={styles.addMemberButton}
            onPress={() => setModalVisible(true)}
          >
            <FeatherIcon name="plus" size={26} color="#756ef2" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Type</Text>
        <View style={styles.typeButtons}>
          <TouchableOpacity
            style={[
              styles.button,
              model.select === 'Private' && styles.selectedButton,
            ]}
            onPress={() => setModel({ ...model, select: 'Private' })}
          >
            <Text style={styles.buttonText}>Private</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              model.select === 'Public' && styles.selectedButton,
            ]}
            onPress={() => setModel({ ...model, select: 'Public' })}
          >
            <Text style={styles.buttonText}>Public</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              model.select === 'Secret' && styles.selectedButton,
            ]}
            onPress={() => setModel({ ...model, select: 'Secret' })}
          >
            <Text style={styles.buttonText}>Secret</Text>
          </TouchableOpacity>
        </View>
      </View>



<View>

<TouchableOpacity style={styles.btn} onPress={()=>SendCreateData()}>
  <Text style={styles.btnText} >Create Team</Text>
</TouchableOpacity>
</View>


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Select a User</Text>
          <FlatList
            data={selectedButton}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.userItem}
                onPress={() => handleUserSelect(item)}
              >
                <View style={styles.userItemContent}>
                  <TouchableOpacity style={styles.addUserButton}>
                    <FeatherIcon name="plus" size={26} color="black" />
                  </TouchableOpacity>
                  <Text style={styles.userItemText}>{item.userName}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    S:{
        color:'#007AFF',
        padding: 4,
        borderColor: dark,
        fontSize:40
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
    fontSize: 40,
    color: 'black',
    marginLeft: 15,
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