import { StyleSheet, Text, TextInput, View } from 'react-native';

const InputText = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput style={styles.input} placeholder="안녕"></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    marginBottom: 5,
    fontSize: 16,
    alignItems: 'baseline',
  },
  input: {
    borderWidth: 1,
    width: 320,
    padding: 10,
    borderRadius: 10,
    borderColor: '#a8a29e',
  },
});

export default InputText;
