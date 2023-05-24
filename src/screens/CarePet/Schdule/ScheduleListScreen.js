// import React from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   TouchableOpacity,
// } from 'react-native';

// const data = [
//   {
//     id: 1,
//     time: '오전 10시',
//     details: '산책',
//     assignee: '수행자: 아버지',
//   },
//   { id: 2, time: '오후 2시', details: '점심', assignee: '수행자: 어머니' },
// ];

// function ScheduleListScreen() {
//   const renderItem = ({ item }) => (
//     <TouchableOpacity style={styles.scheduleItem}>
//       <Text style={styles.time}>{item.time}</Text>
//       <Text style={styles.details}>{item.details}</Text>
//       <Text style={styles.assignee}>{item.assignee}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <FlatList
//       data={data}
//       renderItem={renderItem}
//       keyExtractor={(item) => item.id.toString()}
//       style={styles.container}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 30,
//   },
//   scheduleItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//     borderRadius: 20,
//     backgroundColor: '#f5f5f5',
//     padding: 20,
//   },
//   time: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   details: {
//     fontSize: 18,
//   },
//   assignee: {
//     fontSize: 16,
//     color: '#777',
//   },
// });

// export default ScheduleListScreen;

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

function ScheduleListScreen() {
  const [responseData, setResponseData] = useState([]);

  // 서버에서 일정 데이터를 가져오는 비동기 함수
  useEffect(() => {
    AsyncStorage.getItem('schedule')
      .then((inviter) => {
        AsyncStorage.getItem('token')
          .then((token) => {
            axios
              .get(
                `http://ec2-43-200-8-47.ap-northeast-2.compute.amazonaws.com:8080/schedule/${inviter}/초코`,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              )
              .then((response) => {
                // console.log(response.data[1].schedule);
                setResponseData(response.data);
              })
              .catch((error) => {
                console.error(error);
              });
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.scheduleItem}>
      <Text style={styles.details}>{item.schedule}</Text>
      <Text style={styles.time}>{item.hm}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={responseData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.container}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  scheduleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  details: {
    fontSize: 18,
  },
  time: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 120,
  },
});

export default ScheduleListScreen;
