import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ButtonHome } from '../../components/Button';

export function HomeScreen() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.headerText}>Boilerplate RN CLI</Text>
        <ButtonHome />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
