import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { createContext, useState } from 'react';
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
import AddSchduleScreen from '../screens/CarePet/AddScheduleScreen';

const TabStack = createBottomTabNavigator();
const AddPetStack = createStackNavigator();
const AlbumStack = createStackNavigator();
const SignInStack = createStackNavigator();
const AddPetScheduleStack = createStackNavigator();

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const signIn = () => {
    setIsSignedIn(true);
  };

  const signOut = () => {
    setIsSignedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isSignedIn, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

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

const AddPetScheduleStackScreen = () => {
  return (
    <AddPetScheduleStack.Navigator>
      {/* <AddPetScheduleStack.Screen
        name="schedulescreen"
        component={PetMainScreen}
        options={{ title: '펫일정' }}
      /> */}
      <AddPetScheduleStack.Screen
        name="펫 일정"
        component={PetMainScreen}
        options={{ headerShown: false }}
      />
      <AddPetScheduleStack.Screen
        name="AddPetSchedule"
        component={AddSchduleScreen}
        options={{ title: '일정 추가' }}
      />
    </AddPetScheduleStack.Navigator>
  );
};

const TabStackScreen = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const authContext = {
    signIn: () => setIsSignedIn(true),
    signOut: () => setIsSignedIn(false),
  };

  if (!isSignedIn) {
    return (
      <AuthContext.Provider value={authContext}>
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
      </AuthContext.Provider>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
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
        <TabStack.Screen
          name="AddPetSchedule"
          component={AddPetScheduleStackScreen}
          options={{ headerShown: false }}
        />
      </TabStack.Navigator>
    </AuthContext.Provider>
  );
};

export default TabStackScreen;
