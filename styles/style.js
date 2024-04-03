import { Dimensions, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const colors = {
  mainColor: "#001E96",
  secondaryColor: "#E10069",
  offBlue: "#6878B5",
  white: "#ffffff"
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  search: {
    zIndex: 1,
    position: "absolute",
    top: 400
  }, 

  text: {
    fontSize: 16,
    padding: 6,
    color: "#fff" // You can change later
  },

  Navi: {
    // Fill?
  },

  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E10069", // You can change later
    padding: 10,
    maxHeight: 120,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10
  },

  label: {
    borderRadius: 20,
    alignItems: 'center',
    padding: 10,
    margin: 20,
    backgroundColor: "#E10069",
    textAlign: 'center'
  },

  heading: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
  },

  activity: {
    marginBottom: 10,
  },

  container: {
    padding: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get
  },

  con: {
    
    backgroundColor: '#6878B5',
    paddingHorizontal:10,
    
    
  },
  todosContainer: {
    flexShrink: 1,
    marginTop: 15,
    marginBottom: 5
  },
  header: {
    marginTop: 40,
    fontSize: 30,
  
  },
  headerItem: {
     
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5,
    

  },
  subheader: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold'
  },
  newItem: {
    marginVertical: 10,
    alignItems: 'flex-start',
  },
  infoText: {
    marginTop: 5,
    marginHorizontal:5,
    marginBottom: 5,
    
    fontSize: 15
  },
  buttonStyle: {
    width: '50%',
    marginLeft: 80,
    borderWidth:1,
    borderRadius: 10,
    
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#130404',
    width: '90%',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 6,
    marginVertical: 15,
    fontSize: 18
  },
  todoItem: {
    flexDirection: 'row',
    marginVertical: 10
  },
  todoText: {
    borderColor: '#afafaf',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 10,
    minWidth: '65%',
  },
  

  //FilterMenu-component

  filterMenu: {
    marginTop: 100,
  },

  filterButton: {
    width: 20,
    height: 25,
    margin: 15,
    backgroundColor: '#fff',
    borderColor: '#000',
    alignItems: 'center',

  },
});

export { styles, colors };