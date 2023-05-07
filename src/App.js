import { StatusBar } from 'expo-status-bar';
import Navigation from './navigations/Navigation';
import AddpetScreen from './screens/AddPetScreen';
import FirstScreen from './screens/FirstScreen';
import PetMainScreen from './screens/PetMainScreen';

const App = () => {
  return (
    <>
      <StatusBar style="dark" />
      {/* <FirstScreen /> */}
      {/* <Navigation /> */}
      <PetMainScreen />
    </>
  );
};

export default App;
