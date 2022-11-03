/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import Login from './android/app/src/components/login';
 import Visitpage from './android/app/src/screens/visitpage';
 import Signup from './android/app/src/components/signup';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import Home from './android/app/src/screens/home';
 import Details from './android/app/src/components/details';
 import { Provider } from 'react-redux';
 import Cards from './android/app/src/components/card';
 import { store } from './android/app/src/redux/store/store'
import Total from './android/app/src/components/total';
 
 const Stack = createNativeStackNavigator();
 
 const App = () => {
   return (
     <Provider store={store}>
       <View style={styles.container}>
         <NavigationContainer>
           <Stack.Navigator>
             <Stack.Screen
               name="Visitpage"
               component={Visitpage}
               options={{
                 header: () => null
               }}
             />
             <Stack.Screen
               name="Signuppage"
               component={Signup}
               options={{
                 header: () => null
               }}
             />
             <Stack.Screen
               name="Loginpage"
               component={Login}
               options={{
                 header: () => null
               }}
             />
             <Stack.Screen
               name="Totalpage"
               component={Total}
               options={{
                 header: () => null
               }}
             />
             <Stack.Screen
               name="Home"
               component={Home}
               options={{
                 header: () => null
               }}
             />
             <Stack.Screen
               name="Details"
               component={Details}
               options={{
                 header: () => null
               }}
             />
             
           </Stack.Navigator>
         </NavigationContainer>
       </View>
     </Provider>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1
   }
 });
 
 export default App;