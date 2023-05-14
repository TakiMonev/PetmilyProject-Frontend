import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import TabStackScreen from '../navigations/Nest';

const UserInfoScreen = ({ Navigation, routes }) => {
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      <TabStackScreen />;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      {/* 강아지 사진과 이름 */}
      <View style={styles.topContainer}>
        <Image
          style={styles.dogImage}
          source={require('../assets/pet_icon.png')}
        />
        <Text style={styles.nameText}>Max</Text>
      </View>

      {/* 등록된 양육자와 사진 */}
      <View style={styles.userContainer}>
        <Text> 등록된 양육자 </Text>
        <Image
          style={styles.userImage}
          source={require('../assets/defaultimage.png')}
        />
        <Text style={styles.userText}>John Doe</Text>
      </View>

      {/* 로그아웃과 회원탈퇴 버튼 */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>로그아웃</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>회원탈퇴</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 50,
  },
  topContainer: {
    alignItems: 'center',
  },
  dogImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  buttonContainer: {
    marginTop: 50,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UserInfoScreen;
