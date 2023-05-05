import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { useState } from 'react';
import PetMainScreen from '../screens/PetMainScreen';
import AddPetScreen from '../screens/AddPetScreen';
import PetRegisterScreen from '../screens/PetRegister';
import MypetsScreen from '../screens/AfterPetInfo/MyPetsScreen';
import AddphotoScreen from '../screens/AfterPetInfo/AddPhotoScreen';
import InitPhotoScreen from '../screens/AfterPetInfo/InitPhotoScreen';
import PhotoViewScreen from '../screens/AfterPetInfo/PhotoViewScreen';
import FirstScreen from '../screens/FirstScreen';
import React from 'react';
import { View } from 'react-native';

const TabStack = createBottomTabNavigator();
``;
//const SignInStack = createStackNavigator();
const AddPetStack = createStackNavigator();
const AlbumStack = createStackNavigator();

/*로그인
const SignInStackScreen = () => {
  return (
    <SignInStack.Navigator>
      <SignInStack.Screen
        name="First"
        component={FirstScreen}
        options={{ headerShown: false }}
      />
      <SignInStack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ title: '로그인' }}
      />
      <SignInStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ title: '회원가입' }}
      />
    </SignInStack.Navigator>
  );
};
*/
/*펫추가*/
const AddPetStackScreen = () => {
  return (
    <AddPetStack.Navigator>
      <AddPetStack.Screen
        name="AddPet"
        component={AddPetScreen}
        options={{ headerShown: false }}
      />
      <AddPetStack.Screen
        name="RegisterPet"
        component={PetRegisterScreen}
        options={{ title: '펫등록' }}
      />
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

export const TabStackScreen = () => {
  return (
    <>
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
    </>
  );
};

export default TabStackScreen;
