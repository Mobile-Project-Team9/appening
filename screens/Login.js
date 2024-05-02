import React, { useState, useEffect, useContext } from "react";
import { View, Text, TextInput, Alert, Button, Pressable, Modal } from "react-native";
import { logout, signIn } from "../components/Auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/Confing';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from "../styles/style";
import { LanguageContext } from "../data/Contexts";

export default function Login({ visible, onClose, navigation }) {
    const { language } = useContext(LanguageContext)
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
            Alert.alert(language === 'fi' ? 'Syötä sähköpostiosoite' : 'Email is required');
        } else if (!password) {
            Alert.alert(language === 'fi' ? 'Syötä salasana' : 'Password is required');
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
                        <Text style={styles.header}>{language === 'fi' ? 'Kirjaudu' : 'Login'}</Text>
                        <Pressable style={styles.logoutIcon} onPress={handlePressLogout}>
                            <MaterialIcons name="logout" size={24} color="black" />
                        </Pressable>
                    </View>
                    <Text style={styles.infoText}>{language === 'fi' ? 'Tervetuloa' : 'Welcome'}</Text>
                    <Button title={language === 'fi' ? 'Sulje' : 'Close'} onPress={onClose} />
                </View>
            ) : (
                <View style={styles.container}>
                    <View style={styles.headerItem}>
                        <Text style={styles.header}>{language === 'fi' ? 'Kirjaudu' : 'Log in'}</Text>
                    </View>
                    <Text style={styles.infoText}>{language === 'fi' ? 'Kirjaudu sisään käyttäjällesi' : 'Log in to your account'}</Text>
                    <TextInput style={styles.textInput}
                        placeholder={language === 'fi' ? 'Sähköposti' : 'Email address'}
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
                    <Pressable style={styles.buttonStyle}>
                        <Button title={language === 'fi' ? 'Krjaudu' : 'Log in'} onPress={handlePressLogin} />
                    </Pressable>
                    <Text style={styles.infoText}>{language === 'fi' ? 'Eikö ole käyttäjää?' : 'Don\'t have an account yet?'}</Text>
                    <Pressable style={styles.buttonStyle}>
                        <Button title={language === 'fi' ? 'Luo tili' : 'Register'} onPress={() => navigation.navigate('Register')} />
                    </Pressable>
                    <Button title={language === 'fi' ? 'Sulje' : 'Close'} onPress={onClose} />
                </View>
            )}
        </Modal>
    );
}
