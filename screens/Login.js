import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Alert, Button, Pressable, Modal } from "react-native";
import { logout, signIn } from "../components/Auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/Confing';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from "../styles/style";

export default function Login({ visible, onClose, navigation }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsLoggedIn(!!user);
        });
        return () => unsubscribe();  // Clean up the subscription
    }, []);

    const handlePressLogin = () => {
        if (!email) {
            Alert.alert('Email is required');
        } else if (!password) {
            Alert.alert('Password is required');
        } else {
            signIn(email, password);
        }
    };

    const handlePressLogout = () => {
        logout();
    };

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={visible}
            onRequestClose={onClose}
        >
            {isLoggedIn ? (
                <View>
                    <View style={styles.headerItem}>
                        <Text style={styles.header}>Login</Text>
                        <Pressable style={styles.logoutIcon} onPress={handlePressLogout}>
                            <MaterialIcons name="logout" size={24} color="black" />
                        </Pressable>
                    </View>
                    <Text style={styles.infoText}>You are logged in. Go to your todos...</Text>
                    <Button title="Close" onPress={onClose} />
                </View>
            ) : (
                <View style={styles.container}>
                    <View style={styles.headerItem}>
                        <Text style={styles.header}>Log in</Text>
                    </View>
                    <Text style={styles.infoText}>Log in to your account</Text>
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
                    <Pressable style={styles.buttonStyle}>
                        <Button title="Login" onPress={handlePressLogin} />
                    </Pressable>
                    <Text style={styles.infoText}>Not having an account yet?</Text>
                    <Pressable style={styles.buttonStyle}>
                        <Button title="Register" onPress={() => navigation.navigate('Register')} />
                    </Pressable>
                    <Button title="Close" onPress={onClose} />
                </View>
            )}
        </Modal>
    );
}
