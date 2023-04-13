import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { useState } from 'react';
import PetRegister from '../screens/PetRegister';
import PetMainScreen from '../screens/PetMainScreen';
import AddPetScreen from '../screens/AfterPetInfo/AddPetScreen';
import PetRegisterScreen from '../screens/PetRegister';
import MypetsScreen from '../screens/AfterPetInfo/MyPetsScreen';
import AddphotoScreen from '../screens/AfterPetInfo/AddPhotoScreen';
import InitPhotoScreen from '../screens/AfterPetInfo/InitPhotoScreen';
import PhotoViewScreen from '../screens/AfterPetInfo/PhotoViewScreen';
import FirstScreen from '../screens/FirstScreen';
import { StackActions } from '@react-navigation/native';

const TabStack = createBottomTabNavigator();
``;
const SignInStack = createStackNavigator();
const AddPetStack = createStackNavigator();
const AlbumStack = createStackNavigator();

/*로그인*/
const SignInStackScreen = () => {
  return (
    <SignInStack.Navigator>
      <SignInStack.Screen name="First" component={FirstScreen} />
      <SignInStack.Screen name="SignIn" component={SignInScreen} />
      <SignInStack.Screen name="SignUp" component={SignUpScreen} />
    </SignInStack.Navigator>
  );
};
/*펫추가*/
const AddPetStackScreen = () => {
  return (
    <AddPetStack.Navigator>
      <AddPetStack.Screen
        name="AddPet"
        component={AddPetScreen}
        options={{ title: '펫관리' }}
      />
      <AddPetStack.Screen name="RegisterPet" component={PetRegisterScreen} />
      <AddPetStack.Screen name="PetMain" component={PetMainScreen} />
    </AddPetStack.Navigator>
  );
};
/*공유 사진첩*/
const AlbumStackScreen = () => {
  return (
    <AlbumStack.Navigator>
      <AddPetStack.Screen
        name="InitPhoto"
        component={InitPhotoScreen}
        options={{ title: '공유사진첩' }}
      />
      <AddPetStack.Screen name="AddPhoto" component={AddphotoScreen} />
      <AddPetStack.Screen name="Album" component={PhotoViewScreen} />
    </AlbumStack.Navigator>
  );
};

const TabStackScreen = () => {
  const [Login, setLogin] = useState(false);

  return (
    <>
      {Login === false ? (
        // <FirstScreen />
        <SignInStackScreen />
      ) : (
        <TabStack.Navigator>
          <TabStack.Screen name="ALBUM" component={HomeScreen} />
          <TabStack.Screen
            name="Main"
            component={AddPetStackScreen}
            options={{ headerShown: false }}
          />
          {/* <TabStack.Screen
            name="SignInStack"
            component={SignInStackScreen}
            options={{ headerShown: false }}
          /> */}
          <TabStack.Screen
            name="AlbumStack"
            component={AlbumStackScreen}
            options={{ headerShown: false }}
          />
          <TabStack.Screen name="ENTIRE" component={PetMainScreen} />
        </TabStack.Navigator>
      )}
    </>
  );
};

export default TabStackScreen;
