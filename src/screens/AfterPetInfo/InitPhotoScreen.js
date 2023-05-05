import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SquareButton, { ColorTypes } from '../../components/Button';
import { MAINCOLOR } from '../../colors';

const InitPhotoScreen = ({ navigation, route }) => {
  return (
    /* <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('AddPhoto')}>
        <MaterialCommunityIcons
          name="plus-circle-outline"
          size={50}
          color="black"
          margin={15}
        />
      </TouchableOpacity>
      <Text style={styles.text}>사진 등록하기</Text>
  </View> */
    <View style={styles.container}>
      <Image
        source={require('../../assets/pet_icon.png')}
        style={{ width: 180, height: 180, marginBottom: 40 }}
      />

      <SquareButton
        colorType={ColorTypes.YELLOW}
        text="사진추가하기"
        onPress={() => navigation.navigate('AddPhoto')}
      />
      <Text style={styles.text}>
        등록 된 사진이 없습니다{'\n'}사진을 추가하고 함께 공유해보세요
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

export default InitPhotoScreen;
