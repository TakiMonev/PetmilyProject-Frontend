import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { createContext, useState } from 'react';
import UserInfoScreen from '../screens/UserInfoScreen';
import FirstScreen from '../screens/FirstScreen';
import AddScheduleScreen from '../screens/CarePet/Schdule/AddScheduleScreen';
import EmptyPetProfileScreen from '../screens/AddPet/EmptyPetProfileScreen';
import PetRegisterScreen from '../screens/AddPet/PetRegisterScreen';
import { AddPetRoutes, CarePetRoutes } from './routes';
import PetProfileListScreen from '../screens/AddPet/PetProfileListScreen';
import PetMainScreen from '../screens/PetMainScreen';
import EmptySchduleScreen from '../screens/CarePet/Schdule/EmptySchduleScreen';
import MainCarePetScreen from '../screens/CarePet/MainCarePetScreen';
import AddphotoScreen from '../screens/CarePet/Photo/AddPhotoScreen';
import ViewPhotoScreen from '../screens/CarePet/Photo/ViewPhotoScreen';
import EmptyPhotoSceen from '../screens/CarePet/Photo/EmptyPhotoScreen';
import ListPhotoScreen from '../screens/CarePet/Photo/ListPhotoScreen';
import ViewCalender from '../screens/Calender/ViewCalender';
import ShowPetProfileScreen from '../screens/AddPet/ShowPetProfileScreen';
import { Ionicons } from '@expo/vector-icons';

const TabStack = createBottomTabNavigator();
const AddPetStack = createStackNavigator();
const AlbumStack = createStackNavigator();
const SignInStack = createStackNavigator();
const AddPetScheduleStack = createStackNavigator();
const UserInfoStack = createStackNavigator();

export const AuthContext = createContext();
export const PetContext = createContext();

//로그인 로그아웃
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
      {/* AddPet */}
      <AddPetStack.Screen
        name={AddPetRoutes.EMPTY}
        component={EmptyPetProfileScreen}
        options={{ headerShown: false }}
      />
      <AddPetStack.Screen
        name={AddPetRoutes.REGISTER}
        component={PetRegisterScreen}
        options={{ title: '펫등록' }}
      />
      <AddPetStack.Screen
        name={AddPetRoutes.LIST}
        component={PetProfileListScreen}
        options={{ title: '메인' }}
      />
      {/* Care Pet */}
      <AddPetStack.Screen
        name={CarePetRoutes.MAIN_CARE_PET}
        component={MainCarePetScreen}
        options={{ headerShown: false }}
      />
      {/* Care Pet - 일정 */}
      <AddPetStack.Screen
        name={CarePetRoutes.EMPTY_SCHDULE}
        component={EmptySchduleScreen}
        options={{ headerShown: false }}
      />
      <AddPetStack.Screen
        name={CarePetRoutes.ADD_SCHDULE}
        component={AddScheduleScreen}
        options={{ headerShown: false }}
      />
      {/* Care Pet - 사진첩 */}
      <AddPetStack.Screen
        name={CarePetRoutes.EMPTY_PHOTO}
        component={EmptyPhotoSceen}
        options={{ headerShown: false }}
      />
      <AddPetStack.Screen
        name={CarePetRoutes.LIST_PHOTO}
        component={ListPhotoScreen}
        options={{ headerShown: false }}
      />
      <AddPetStack.Screen
        name={CarePetRoutes.ADD_PHOTO}
        component={AddphotoScreen}
        options={{ title: '사진등록' }}
      />
      <AddPetStack.Screen
        name={CarePetRoutes.VIEW_PHOTO}
        component={ViewPhotoScreen}
        options={{ title: '사진상세' }}
      />
      <AddPetStack.Screen name="PetMain" component={UserInfoScreen} />
    </AddPetStack.Navigator>
  );
};

const AlbumStackScreen = () => {
  return (
    <AlbumStack.Navigator>
      <AlbumStack.Screen
        name={CarePetRoutes.ADD_PHOTO}
        component={AddphotoScreen}
      />
      <AlbumStack.Screen
        name={CarePetRoutes.VIEW_PHOTO}
        component={ViewPhotoScreen}
      />
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
        component={AddScheduleScreen}
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
      <TabStack.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === '메인') {
              iconName = 'home-outline'; // 메인 아이콘의 이름
            } else if (route.name === '캘린더') {
              iconName = 'calendar-outline'; // 캘린더 아이콘의 이름
            } else if (route.name === '커뮤니티') {
              iconName = 'chatbubbles-outline'; // 커뮤니티 아이콘의 이름
            } else if (route.name === '내정보') {
              iconName = 'person-outline'; // 내정보 아이콘의 이름
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <TabStack.Screen
          name="메인"
          component={AddPetStackScreen}
          // options={{ headerShown: false }}
        />
        {/* <TabStack.Screen name="펫정보" component={HomeScreen} /> */}
        <TabStack.Screen name="캘린더" component={ViewCalender} />

        {
          <TabStack.Screen
            name="커뮤니티"
            component={ListPhotoScreen}
            options={{ headerShown: false }}
          />
        }

        <TabStack.Screen
          name="내정보"
          component={UserInfoStackScreen}
          options={{ headerShown: false }}
        />
      </TabStack.Navigator>
    </AuthContext.Provider>
  );
};

export default TabStackScreen;
