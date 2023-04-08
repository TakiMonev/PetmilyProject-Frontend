import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AddpetScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('RegisterPet')}>
        <MaterialCommunityIcons
          name="plus-circle-outline"
          size={50}
          color="black"
          margin={15}
        />
      </TouchableOpacity>
      <Text style={styles.text}>펫 추가하기</Text>
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
  },
});

export default AddpetScreen;
