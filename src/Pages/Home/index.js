/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {Header, Carousel} from '../../components';

const Home = () => {
  return (
    <SafeAreaView style={styles.page}>
    <Header title={'Beranda'} />
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
  },
  productList: {
    paddingHorizontal: 16,
  },
  separator: {
    height: 16,
  },
  listProduct: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2F2E41',
    marginBottom: 16,
  },
});
