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
const AddPetStack = createStackNavigator();
const AlbumStack = createStackNavigator();
const SignInStack = createStackNavigator();

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

const AlbumStackScreen = () => {
  return (
    <AlbumStack.Navigator>
      <AlbumStack.Screen
        name="InitPhoto"
        component={InitPhotoScreen}
        options={{ title: '공유사진첩' }}
      />
      <AlbumStack.Screen name="AddPhoto" component={AddphotoScreen} />
      <AlbumStack.Screen name="Album" component={PhotoViewScreen} />
    </AlbumStack.Navigator>
  );
};

const TabStackScreen = () => {
  const [isSignedIn, setIsSignedIn] = useState(false); // 로그인 상태를 저장하는 state

  // 로그인 되어 있지 않은 경우 FirstScreen을 보여줍니다.
  if (!isSignedIn) {
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
  }

  // 로그인 되어 있는 경우 TabStack을 보여줍니다.
  if (true) {
    return (
      <>
        <TabStack.Navigator>
          <TabStack.Screen name="ALBUM" component={HomeScreen} />
          <TabStack.Screen
            name="Main"
            component={AddPetStackScreen}
            options={{ headerShown: false }}
          />
          <TabStack.Screen
            name="AlbumStack"
            component={AlbumStackScreen}
            options={{ headerShown: false }}
          />
          <TabStack.Screen name="ENTIRE" component={PetMainScreen} />
        </TabStack.Navigator>
      </>
    );
  }
};

export default TabStackScreen;
