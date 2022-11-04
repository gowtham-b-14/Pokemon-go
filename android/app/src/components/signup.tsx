import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState, FC} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StackNavigationProp} from '@react-navigation/stack';
import {ModalNavigatorParamsList, userparams} from '../types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface navi {
  navigation: StackNavigationProp<ModalNavigatorParamsList, 'Signuppage'>;
}

const Signup: FC<navi> = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isname, setIsname] = useState(false);
  const [isemailvalid, setemailvalid] = useState(false);
  const [ispasswordvalid, setPasswordValid] = useState(false);
  const [storeUser, setStoreUser] = useState(false);

  const Email = emails => {
    setemailvalid(emails.length > 5);
    setEmail(emails);
  };
  const Passwords = pass => {
    setPasswordValid(pass.length >= 6);
    setPassword(pass);
  };
  const Name = name => {
    setIsname(name.length > 4);
    setName(name);
  };
  //   const register = () => {
  //     ToastAndroid.show('Registered successfully', ToastAndroid.LONG);
  //     navigation.navigate('Loginpage', {
  //       name: name,
  //       email: email,
  //       password: password,
  //     });
  //   };
  // const storeData = async (value) => {
  //     try {
  //       await AsyncStorage.setItem('@storage_Key', value)
  //     } catch (e) {
  //       // saving error
  //     }
  //   }
  let registerUser = async (): Promise<void> => {
    if (storeUser) {
      try {
        let users: string | null = await AsyncStorage.getItem('@users');
        if (users == null) {
          let newUsers: userparams[] = [
            {
              name: name,
              email: email,
              password: password,
            },
          ];
          await AsyncStorage.setItem('@users', JSON.stringify(newUsers));
          ToastAndroid.showWithGravity(
            'User created successfully!',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
          );
          navigation.navigate('Loginpage');
        } else {
          let userDetailsJson: userparams[] = JSON.parse(users);
          if (userDetailsJson.filter(user => user.email == email).length > 0) {
            ToastAndroid.showWithGravity(
              'User already present!',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
            );
          } else {
            userDetailsJson.push({
              name: name,
              email: email,
              password: password,
            });
            await AsyncStorage.setItem(
              '@users',
              JSON.stringify(userDetailsJson),
            );
            ToastAndroid.showWithGravity(
              'User created successfully!',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
            );
            navigation.navigate('Loginpage');
          }
        }
      } catch (error) {
        ToastAndroid.showWithGravity(
          'Error while creating a User!',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
      }
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: 'https://cdn.wallpapersafari.com/99/25/rQeFHW.jpg'}}
        style={{width: '100%', height: '100%'}}>
        <View>
          <Icon name="pokeball" size={70} color="#f0f0f0" style={styles.icon} />
          <Text style={styles.text}>TrAiNéR </Text>
        </View>
        <View style={styles.container1}>
          <Text style={styles.text1}>Name</Text>
          <TextInput
            style={styles.textbox1}
            onChangeText={Name}
            placeholder="name"
          />
          {name.length > 0 && !isname ? (
            <Text style={styles.error}>Name is required</Text>
          ) : null}
          <Text style={styles.text1}>Email</Text>
          <TextInput
            style={styles.textbox1}
            onChangeText={Email}
            placeholder="email"
          />
          {email.length > 0 && !isemailvalid ? (
            <Text style={styles.error}>Please enter valid email</Text>
          ) : null}
          <Text style={styles.text1}>Password</Text>
          <TextInput
            style={styles.textbox1}
            onChangeText={Passwords}
            placeholder="password"
            // secureTextEntry={!eyeOpen}
          />
          {password.length > 0 && !ispasswordvalid ? (
            <Text style={styles.error}>
              Password length must be greater that 6
            </Text>
          ) : null}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setStoreUser(true), registerUser();
            }}>
            <Text style={styles.buttontext}>Register</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    color: 'black',
    marginLeft: 17,
    marginBottom: 8,
    fontSize: 15,
    fontWeight: 'bold',
  },
  text1: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 15,
  },
  image: {
    height: 200,
    width: '50%',
    borderRadius: 100,
    marginLeft: 90,
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  container1: {
    marginTop: 30,
  },
  icon: {
    marginTop: 50,
    marginLeft: 120,
  },
  text: {
    color: '#ffcb05',
    position: 'absolute',
    top: 64,
    left: 190,
    fontSize: 30,
    textShadowColor: 'blue',
    fontFamily: 'Pokemon Solid',
    textShadowOffset: {width: 9, height: 3},
    textShadowRadius: 40,
  },
  button: {
    alignItems: 'center',
    borderColor: 'black',
    padding: 10,
    top: 40,
    height: 40,
    borderWidth: 1,
    width: 100,
    marginHorizontal: 150,
    borderRadius: 10,
  },
  textbox1: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    color: 'black',
  },
  buttontext: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Signup;
