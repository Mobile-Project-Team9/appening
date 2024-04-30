import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Alert, Button, Pressable, Modal } from "react-native";
import { logout, signUp } from "../components/Auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/Confing';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from "../styles/style";

export default function Register({ visible, onClose, navigation }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsLoggedIn(!!user);
        });
        return () => unsubscribe();
    }, []);

    const handlePressRegister = () => {
        if (!nickname) {
            Alert.alert('Nickname is required');
            return;
        }
        if (!email) {
            Alert.alert('Email is required');
            return;
        }
        if (!password) {
            Alert.alert('Password is required');
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert('Passwords do not match');
            return;
        }

        signUp(nickname, email, password);
        // Consider handling success or failure of signUp
    };

    const handlePressLogout = () => {
        logout();
        onClose(); 
    };

    if (!visible) return null; 

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={visible}
            onRequestClose={onClose}
        >
            {isLoggedIn ? (
                <View style={styles.container}>
                    <View style={styles.headerItem}>
                        <Text style={styles.header}>Register</Text>
                        <Pressable style={styles.logoutIcon} onPress={handlePressLogout}>
                            <MaterialIcons name="logout" size={24} color='black' />
                        </Pressable>
                    </View>
                    <Text style={styles.infoText}>You are logged in. Go to your todos...</Text>
                    <Button title="Close" onPress={onClose} />
                </View>
            ) : (
                <View style={styles.container}>
                    <View style={styles.headerItem}>
                        <Text style={styles.header}>Register</Text>
                    </View>
                    <Text style={styles.infoText}>Create an account</Text>
                    <TextInput style={styles.textInput}
                        placeholder="Nickname"
                        value={nickname}
                        onChangeText={(nickname) => setNickname(nickname.trim())}
                    />
                    <TextInput style={styles.textInput}
                        placeholder="Enter your email"
                        value={email}
                        onChangeText={(email) => setEmail(email.trim())}
                        keyboardType='email-address'
                        autoCapitalize='none'
                    />  
                    <TextInput style={styles.textInput}
                        placeholder="Enter your password"
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                        secureTextEntry={true}
                    />
                    <TextInput style={styles.textInput}
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                        secureTextEntry={true}
                    />
                    <Pressable  style={styles.buttonStyle}>
                    <Button title="Register"
                    onPress={handlePressRegister}
                    />
                    </Pressable>
                    <Text style={styles.infoText}>Already have an account?</Text>
                    <Pressable  style={styles.buttonStyle}>
                    <Button title="Login"
                    onPress={() => navigation.navigate('login')}
                    />
                    </Pressable>
                    <Button title="Close" onPress={onClose} />
                </View>
            )}
        </Modal>
    );
}
