import React from 'react';
import { View, StyleSheet, FlatList, Image, Pressable } from 'react-native';
import { CarePetRoutes } from '../../../navigations/routes';

const ListPhotoScreen = ({ navigation, onPress }) => {
  // 이미지 데이터 배열
  const imageList = [
    { id: '1', image: require('../../../assets/dog.jpg') },
    { id: '2', image: require('../../../assets/dog.jpg') },
    { id: '3', image: require('../../../assets/dog.jpg') },
    { id: '4', image: require('../../../assets/dog.jpg') },
    { id: '5', image: require('../../../assets/dog.jpg') },
    { id: '6', image: require('../../../assets/dog.jpg') },
    { id: '7', image: require('../../../assets/dog.jpg') },
    { id: '8', image: require('../../../assets/dog.jpg') },
    { id: '9', image: require('../../../assets/dog.jpg') },
    { id: '10', image: require('../../../assets/dog.jpg') },
    { id: '11', image: require('../../../assets/dog.jpg') },
    { id: '12', image: require('../../../assets/dog.jpg') },
    // 더 많은 이미지 데이터 추가...
  ];

  // 각 이미지 항목을 렌더링하는 함수
  const renderItem = ({ item }) => (
    <Pressable onPress={onPress}>
      <Image source={item.image} style={styles.image} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={imageList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  image: {
    width: 125,
    height: 125,
    margin: 1,
  },
});

export default ListPhotoScreen;
