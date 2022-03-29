import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Login = () => {
  return (
    <View style={styles.page}>
      <Text>Login</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#1F8597',
    alignItems: 'center',
  },
});
export default Login;
