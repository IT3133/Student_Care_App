import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
