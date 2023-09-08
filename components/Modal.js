// BottomHalfModal.js
import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'


const BottomHalfModal = ({ isVisible, onClose, buttonRef, navigation }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContainer}>
        {/* Content of your modal */}
        <View style={styles.modalContent}>
          {/* <Text>Your Modal Content Goes Here</Text> */}
          {/* Add your three elements here */}
          <TouchableOpacity style={[styles.button,]}>
            <View>
                <AntDesign style={{position:'relative',top:24,color:'blue',left:-25,marginRight:40}} name="form" size={25}/>
            <Text style={{fontSize:20,fontWeight:'bold',color:'blue',marginLeft:10}}>Create Task</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
          <AntDesign style={{position:'relative',top:24,color:'blue',left:-25}} name="pluscircleo" size={25}/>
            <Text style={{fontSize:20,fontWeight:'bold',color:'blue',marginLeft:10}}>Create Project</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} >
          <AntDesign style={{position:'relative',top:24,color:'blue',left:-25}} name="team" size={25}/>
            <Text style={{fontSize:20,fontWeight:'bold',color:'blue',marginLeft:10}}>Create Team</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="time-outline" size={25} style={{position:'relative',top:24,color:'blue',left:-25}}/>
            <Text style={{fontSize:20,fontWeight:'bold',color:'blue',marginLeft:10}}>Create Event</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text><Entypo name="cross" size={40}/></Text>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    width: '100%',
    padding: 16,
    
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  button: {
    alignItems: 'start',
    padding: 10,
    marginLeft:45
  },
  closeButton: {
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    padding: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default BottomHalfModal;