import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AuthRoutes } from '../navigations/routes';
import Input, {
  InputTypes,
  KeyboardTypes,
  ReturnKeyTypes,
} from '../components/Input';
import Input2, {
  InputTypes2,
  KeyboardTypes2,
  ReturnKeyTypes2,
} from '../components/Input2';
import { useState } from 'react';
import { BLACK, MAINCOLOR } from '../colors';
import ImagePickerComponent from '../components/ImagePicker';
import SquareButton, { ColorTypes } from '../components/Button';
import InputText from '../components/InputText';
import { TextInput } from 'react-native-gesture-handler';

const PetRegisterScreen = ({ navigation, route }) => {
  const [petImg, setPetImg] = useState('');
  const [petName, setPetName] = useState('');
  const [petAge, setPetAge] = useState('');
  const [petInfo, setPetInfo] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <View style={styles.photoBox}></View>
        <TextInput style={styles.name}>이름</TextInput>
      </View>
      <View>
        <InputText title="성별" placeholder={'예 암컷'} />
        <InputText title="나이" placeholder={'예 암컷'} />
        <InputText title="구분" placeholder={'예 암컷'} />
        <InputText title="특징" placeholder={'예 암컷'} />
      </View>
      <SquareButton colorType={ColorTypes.YELLOW} text="등록하기" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  photoContainer: {
    flex: 1,
    marginTop: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  photoBox: {
    backgroundColor: MAINCOLOR.BRIGHTGRAY,
    borderRadius: 10,
    width: 150,
    height: 150,
  },
  name: {
    fontSize: 20,
  },
});

export default PetRegisterScreen;
