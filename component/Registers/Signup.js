import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Navigate back to the login screen
    navigation.goBack();
  };

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const handleSignUp = () => {
    // Implement your signup logic here
    // For simplicity, let's just log the form data for now
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    // You can add your signup logic here
    // For example, send a request to your backend to create a new user
  };

  return (
    <View>
      <View style={styles.container}>
      <View style={styles.signing}>
      <Text style={styles.title}>Get started</Text>
      <Text style={styles.para}>Sign up to get started finding your partner!</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        placeholderTextColor="#ccc"
        onChangeText={text => setFirstName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        placeholderTextColor="#ccc"
        onChangeText={text => setLastName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        placeholderTextColor="#ccc"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        placeholderTextColor="#ccc"
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#ccc"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        placeholderTextColor="#ccc"
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
      />
      <View style={styles.buttoning}>
      <TouchableOpacity  onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleLogin}>
        <Text >Already have an account? <Text style={styles.loginText}>Login</Text> </Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    display:"flex",
    margin:"auto",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CC42BD',
    marginHorizontal:20,
    marginVertical:80,
    // width:"100px",
    height:640,
    // borderRadius:10
  },
  para:{
    color: '#fff',
  },
  signing:{
    marginBottom: 20,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
   color: '#fff',
  },
  input: {
    width: '80%',
    height: 40,
    color:"#fff",
    borderColor: '#fff',
    borderBottomWidth:1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttoning: {
    // background: '#fff',
    backgroundColor:"#6f1273",
    width: '80%',
     height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    color: '#fff',
    marginTop: 10,
    fontWeight:"bold",
    // textDecorationLine: ,s
  },
});

export default Signup;
