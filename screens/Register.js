import React, { useState, useEffect, useContext } from "react";
import { View, Text, TextInput, Alert, Button, Pressable, Modal } from "react-native";
import { logout, signUp } from "../components/Auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/Confing';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from "../styles/style";
import { LanguageContext } from "../data/Contexts";

export default function Register({ visible, onClose, navigation }) {
    const { language } = useContext(LanguageContext)
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
            Alert.alert(language === 'fi' ? 'Syötä nimi profiilille' : 'Nickname is required');
            return;
        }
        if (!email) {
            Alert.alert(language === 'fi' ? 'Syötä sähköpostiosoite' : 'Email is required');
            return;
        }
        if (!password) {
            Alert.alert(language === 'fi' ? 'Syötä salasana' : 'Password is required');
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert(language === 'fi' ? 'Salasanat eivät täsmää' : 'Passwords do not match');
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
                        <Text style={styles.header}>{language === 'fi' ? 'Luo tili' : 'Register'}</Text>
                        <Pressable style={styles.logoutIcon} onPress={handlePressLogout}>
                            <MaterialIcons name="logout" size={24} color='black' />
                        </Pressable>
                    </View>
                    <Text style={styles.infoText}>{language === 'fi' ? 'Tervetuloa ' : 'Welcome '}{nickname}</Text>
                    <Button title="Close" onPress={onClose} />
                </View>
            ) : (
                <View style={styles.container}>
                    <View style={styles.headerItem}>
                        <Text style={styles.header}>{language === 'fi' ? 'Luo tili' : 'Register'}</Text>
                    </View>
                    <Text style={styles.infoText}>{language === 'fi' ? 'Tilin luonti' : 'Create an account'}</Text>
                    <TextInput style={styles.textInput}
                        placeholder={language === 'fi' ? 'Profiilin nimi' : 'Nickname'}
                        value={nickname}
                        onChangeText={(nickname) => setNickname(nickname.trim())}
                    />
                    <TextInput style={styles.textInput}
                        placeholder={language === 'fi' ? 'Sähköpostiosoite' : 'Email address'}
                        value={email}
                        onChangeText={(email) => setEmail(email.trim())}
                        keyboardType='email-address'
                        autoCapitalize='none'
                    />  
                    <TextInput style={styles.textInput}
                        placeholder={language === 'fi' ? 'Salasana' : 'Password'}
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                        secureTextEntry={true}
                    />
                    <TextInput style={styles.textInput}
                        placeholder={language === 'fi' ? 'Toista salasana' : 'Confirm password'}
                        value={confirmPassword}
                        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                        secureTextEntry={true}
                    />
                    <Pressable  style={styles.buttonStyle}>
                    <Button title={language === 'fi' ? 'Luo tili' : 'Register'}
                    onPress={handlePressRegister}
                    />
                    </Pressable>
                    <Text style={styles.infoText}>{language === 'fi' ? 'Oletko jo luonut tilin?' : 'Already have an account?'}</Text>
                    <Pressable  style={styles.buttonStyle}>
                    <Button title={language === 'fi' ? 'Kirjaudu' : 'Login'}
                    onPress={() => navigation.navigate('login')}
                    />
                    </Pressable>
                    <Button title={language === 'fi' ? 'Sulje' : 'Close'} onPress={onClose} />
                </View>
            )}
        </Modal>
    );
}
