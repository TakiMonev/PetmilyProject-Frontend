import { View, StyleSheet, Text } from 'react-native';
import CarePetList from './Component/CarePetList';
import EmptySchduleScreen from './Schdule/EmptySchduleScreen';
import { useState } from 'react';
import EmptyPhotoSceen from './Photo/EmptyPhotoScreen';
import EmptyRearerScreen from './Rearer/EmptyRearerScreen';
import EmptyHealthScreen from './Health/EmptyHealthScreen';
import ScheduleListScreen from './Schdule/ScheduleListScreen';
import ListPhotoScreen from './Photo/ListPhotoScreen';
import ListHealthScreen from './Health/ListHealthScreen';
import ListRearerScreen from './Rearer/ListRearerScreen';
import { CarePetRoutes } from '../../navigations/routes';

const MainCarePetScreen = ({ navigation }) => {
  const [content, setContent] = useState('일정');
  const [schdule, setSchdule] = useState('');
  const [health, setHealth] = useState(null);
  const [photo, setPhoto] = useState(true);
  const [rearer, setRearer] = useState(null);

  const onAddPress = () => {
    if (content === '사진첩') {
      return navigation.navigate(CarePetRoutes.ADD_PHOTO);
    } else if (content === '일정') {
      return navigation.navigate(CarePetRoutes.ADD_SCHDULE);
    } else if (content === '양육자') {
      return navigation.navigate(CarePetRoutes.ADD_SCHDULE);
    }
  };
  const onPress = () => {
    navigation.navigate(CarePetRoutes.VIEW_PHOTO);
  };
  const onChangeContent = (Content) => {
    setContent(Content);
  };

  const renderScreen = () => {
    if (content === '일정') {
      return schdule === null ? <EmptySchduleScreen /> : <ScheduleListScreen />;
    } else if (content === '사진첩') {
      return photo === null ? (
        <EmptyPhotoSceen />
      ) : (
        <ListPhotoScreen onPress={onPress} />
      );
    } else if (content === '양육자') {
      return rearer === null ? <EmptyRearerScreen /> : <ListRearerScreen />;
    } else {
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <CarePetList onChangeContent={onChangeContent} onAddPress={onAddPress} />
      <View style={styles.container2}>{renderScreen()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  container2: {
    flex: 3,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainCarePetScreen;
