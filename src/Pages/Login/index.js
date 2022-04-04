import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import Images from '../../assets';


const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    navigation.replace('Home');
  };

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <Image source={Images.ICLogo} style={styles.image} />
        <Text style={styles.title}>Si Ternak</Text>
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          style={styles.emailInput}
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.passwordInput}
          onChangeText={setPassword}
          value={password}
        />
        <View style={styles.breakLine} />
        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#ffa500',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#F2F2F2',
    alignSelf: 'center',
    marginBottom: 77,
    marginTop: 10,
  },
  emailInput: {
    backgroundColor: '#FFFFFF',
    height: 45,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderWidth: 1,
    marginBottom: 16,
    borderColor: '#F4A896',
  },
  passwordInput: {
    backgroundColor: '#FFFFFF',
    height: 45,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderWidth: 1,
    borderColor: '#F4A896',
  },
  breakLine: {
    backgroundColor: '#C4C4C4',
    marginVertical: 40,
    marginHorizontal: 16,
    height: 1,
  },
  button: {
    backgroundColor: '#964b00',
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  // eslint-disable-next-line prettier/prettier
});
