import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TextInput, View } from 'react-native';
import SquareButton, { ColorTypes } from '../components/Button';
import InputText from '../components/InputText';

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={SignUpstyles.container}>
      <InputText title="아이디" />
      <SquareButton colorType={ColorTypes.YELLOW} text="가입하기" />
    </View>
  );
};

const SignUpstyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignUpScreen;
