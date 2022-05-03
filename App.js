import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import EditIntroScreen from './screens/EditIntroScreen';
import PreEditExperience from './screens/PreEditExperience';
import EditExperience from './screens/EditExperience';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeTabNavigation from './navigator/HomeTabNavigation';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="HomeTab" component={HomeTabNavigation} options={{headerShown: false}} />  
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: true}} />
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
            <Stack.Screen name="EditMain" component={EditIntroScreen} options={{headerShown: true, title:"Edit Main"}} />
            <Stack.Screen name="PreEditExperience" component={PreEditExperience} options={{headerShown: true, title:"Edit Experience"}} />
            <Stack.Screen name="EditExperience" component={EditExperience} options={{headerShown: true, title:"Edit Experience"}} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
