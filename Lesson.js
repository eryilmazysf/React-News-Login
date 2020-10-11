import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

const App = () => {
  const pressFunction = () => {
    console.log('hello');
  };
  //Spread operator objeyi diger obje icinde ... ucnokta ile olusturulur
  const user = {
    name: 'yusuf',
    age: 26,
    isAdmin: false,
  };
  const member = {
    ...user,
    password: '12345',
    type: null,
  };
  const myArr = [1, 2, 3, 4];
  const secArr = ['izmir', 'antalya', ...myArr];
  const newArr = [...secArr];
  console.log(newArr);

  //Destruction operator

  const myObj = {
    url: 'www.google.com',
    data: [1, 2, 3],
    config: 'EMPTY',
  };
  const {config, url} = myObj; //degiskene atayarak destruction metoduyla erisim saglariz
  console.log(config);
  console.log(url);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>YUSUF</Text>
        <Button title="Log" onPress={pressFunction} />
      </View>
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({});
