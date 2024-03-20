import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    text: {
      fontSize: 16,
      padding: 6,
      color: "#fff" // You can change later
    },
    Navi: {
      initialRouteName: "Home",
      activeColor: "#f0edf6",
      inactiveColor: "#3e2465",
      
      
      
    },

    footer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: '#ff8090', // You can change later
      padding: 10,
      maxHeight: 120,
      borderTopStartRadius: 10,
      borderTopEndRadius: 10
    }
    
  });