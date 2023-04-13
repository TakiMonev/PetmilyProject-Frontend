import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TextInput, View } from 'react-native';
import SquareButton, { ColorTypes } from '../components/Button';
import InputText from '../components/InputText';

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={SignUpstyles.container}>
      <InputText title="아이디 *" placeholder="예  petmily1234" />
      <InputText title="비밀번호 *" placeholder="비밀번호를 입력해주세요" />
      <InputText
        title="비밀번호 확인 *"
        placeholder="비밀번호를 한번 더 입력해주세요"
      />
      <InputText title="닉네임 *" placeholder="닉네임을 입력해주세요" />
      <InputText title="이메일 *" placeholder="예  petmily @ mily.com" />
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
