import React, { useState } from 'react';
import { Button, Pressable, StyleSheet, TextInput } from 'react-native';
import { Text, View } from 'react-native';
import axios from 'axios';
import DatePicker from '../../../components/DatePicker';
import TimePicker from '../../../components/TimePicker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddScheduleScreen = ({ navigation, route }) => {
  const [schedule, setSchedule] = useState('');
  const [date, setDate] = useState('');
  const [hm, setHm] = useState('');
  const [repeat, setRepeat] = useState('');
  const [alarm, setAlarm] = useState(false);
  const [inviter, setInviter] = useState('');
  const [petName, setPetName] = useState('');

  const handleScheduleSubmit = () => {
    // 서버에 일정 데이터를 POST 요청으로 보냄
    AsyncStorage.getItem('inviter')
      .then((inviter) => {
        AsyncStorage.getItem('token')
          .then((token) => {
            AsyncStorage.getItem('petName')
              .then((petName) => {
                axios
                  .post(
                    `http://ec2-43-200-8-47.ap-northeast-2.compute.amazonaws.com:8080/schedule/${inviter}/${petName}`,
                    {
                      schedule: schedule,
                      date: date,
                      hm: hm,
                      inviter: inviter,
                      petName: petName,
                      headers: {
                        Authorization: `Bearer ${token}`,
                      },
                    }
                  )
                  .then((response) => {
                    // 요청에 성공한 경우 처리 로직 작성
                    setSchedule(response.data.schedule);
                    setDate(response.data.date);
                    setHm(response.data.hm);

                    console.log(response.data);
                  })
                  .catch((error) => {
                    // 요청에 실패한 경우 에러 처리
                    console.log(inviter, petName);
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
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      {/* 일정 */}
      <View style={styles.box}>
        <Text style={styles.title}>일정</Text>
        <TextInput
          placeholder="일정추가"
          value={schedule}
          onChangeText={setSchedule}
          style={styles.input}
        />
      </View>

      {/* 날짜 */}
      <View style={styles.box}>
        <Text style={styles.title}>날짜</Text>
        <View style={styles.inputBox}>
          <DatePicker
            selectedDate={date}
            onDateChange={setDate}
            style={styles.input}
          />
        </View>
      </View>

      {/* 시간 */}
      <View style={styles.box}>
        <Text style={styles.title}>시간</Text>
        <View style={styles.inputBox}>
          <TimePicker
            selectedTime={hm}
            onTimeChange={setHm}
            style={styles.input}
          />
        </View>
      </View>

      {/* 반복 */}
      {/* <View style={styles.box}>
        <Text style={styles.title}>반복</Text>
        <TextInput
          placeholder="반복"
          value={repeat}
          onChangeText={setRepeat}
          style={styles.input}
        />
      </View> */}

      {/* 알림 */}
      {/* <View style={styles.box}>
        <Text style={styles.title}>알림</Text>
        <View style={styles.inputBox}>
          <Pressable onPress={() => setAlarm(!alarm)}>
            <Text>{alarm ? '켜짐' : '꺼짐'}</Text>
          </Pressable>
        </View>
      </View> */}

      {/* 등록 버튼 */}
      <Button title="등록" onPress={handleScheduleSubmit} />

      {/* 구분선 */}
      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  box: {
    flex: 1, // 각 항목의 박스 크기를 동일하게 설정
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginRight: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  inputBox: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    width: '100%',
    marginBottom: 20,
  },
});

export default AddScheduleScreen;
