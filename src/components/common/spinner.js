import React from 'react';
import { ActivityIndicator, View, StyleSheet, Text } from 'react-native';

const Spinner = () => {
  return (
    <View style = {styles.spinner} >
      <ActivityIndicator size="small" color="#E3797C" />
    </View>
  );
};

const styles = StyleSheet.create({
  spinner:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { Spinner }
