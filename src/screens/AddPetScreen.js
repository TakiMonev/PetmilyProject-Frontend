import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SquareButton, { ColorTypes } from '../components/Button';
import { color } from 'react-native-reanimated';
import { MAINCOLOR } from '../colors';

const AddpetScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="plus-circle-outline"
          size={50}
          color="black"
          margin={15}
        />
      </TouchableOpacity>

      <SquareButton
        colorType={ColorTypes.YELLOW}
        text="펫추가하기"
        onPress={() => navigation.navigate('RegisterPet')}
      />
      <Text style={styles.text}>
        등록 된 펫이 없습니다{'\n'}펫을 등록하고 일정을 함께 관리해보세요
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {},
  text: {
    fontSize: 15,
    textAlign: 'center',
    color: MAINCOLOR.DARKGRAY,
  },
});

export default AddpetScreen;