import { Button, StyleSheet, Text, View } from 'react-native';
import { AuthRoutes } from '../navigations/routes';
import Input, {
  InputTypes,
  KeyboardTypes,
  ReturnKeyTypes,
} from '../components/Input';
import { useState } from 'react';
import TabStackScreen from '../navigations/Nest';

const SignInScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
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
      <Button title="Sign In" onPress={<TabStackScreen />} />
      <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
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
