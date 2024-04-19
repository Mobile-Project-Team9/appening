import { useState, useEffect } from "react";
import { View, Text, TextInput, Alert, Button, Pressable } from "react-native";
import { logout, signUp } from "../components/Auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/Confing';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from "../styles/style";

export default function Register({ visible, onClose, navigation }) {
    const [isLoggedin, setIsLoggedIn] = useState(false);
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

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
        if (!confirmpassword) {
            Alert.alert('Confirmation is required');
            return;
        }
        if (password !== confirmpassword) {
            Alert.alert('Passwords do not match');
            return;
        }

        signUp(nickname, email, password);
        // Consider handling success or failure of signUp
    };

    const handlePressLogout = () => {
        logout();
        onClose(); // Close modal on logout
    };

    if (!visible) return null; // Only render if visible

    if (isLoggedin) {
        return (
            <View>
                <View style={styles.headerItem}>
                    <Text style={styles.header}>Todos: Register</Text>
                    <Pressable style={styles.logoutIcon} onPress={handlePressLogout}>
                        <MaterialIcons name="logout" size={24} color='black' />
                    </Pressable>
                </View>
                <Text style={styles.infoText}>You are logged in. Go to your todos...</Text>
            </View>
        );
    } else {
        return (
            <View style={styles.con}>
                <View style={styles.headerItem}>
                    <Text style={styles.header}>Register</Text>
                </View>
                <Text style={styles.infoText}>Create an account</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Nickname"
                    value={nickname}
                    onChangeText={text => setNickname(text.trim())}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={text => setEmail(text.trim())}
                    keyboardType='email-address'
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Confirm password"
                    value={confirmpassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={true}
                />
                <Pressable style={styles.buttonStyle} onPress={handlePressRegister}>
                    <Button title="Register" />
                </Pressable>
                <Text style={styles.infoText}>Already have an account?</Text>
                <Pressable style={styles.buttonStyle} onPress={() => {
                    onClose(); 
                    navigation.navigate('Login');
                }}>
                    <Button title="Login" />
                </Pressable>
            </View>
        );
    }
}
