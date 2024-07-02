import React from 'react';
import { router } from 'expo-router';
import { useState } from 'react';
import { View, Text } from 'react-native';
import RegisterForm from './RegisterForm';

const Register = () => {
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: ''
    })
    
    const [errorMessages, SetErrorMessages] = useState< {[key: string]: string} >({
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: ''
    })
    
    const handleInputChange = (key: string, value: string) => {
       setFormData({
        ...formData, 
        [key]: value,
       });
    };
    
    
    const handleSubmit = () => {
        const newErrors: {[key: string]: string} = {};
        if (!formData.userName.trim()) {
           newErrors.userName = 'You must Pick a competition name to register'
        }
    
        if (!formData.email.trim()) {
          newErrors.email = 'Please Input email address'
       }
        
        if (!formData.password.trim()) {
          newErrors.password = 'At least 8 letters, includinding 3 upercase letters. number or special letters'
       }
    
       if (!formData.confirmPassword.trim()) {
        newErrors.confirmPassword = 'Please confirm password, and password must match'
     }
    
     if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required'
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }
        
    if (Object.keys(newErrors).length > 0) {
       SetErrorMessages(newErrors);
       return
      }
    
      console.log(formData)
      router.push('/homepage')
    };

    return(
        <View>
        <RegisterForm
          userName={formData.userName}
          email={formData.email}
          password={formData.password}
          confirmPassword={formData.confirmPassword}
          firstName={formData.firstName}
          lastName={formData.lastName}
          buttonText="Sign Up"
          onButtonPress={handleSubmit}
          onChangeText={handleInputChange}
          errorMessages={errorMessages}
        />
  </View>
    )
}


export  default Register;