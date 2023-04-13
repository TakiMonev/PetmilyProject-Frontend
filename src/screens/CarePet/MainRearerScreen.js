import { StyleSheet, Text, View } from 'react-native';

const MainRearerScreen = () => {
  return (
    <View style={styles.container}>
      <Text>양육자</Text>
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

export default MainRearerScreen;
