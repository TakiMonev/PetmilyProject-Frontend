import { useEffect, useState } from 'react';
import axios from 'axios';
import { ScrollView, StyleSheet, View } from 'react-native';
import ComponentAMD from '../../components/ComponentAMD';
import PetProfile from '../../components/AddPet/PetProfile';
import { useRoute } from '@react-navigation/native';
import { AddPetRoutes } from '../../navigations/routes';
import { nanoid } from 'nanoid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GRAY } from '../../colors';

const PetProfileListScreen = ({ navigation }) => {
  const route = useRoute();
  const [petProfiles, setPetProfiles] = useState([]);
  const { list, newPet } = route.params;
  const [select, setSelect] = useState(false);

  const handleLongPressed = () => {
    console.log('길게누르기');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = await AsyncStorage.getItem('email');
        const userUrl = `http://ec2-43-200-8-47.ap-northeast-2.compute.amazonaws.com:8080/users/${email}`;
        const userResponse = await axios.get(userUrl);
        const userData = userResponse.data;

        const inviter = userData.inviter;
        const petsUrl = `http://ec2-43-200-8-47.ap-northeast-2.compute.amazonaws.com:8080/pet/get-all/${inviter}`;
        const petsResponse = await axios.get(petsUrl);
        const petIds = petsResponse.data;

        const petProfilesData = await Promise.all(
          petIds.map(async (id) => {
            const imageUrl = await getImageUrl(inviter, id);
            return {
              id,
              imageUrl,
            };
          })
        );

        setPetProfiles(petProfilesData);
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
      id: nanoid(),
      petName: newPet.name,
      petAge: newPet.age,
      detailInfo: newPet.character,
    };
    setPetProfiles((prevProfiles) => [...prevProfiles, newPetProfile]);
  }, [newPet]);

  const getImageUrl = async (inviter, id) => {
    try {
      const imageUrl = `http://ec2-43-200-8-47.ap-northeast-2.compute.amazonaws.com:8080/pet/${inviter}/downloadImage/${id}.jpg`;
      const response = await axios.get(imageUrl);
      return response.data;
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
            imageUrl={profile.imageUrl}
          />
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: GRAY.LIGHT,
    justifyContent: 'center',
    height: 140,
    width: 360,
    borderRadius: 8,
    padding: 10,
  },
  container2: {
    flexDirection: 'column',
  },
  container3: {
    flexDirection: 'row',
  },
  nametitle: {
    flexDirection: 'row',
    borderRadius: 8,
    backgroundColor: YELLOW.DEFAULT,
    width: 220,
    height: 40,
    marginTop: 10,
    marginBottom: 15,
  },
  name: {
    fontSize: 23,
    color: WHITE,
    fontWeight: '500',
    paddingLeft: 15,
    paddingTop: 10,
  },
  age: {
    fontSize: 18,
    color: WHITE,
    marginLeft: 10,
    marginTop: 12,
  },
  content: {
    fontSize: 16,
    marginLeft: 10,
  },
  image: {
    borderRadius: 100,
    backgroundColor: WHITE,
    alignItems: 'center',
    width: 110,
    height: 110,
    marginRight: 10,
  },
});

export default PetProfile;
