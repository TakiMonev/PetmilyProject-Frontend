import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

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
          ownerName: data.name,
          ownerEmail: data.email,
        });
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="사진을 선택하세요." onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}

      {petInfo && (
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            {petInfo.name}
          </Text>
          <Text>{petInfo.age} 살</Text>
          <Text style={{ marginTop: 10, fontSize: 16 }}>
            Owner: {petInfo.ownerName} ({petInfo.ownerEmail})
          </Text>
        </View>
      )}
    </View>
  );
}

export default PetMainScreen;
