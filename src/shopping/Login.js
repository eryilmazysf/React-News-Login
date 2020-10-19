import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  KeyboardType,
} from 'react-native';

import {Input, Button} from './component';

const Login = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffa726'}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={
          Platform.OS == 'android' ? null : 'padding'
        } /* klavye acilinca yukari kaydirmak icin behavior:padding */
      >
        <ScrollView
          style={{flex: 1}}
          bounces={false} /* bounce ziplamayi onler ios icin    */
        >
          <View style={{flex: 1}}>
            <Image
              source={require('./assets/cart.png')}
              style={styles.logoStyle}
            />

            <Input holder="Enter your email ..." />
            <Input holder="Enter your password ..." />

            <Button text="Giriş Yap" />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  logoStyle: {
    resizeMode: 'contain',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.4,
  },
});
