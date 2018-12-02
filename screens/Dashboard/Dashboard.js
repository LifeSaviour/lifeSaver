import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import Navigator from './navigation/navigation'

export default class Dashboard extends React.Component {
  

  
  render() {
    return (
      <View style={styles.container}>
        <Text>hospital name</Text>

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
