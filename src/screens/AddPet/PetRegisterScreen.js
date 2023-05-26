import { Image, StyleSheet, View } from 'react-native';
import { AddPetRoutes, AuthRoutes } from '../../navigations/routes';
import { useState } from 'react';
import { GRAY } from '../../colors';
import ImagePickerComponent from '../../components/ImagePicker';
import SquareButton, { ColorTypes } from '../../components/Button';
import InputText from '../../components/InputText';
import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import 'react-native-get-random-values';
import { nanoid } from 'nanoid';

const PetRegisterScreen = ({ navigation, route }) => {
  const [imgUrl, setImgUrl] = useState(null);
  const [name, setName] = useState('멍멍이');
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('');
  const [age, setAge] = useState('');
  const [character, setCharater] = useState('');

  const [list, setList] = useState(['']);

  const onInsert = () => {
    const newPet = {
      id: nanoid(),
      name: name,
      gender: gender,
      species: species,
      age: age,
      character: character,
    };
    setList((prev) => [newPet, ...prev]);
    navigation.navigate(AddPetRoutes.LIST, { list: list, newPet: newPet });
  };

  const InsertUrl = (url) => {
    setImgUrl(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <View style={styles.rowContainer}>
          {imgUrl === null ? (
            <View style={styles.photoBox}></View>
          ) : (
            <Image source={{ uri: imgUrl }} style={styles.image} />
          )}
          <View style={{ marginTop: 130, marginLeft: -30 }}>
            <ImagePickerComponent
              width={50}
              height={50}
              InsertUrl={InsertUrl}
            />
          </View>
        </View>
        <View style={styles.rowContainer}>
          <Ionicons
            name="md-pencil"
            size={20}
            color="black"
            style={{ marginLeft: -25 }}
          />
          <TextInput
            style={styles.name}
            onChangeText={(text) => setName(text.trim())}
          >
            {name}
          </TextInput>
        </View>
      </View>
      <View>
        <InputText
          title="성별"
          placeholder={'예 암컷'}
          onChangeText={(text) => setGender(text.trim())}
        />

        <InputText
          title="나이"
          placeholder={'예 8세'}
          onChangeText={(text) => {
            setAge(text.trim());
          }}
        />

        <InputText
          title="구분"
          placeholder={'예 강아지'}
          onChangeText={(text) => setSpecies(text.trim())}
        />
        <InputText
          title="특징"
          placeholder={'예 산책을 좋아함'}
          onChangeText={(text) => setCharater(text.trim())}
        />
      </View>
      <SquareButton
        colorType={ColorTypes.YELLOW}
        text="등록하기"
        onPress={onInsert}
      />
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
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    flex: 1,
    width: '100%',
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
    backgroundColor: GRAY.LIGHT,
    borderRadius: 10,
    width: 150,
    height: 150,
  },
  name: {
    fontSize: 20,
    textAlign: 'center',
  },
  image: {
    borderRadius: 10,
    width: 150,
    height: 150,
  },
});

export default PetRegisterScreen;
