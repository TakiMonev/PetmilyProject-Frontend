import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Text, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ScheduleList from './ScheduleList';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { TouchableOpacity } from 'react-native';

function PetMainScreen() {
  const [image, setImage] = useState(null);

  // 펫 정보를 나타낼 상태 변수
  const [petInfo, setPetInfo] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => response.json())
      .then((data) => {
        setPetInfo({
          name: '퍼피',
          age: 3,
        });
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.imageContainer}>
          <Button title="사진을 선택하세요." onPress={pickImage} />
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          ) : (
            <Image
              source={require('../assets/defaultimage.png')}
              style={{ width: 200, height: 200 }}
            />
          )}
        </View>
        {petInfo && (
          <View style={styles.infoContainer}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
              {petInfo.name}
              {'\n'}
            </Text>
            <Text>{petInfo.age} 살</Text>
          </View>
        )}
      </View>
      <View style={styles.bottomContainer}>
        <Text style={{ fontSize: 25 }}>일정</Text>
        <ScheduleList />
      </View>

      {/* TouchableOpacity */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => {
          // 버튼 클릭시 동작할 내용 추가
        }}
      >
        <Icon name="add" color="#ffffff" size={30} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'flex-start',
  },
  infoContainer: {
    alignItems: 'flex-end',
  },
  bottomContainer: {
    marginTop: 45,
    marginLeft: 15,
  },
  floatingButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#FF4500',
    borderRadius: 30,
    elevation: 8,
  },
});

export default PetMainScreen;
