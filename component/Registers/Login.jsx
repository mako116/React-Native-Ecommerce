import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation(); // Access the navigation object

  const handleCreateAccount = () => {
    navigation.navigate('Signup'); // Navigate to the SignUp screen
  };

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Implement your login logic here
    // For simplicity, let's just log the username and password for now
    console.log('Username:', username);
    console.log('Password:', password);
    // You can add your authentication logic here
    // For example, send a request to your backend to validate the credentials
  };

  return (
    <View style={styles.container}>
      <View>
        <Image  
          source={{ uri:'https://cpswipe.com/themes/love/assets/img/logo.png' }}
          style={styles.image}
        />
      </View>
      <View style={styles.signing}>
      <Text style={styles.title}>Login to continue</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={()=>(
        navigation.navigate("Bottom Navigation")
      )}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCreateAccount}>
        <Text style={styles.createAccountText}>Create an account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CC42BD',
    // marginHorizontal:20,
    // marginVertical:80,
    marginTop:32,
    // borderRadius:10
  },
  image: {
    width: 400,
    height: 200,
    marginTop: -100,
    resizeMode: 'contain',
  },
  title: {
     fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:"#fff",
  },
 
  input: {
    width: '80%',
    height: 40,
    borderColor: '#fff',
    color:"#fff",
    borderBottomWidth:1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor:"#6f1273",
    width: '80%',
     height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
   },
  buttonText: {
    // font-family: "Montserrat",sans-serif;
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  createAccountText: {
    color: '#fff',
    marginTop: 10,
    // textDecorationLine: 'underline',
  },
});

export default LoginScreen;
