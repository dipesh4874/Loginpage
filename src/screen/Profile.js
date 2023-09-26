import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://www.pngitem.com/pimgs/m/23-236353_man-working-in-office-clipart-hd-png-download.png',
        }}
        
        style={styles.images}
      />

      <Text style={styles.box}></Text>
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          marginRight: 240,
          marginBottom: 30,
        }}>
        Login
      </Text>
      <TextInput placeholder="Enter your email" style={styles.Textt} />
      <TextInput
        placeholder="Password"
        style={styles.Textt}
        secureTextEntry={true}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('profile')}
        style={styles.button}>
        <Text style={{fontSize:18,color: 'white', fontWeight: 'bold'}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#F6F6F6',
  },
  box: {
    alignSelf: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    height: 35,
    padding: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
    
  },
  images: {
   height:200,
   width:200,
   
   
  },
  Textt: {
    fontSize: 14,
    height: 25,
    width: 300,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  button: {
    borderWidth: 3,
    borderRadius: 18,
    height: 50,
    width: 310,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

export default Profile;
