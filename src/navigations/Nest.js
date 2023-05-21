import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { createContext, useState } from 'react';
import UserInfoScreen from '../screens/UserInfoScreen';
import AddphotoScreen from '../screens/AfterPetInfo/AddPhotoScreen';
import InitPhotoScreen from '../screens/AfterPetInfo/InitPhotoScreen';
import PhotoViewScreen from '../screens/AfterPetInfo/PhotoViewScreen';
import FirstScreen from '../screens/FirstScreen';
import AddSchduleScreen from '../screens/CarePet/AddScheduleScreen';
import EmptyPetProfileScreen from '../screens/AddPet/EmptyPetProfileScreen';
import PetRegisterScreen from '../screens/AddPet/PetRegisterScreen';
import { AddPetRoutes } from './routes';
import PetProfileListScreen from '../screens/AddPet/PetProfileListScreen';
import PetMainScreen from '../screens/PetMainScreen';
import EmptySchduleScreen from '../screens/CarePet/Schdule/EmptySchduleScreen';
import MainCarePetScreen from '../screens/CarePet/MainCarePetScreen';

const TabStack = createBottomTabNavigator();
const AddPetStack = createStackNavigator();
const AlbumStack = createStackNavigator();
const SignInStack = createStackNavigator();
const AddPetScheduleStack = createStackNavigator();
const UserInfoStack = createStackNavigator();

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
        name={AddPetRoutes.EMPTY}
        component={EmptyPetProfileScreen}
        options={{ headerShown: false }}
      />
      <AddPetStack.Screen
        name={AddPetRoutes.REGISTER}
        component={PetRegisterScreen}
        options={{ headerShown: false }}
      />
      <AddPetStack.Screen
        name={AddPetRoutes.LIST}
        component={PetProfileListScreen}
        options={{ headerShown: false }}
      />
      <AddPetStack.Screen
        name={AddPetRoutes.EMPTY_SCHDULE}
        component={EmptySchduleScreen}
        options={{ headerShown: false }}
      />
      <AddPetStack.Screen
        name={AddPetRoutes.MAIN_CARE_PET}
        component={MainCarePetScreen}
        options={{ headerShown: false }}
      />
      <AddPetStack.Screen name="PetMain" component={UserInfoScreen} />
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

const UserInfoStackScreen = () => {
  return (
    <UserInfoStack.Navigator>
      <UserInfoStack.Screen
        name="내 정보"
        component={UserInfoScreen}
        options={{ title: '내 정보' }}
        // options={{ headerShown: false }}
      />
    </UserInfoStack.Navigator>
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
        <TabStack.Screen name="펫 추가하기" component={AddPetStackScreen} />
        <TabStack.Screen
          name="AlbumStack"
          component={AlbumStackScreen}
          options={{ headerShown: false }}
        />

        {
          <TabStack.Screen
            name="AddPetSchedule"
            component={AddPetScheduleStackScreen}
            options={{ headerShown: false }}
          />
        }

        <TabStack.Screen
          name="UserInfo"
          component={UserInfoStackScreen}
          options={{ headerShown: false }}
        />
      </TabStack.Navigator>
    </AuthContext.Provider>
  );
};

export default TabStackScreen;
