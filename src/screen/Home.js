import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Image
        source={require('../assets/icon/dipesh.png')}
        style={{height: 600, width: 400}}
        resizeMode="contain"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('profile')}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>
          Let's Start
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 25,
    margin: 20,
    height: 60,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'teal',
  },
});
export default Home;
