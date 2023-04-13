import { Button, StyleSheet, Text, View } from 'react-native';
import Input, {
  InputTypes,
  KeyboardTypes,
  ReturnKeyTypes,
} from '../components/Input';
import { useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // 로컬 스토리지 사용을 위한 모듈

const SignInScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // 로그인 요청 보내기
    axios
      .post(
        'http://ec2-43-201-21-193.ap-northeast-2.compute.amazonaws.com:8080/auth/login',
        {
          email: email,
          password: password,
        }
      )
      .then((response) => {
        // 로그인 성공 시 로그인 토큰 저장 또는 다음 화면으로 이동 등의 작업 수행
        const token = response.data.token;

        // 토큰을 로컬 스토리지에 저장
        AsyncStorage.setItem('token', token)
          .then(() => {
            console.log('로그인 토큰 저장 완료:', token);

            // 다음 화면으로 이동 또는 필요한 작업 수행
            // navigation.navigate('다음 화면 이름');
          })
          .catch((error) => {
            console.error('로그인 토큰 저장 실패:', error);
          });
      })
      .catch((error) => {
        // 로그인 실패 시 에러 처리
        console.error('로그인 실패:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text>로그인</Text>
      <Input
        styles={{
          container: { marginBottom: 20, paddingHorizontal: 20 },
          input: { borderWidth: 1 },
        }}
        value={email}
        onChangeText={(text) => setEmail(text.trim())}
        inputType={InputTypes.EMAIL}
        returnKeyType={ReturnKeyTypes.NEXT}
      />
      <Input
        styles={{
          container: { marginBottom: 20, paddingHorizontal: 20 },
          input: { borderWidth: 1 },
        }}
        value={password}
        onChangeText={(text) => setPassword(text.trim())}
        inputType={InputTypes.PASSWORD}
        returnKeyType={ReturnKeyTypes.DONE}
      />
      <Button title="로그인하기" onPress={handleSignIn} />
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

export default SignInScreen;
