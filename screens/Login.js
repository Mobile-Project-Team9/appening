import { useState, useEffect } from "react";
import { View, Text, TextInput, Alert, Button, Pressable } from "react-native";
import { logout, signIn} from "../components/Auth";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../firebase/Confing';
import {MaterialIcons} from '@expo/vector-icons/MaterialIcons';
import { styles } from "../styles/style";


export default function Login ({navigation}) {
    const [isLoggedin, setIsLoggedIn] =  useState(false); 
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoggedIn(true);
            }
            else {
                setIsLoggedIn(false);
            }
        })
    }, []);

    const handlePresLogin = () => {
        if (!email) {
            Alert.alert('Email is reqired');
        }
        else if (!password) {
            Alert.alert('Password is reqired');
        }
        
        
        else {
            signIn( email, password); 
            onAuthStateChanged(auth, (user) =>{
                if (user) {
                    setEmail('');
                    setPassword('');
                    

                // navigation to todos screen .... 
                }
            });

        }

    }

    const handlePressLogout = () => {
        logout();
    }
    if (isLoggedin) {
        return(
        <View style={styles.con}>
            <View style ={styles.headerItem}>
                <Text style = {styles.header}> Login </Text>
                <Pressable style ={styles.logoutIcon} onPress ={handlePressLogout} >
                    <MaterialIcons name= "logout" size ={24} color='black'/>
                </Pressable>
            </View>
            <Text style ={styles.infoText}> You are logged in. Go to your todos...</Text>
        </View>
        )

    }
    else {
        return (
            <View style= {styles.con}>
                <View style ={styles.headerItem}>
                    <Text style ={styles.header}>Login in</Text>
                </View>
                <Text style = {styles.infoText}> Login to your account</Text>
                <TextInput
                style = {styles.textInput}
                placeholder="Enter your email"
                value={email}
                onChangeText={() => setEmail (email.trim())}
                keyboardType='email-address'
                autoCapitalize='none'
                ></TextInput>
                <TextInput
                style = {styles.textInput}
                placeholder="Enter your password"
                value={password}
                onChangeText={() => setPassword (password)}
                secureTextEntry={true}
                ></TextInput>
                
                <Pressable style = {styles.buttonStyle}>
                    <Button 
                    title="Login"
                    onPress={handlePresLogin}>
                    </Button>
                </Pressable>
                <Text style = {styles.infoText}> Not having account yes</Text>
                <Pressable style = {styles.buttonStyle}>
                    <Button 
                    title="Register"
                    onPress={() => navigation.navigate('Register')}>
                    </Button>
                </Pressable>
            </View>


        )

    }
}
