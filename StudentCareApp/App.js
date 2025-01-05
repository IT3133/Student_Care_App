import { NavigationContainer } from '@react-navigation/native';
import Login from './components/Login';
import Main from './components/Main';
import { StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function App() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={Login} options={{ title: 'UoV Student Care', headerStyle: { backgroundColor: '#520f4e' }, headerTintColor: '#fff', headerTitleAlign: 'center' }} />
            <Stack.Screen name='Main' component={Main} options={{ title: 'UoV Student Care', headerStyle: { backgroundColor: '#520f4e' }, headerTintColor: '#fff', headerTitleAlign: 'center' }} />

          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  image:{
    width:500
  }
  
});
