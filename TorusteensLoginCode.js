import React, {Component} from 'react'
import {
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity
} from 'react-native'

class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      user:'',
      password:''
    };
  }


  //ES6 arrow function.
  //Called when the user presses the Login Button
  _login = () => {
    user = this.state.user;
    password = this.state.password;
    fetch(`https://torusteens.com/authuser?user=${user}&password=${password}`, {
      method: 'GET',
      //This X-Requested-With header is required for this work work...
      //It's a Server requirement
      //For more information see:
      //http://stackoverflow.com/questions/17478731/whats-the-point-of-the-x-requested-with-header
      headers:{
         "X-Requested-With":"XMLHttpRequest"
      }
    })
    .then((data)=>data.json())
    .then((res)=>{
      if (res.response) {
        //If the response = true
        Alert.alert("Welcome!", "Login successful for " + user);

        //Enter the code for what happens after logging in
      }else {
        //response = false or something else went wrong
        Alert.alert("Login failed", "Invalid username or password");
      }
    });
  }

  render(){
    return(
      <View style={styles.ViewContainer}>
        {/*
          Your code for the user interface goes here...
          */}
          <TextInput
            onChangeText={(text)=>this.setState(user:text)}
            />
          <TextInput
            onChangeText={(text)=>this.setState(pasword:text)}
            />
          <TouchableOpacity style={styles.Button}
            onPress={()=>this._login()}
            />
      </View>
    )
  }
}
