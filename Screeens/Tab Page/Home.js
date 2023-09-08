import React, { useState, useEffect } from 'react';
import CircularProgressWithLabel from '../../components/CircularProgress';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
} from 'react-native';
import IconFont from 'react-native-vector-icons/Ionicons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import { Get, Post } from '../../config/ApiHandeling';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useData } from '../../components/MiddleWayer';

export default function Home({ navigation }) {
  const [model, setModel] = useState([]);
//   const { setSharedData } = useData();
  const [DATATask, setDATATask] = useState([]);
  const [error, setError] = useState(null);

  const getTaskData = (teamid) => {
    Post('task/GetTask', { teamid })
      .then((res) => {
        if (res.data.status) {
          setDATATask(res.data.data);
        } else {
          setError('Failed to fetch data'); // Handle the error here
        }
      })
      .catch((err) => {
        console.log(err);
        setError('An error occurred'); // Handle the error here
      });
  };

  const GetProjectData = () => {
    Get('team/Team/')
      .then((res) => {
        if (res.data.status) {
          setModel(res.data.data);
        } else {
          setError('Failed to fetch data'); // Handle the error here
        }
      })
      .catch((err) => {
        console.log(err);
        setError('An error occurred'); // Handle the error here
      });
  };

  useEffect(() => {
    GetProjectData();
  }, []);

  const CreateNewTask = () => {
    const idArray = model.map((item) => item._id);
    if (idArray.length > 0) {
      setSharedData(idArray[0]);
      navigation.navigate('CreateTask');
    } else {
      setError('No data available for creating tasks'); // Handle the error here
    }
  };

  const CreateNewTeam = () => {
    const idArray = model.map((item) => item._id);
    setSharedData(idArray[0]);
      navigation.navigate('Team');
  
  };

    return (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
                <View>
                    <IconFont name="grid-outline" size={26} color={"black"} />
                </View>

                <View>
                    <Text style={{ color: "black" }}>Friday,26</Text>
                </View>
                <View>
                    <FontistoIcon name="bell" size={26} color={"black"} />
                </View>
            </View>

            <View style={{ marginLeft: 20 }}>

                <View style={{ marginHorizontal: 10, marginVertical: 40 }} >
                    <Text style={[styles.TopText, { color: "blue",fontSize: 35 }]}>Let's make a</Text>
                    <Text style={[styles.TopText, { color: "blue",fontSize: 35 }]}>habits together 🙌</Text>
                </View>

                <View style={{ flexDirection: "row" , height:160}}>
                    {model.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => { getTaskData(item._id) }}>
                            <View style={{ borderWidth: 1, borderColor: 'gray', width: 250, height: 150, borderRadius: 15, marginRight: 10, paddingLeft: 20 }}>
                                <Text style={{ fontSize: 26, color: "black", marginTop: 10 }}> {item.TeamName}</Text>
                                <Text style={{ color: "gray", fontSize: 11, marginTop: 5 }}>Design Team</Text>

                                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                    {item.TeamMember.slice(0, 3).map((member, subIndex) => (
                                        <View key={subIndex} style={{ marginLeft: subIndex !== 0 ? -15 : 0 }}>
                                            <View style={{ width: 30, height: 30, borderWidth: 1, borderRadius: 25 }}>
                                                {/* URL */}
                                            </View>
                                        </View>
                                    ))}
                                </View>


                            </View>
                        </TouchableOpacity>
                    ))}

                </View>


                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View>
                        <Text style={{ fontSize: 22 ,color:"black"}}> In progress</Text>
                    </View>

                    <View>
                        <FeatherIcon name="chevron-right" size={32} style={{ marginRight: 20 ,color:"black"}} />
                    </View>
                </View>
            </View>
            <View Style={{flexDirection: "row", justifyContent: "space-between" }}>
              <View style={{marginLeft: 45,marginTop:10}}>
                <Text >Productivity Mobile App</Text>
                <Text style={{color:'black',fontSize: 24}}>Create Detail Booking</Text>
                <Text>2 min ago</Text>
                {/* <CircularProgressWithLabel/> */}
              <View>
              
              </View>
                
              </View>
                



 {/* {DATATask.map((item, index) => (
          <View key={index}>
            {item.TaskName}
          </View>
        ))} */}





            </View>

        </>
    );
}

const styles = StyleSheet.create({
    Container: {},
    TopText: {
        fontSize: 26,
    },
});