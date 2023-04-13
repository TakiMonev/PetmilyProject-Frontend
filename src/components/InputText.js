import { StyleSheet, Text, TextInput, View } from 'react-native';

const InputText = ({ title, placeholder, keyboardType }) => {
  return (
    <View style={styles.nest_container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.container2}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          keyboardType={keyboardType}
        ></TextInput>
      </View>
    </View>
  );
};
const Modify_InpuText = ({ title, placeholder }) => {
  return (
    <View style={styles.nest_container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.container2}>
        <TextInput style={styles.input} placeholder={placeholder}></TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  container2: {
    alignItems: 'center',
  },
  nest_container: {
    marginVertical: 10,
  },
  title: {
    alignItems: 'flex-start',
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    width: 350,
    padding: 10,
    borderRadius: 10,
    borderColor: '#a8a29e',
  },
  modify_input: {
    borderWidth: 1,
    width: 350,
    padding: 10,
    borderRadius: 10,
    borderColor: '#a8a29e',
  },
});

export default InputText;
