import { StyleSheet, View, Text } from 'react-native';

const MainHealthScreen = () => {
  return (
    <View style={styles.container}>
      <Text>건강관리</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainHealthScreen;
