import { useEffect, useState } from 'react';
import axios from 'axios';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import ComponentAMD from '../../components/ComponentAMD';
import PetProfile from '../../components/AddPet/PetProfile';
import { useRoute } from '@react-navigation/native';
import { AddPetRoutes, CarePetRoutes } from '../../navigations/routes';
import { nanoid } from 'nanoid';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PetProfileListScreen = ({ navigation }) => {
  const route = useRoute();
  const [petProfiles, setPetProfiles] = useState([]);
  var petProfiles2 = [];
  const [select, setSelect] = useState(false);
  var inviter;
  var id;
  var petData;
  var cnt = 0;
  //petcare 이동
  const onPress = () => {
    navigation.navigate(CarePetRoutes.MAIN_CARE_PET);
  };
  //펫 계정 수정 삭제
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

        petData = userData.pets;
        //inviter = userData.inviter;
        setPetProfiles(petData);
        petData.forEach(function (pet) {
          petProfiles2.push(pet);
          console.log(pet.inviter);
          getImageUrl(pet.inviter, pet.id);
        });
      } catch (error) {
        console.log('Error fetching pet data:', error);
      }
    };

    fetchData();
  }, []);

  const AddPress = () => {
    navigation.navigate(AddPetRoutes.REGISTER);
  };

  const getImageUrl = async (inviter, id) => {
    try {
      const email = await AsyncStorage.getItem('email');
      const url = `http://ec2-43-200-8-47.ap-northeast-2.compute.amazonaws.com:8080/pet/${inviter}/downloadImage/${id}.jpg`;
      //console.log(url);
      setPetProfiles((prevProfiles) =>
        prevProfiles.map((profile) => {
          if (profile.id === id) {
            return { ...profile, imgurl: url };
          }
          return profile;
        })
      );
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
            imgurl={profile.imgurl}
            handleLongPressed={handleLongPressed}
            onPress={onPress}
            select={select}
            id={profile.id}
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
