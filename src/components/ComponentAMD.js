import { Pressable, StyleSheet, View } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { YELLOW } from '../colors';

//등록 수정 삭제 아이콘
const ComponentAMD = ({ navigation, onPress }) => {
  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={onPress}>
          <Entypo name="circle-with-plus" size={40} color={YELLOW.DARK} />
        </Pressable>
        <MaterialCommunityIcons
          name="pencil-circle"
          size={40}
          color={YELLOW.DARK}
        />
        <MaterialCommunityIcons
          name="delete-circle"
          size={40}
          color={YELLOW.DARK}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    margin: 15,
  },
});

export default ComponentAMD;
