import { View, StyleSheet, Text } from 'react-native';
import CarePetList from './Component/CarePetList';
import EmptySchduleScreen from './Schdule/EmptySchduleScreen';
import { useState } from 'react';
import EmptyPhotoSceen from './Photo/EmptyPhotoScreen';

const MainCarePetScreen = () => {
  const [content, setContent] = useState('일정');

  const renderScreen = () => {
    if (content === '일정') {
      return <EmptySchduleScreen />;
    } else if (content === '사진') {
      return <EmptyPhotoSceen />;
    } else {
      return null; // Return null or another default screen/component if needed
    }
  };

  return (
    <View style={styles.container}>
      <CarePetList style={styles.viewpetcarelistscreen} />
      <View style={styles.container2}>{renderScreen()}</View>
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
  container2: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainCarePetScreen;
