import { useState, useEffect } from "react";
import { View, Text, TextInput, Alert, Button, Pressable } from "react-native";
import { logout, signUp } from "../components/Auth";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../firebase/Confing';
import {MaterialIcons} from '@expo/vector-icons/MaterialIcons';
import { styles } from "../styles/style";


export default function Register ({navigation}) {
    const [isLoggedin, setIsLoggedIn] =  useState(false); 
    const [nickname, setNickname] = useState ('');
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    const [confirmpassword, setConfirmPassword] = useState ('');
    
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

    const handlePressRegister = () => {
        if (nickname) {
            Alert.alert('Nickname is reqired');
        }
        else if (!email) {
            Alert.alert('Email is reqired');
        }
        else if (!password) {
            Alert.alert('Password is reqired');
        }
        else if (!!confirmpassword) {
            setPassword('');
            Alert.alert('Confirmation is reqired');
        }
        else if (password !== confirmpassword) {
            Alert.alert('passwords do not match')
        }
        else {
            signUp(nickname, email, password); 
            onAuthStateChanged(auth, (user) =>{
                if (user) {
                    setNickname('');
                    setEmail('');
                    setPassword('');
                    setConfirmPassword('');

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
                <Text style = {styles.header}> Todos: Register </Text>
                <Pressable style ={styles.logoutIcon} on press ={handlePressLogout} >
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
                    <Text style ={styles.header}> Todos: Register</Text>
                </View>
                <Text style = {styles.infoText}> Create an account</Text>
                <TextInput
                style = {styles.textInput}
                placeholder="Nickname"
                value={nickname}
                onChangeText={() => setNickname (nickname.trim())}
                ></TextInput>
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
                <TextInput
                style = {styles.textInput}
                placeholder="Confirm password"
                value={confirmpassword}
                onChangeText={() => setConfirmPassword (confirmpassword)}
                secureTextEntry={true}
                ></TextInput>
                <Pressable style = {styles.buttonStyle}>
                    <Button 
                    title="Register"
                    onPress={handlePressRegister}>
                    </Button>
                </Pressable>
                <Text style = {styles.infoText}> Alread have an account</Text>
                <Pressable style = {styles.buttonStyle}>
                    <Button 
                    title="Login"
                    onPress={() => navigation.navigate('Login')}>
                    </Button>
                </Pressable>
            </View>


        )

    }
}
