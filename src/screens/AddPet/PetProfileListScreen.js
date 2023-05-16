import { useEffect, useState } from 'react';
import axios from 'axios';
import { ScrollView, StyleSheet, View } from 'react-native';
import ComponentAMD from '../../components/ComponentAMD';
import PetProfile from '../../components/AddPet/PetProfile';
import { useRoute } from '@react-navigation/native';
import { AddPetRoutes } from '../../navigations/routes';
import { nanoid } from 'nanoid';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PetProfileListScreen = ({ navigation }) => {
  const route = useRoute();
  const [petProfiles, setPetProfiles] = useState([]);
  const { list, newPet } = route.params;
  const [select, setSelect] = useState(false);
  var inviter;
  var id;

  const handleLongPressed = () => {
    console.log('길게누르기');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = await AsyncStorage.getItem('email');
        const url = `http://ec2-43-200-8-47.ap-northeast-2.compute.amazonaws.com:8080/users/${email}`;

        const response = await axios.get(url);
        const userData = response.data;

        const petData = userData.pets;
        inviter = userData.inviter;
        setPetProfiles(petData);
      } catch (error) {
        console.log('Error fetching pet data:', error);
      }
    };

    fetchData();
  }, []);

  const AddPress = () => {
    navigation.navigate(AddPetRoutes.REGISTER);
  };

  useEffect(() => {
    const newPetProfile = {
      // id: nanoid(),
      petName: newPet.name,
      // gender: newPet.gender,
      // species: newPet.species,
      petAge: newPet.age,
      detailInfo: newPet.character,
    };
    setPetProfiles((prevProfiles) => [...prevProfiles, newPetProfile]);
  }, [newPet]);

  const getImageUrl = async (id) => {
    try {
      const email = await AsyncStorage.getItem('email');
      const url = `http://ec2-43-200-8-47.ap-northeast-2.compute.amazonaws.com:8080/pet/${inviter}/downloadImage/${id}.jpg`;
      const response = await axios.get(url);
      return response.data.imageUrl;
    } catch (error) {
      console.log('Error fetching pet image:', error);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <ComponentAMD onPress={AddPress} navigation={navigation} />
      </View>
      <ScrollView style={styles.scroll}>
        {petProfiles.map((profile) => (
          <PetProfile
            key={profile.id}
            name={profile.petName}
            age={profile.petAge}
            species={profile.detailInfo}
            gender={profile.gender}
            character={profile.character}
            handleLongPressed={handleLongPressed}
            select={select}
            getImageUrl={getImageUrl}
          />
        ))}
      </ScrollView>
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
  scroll: {
    flex: 1,
  },
});

export default PetProfileListScreen;
