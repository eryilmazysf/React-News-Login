import React from 'react';
import {View, TextInput, StyleSheet, Platform} from 'react-native';

const Input = ({holder}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.text} placeholder={holder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    padding: Platform.OS == 'ios' ? 15 : 5,
    margin: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
  text: {
    fontWeight: 'bold',
    color: '#388e3c',
    fontSize: 17,
    padding: 5,
  },
});

export {Input};
