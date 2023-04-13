import { StyleSheet, Text, View } from 'react-native';
import { MAINCOLOR } from '../../colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthRoutes } from '../../navigations/routes';
import SelectPetCare from '../../components/SelectPetCare';

const MainSchduleScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SelectPetCare />
      <Text>일정</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  colContainer: {
    flexDirection: 'column',
  },
  circle: {
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: MAINCOLOR.BRIGHTGRAY,
    marginRight: 20,
  },
  name: {
    fontSize: 30,
    fontWeight: '500',
    marginBottom: 20,
  },
});

export default MainSchduleScreen;
