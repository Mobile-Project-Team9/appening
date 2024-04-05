import { Dimensions, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const colors = {
  mainColor: "#001E96",
  secondaryColor: "#E10069",
  offBlue: "#6878B5",
  white: "#ffffff"
}



const styles = StyleSheet.create({

  //Home-screen

  container: {
    paddingTop: Constants.statusBarHeight + 5,
    flex: 1,
    backgroundColor: '#fff',
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
    backgroundColor: colors.secondaryColor,
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

  map: {
    width: '100%',
    height: '110%',
    marginTop: -145,
  },

  //Shotdescription:
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10
  },
  title: {
    fontSize: 20,
    color: colors.mainColor,
  },
  info: {
    fontSize:15,

  },

  image: {
    
    height: 200,
    resizeMode: 'stretch',
    margin: 10
  },

  // ??

  con: {
    backgroundColor: '#ffffff',
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
  
  
  //Search -component

  searchbar: {
    backgroundColor: colors.mainColor,
    zIndex: 1,
  },

  //FilterMenu-component

  filterMenuContainer: {
    flex: 1,
    flexDirection: 'column',
  },

  filterMenu: {
    flex: 1,
    flexDirection: 'column',
  },

  filterMenuContent: {
    paddingTop: 35,
    paddingLeft: 15,
    height: 300,
    backgroundColor: '#fff'
  },

  filterButton: {
    width: 55,
    height: 55,
    margin: 15,
    backgroundColor: colors.mainColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    zIndex: 1,
  },

  hideMenuButton: {
    width: 105,
    height: 55,
    marginTop: -65,
    marginLeft: 15,
    backgroundColor: colors.mainColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },

  hideMenuButtonText: {
    color: '#fff'
  },

  overlayPressable: {
    flex: 1,
    backgroundColor: '#696969a8',
    marginTop: '-9.5%',
    marginBottom: '22%',
    
  },
});

export { styles, colors };