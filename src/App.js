import { StatusBar } from 'expo-status-bar';
import Navigation from './navigations/Navigation';
import FirstScreen from './screens/FirstScreen';

const App = () => {
  return (
    <>
      <StatusBar style="dark" />
      {/* <FirstScreen /> */}
      <Navigation />
    </>
  );
};

export default App;
