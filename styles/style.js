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

  containerLoading: {
    backgroundColor: colors.offBlue,
    flex: 1,
    alignItems: "center"
  },

  loadingImage: {
    height: 200,
    width: 400,
    position: "relative",
    top: 0
  },

  loadingTextView: {
    alignItems: "center",
    justifyContent: "center",
    top: 100
  },

  loadingTextMain: {
    color: colors.white,
    fontSize: 20,
    margin: 10
  },

  loadingText: {
    color: colors.white,
    fontSize: 16,
    marginBottom: 10
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
    flexDirection: 'column',
    //justifyContent: 'flex-end',
    //alignItems: 'center',

    // Make modal occupy half of the screen height
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
    padding: 10,
    margin:5,
   
    
  },

  scrollViewContainer: {
    flexGrow: 1,
  },

  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,

    height: '50%',
    width: '100%',
  },

  title: {
    fontSize: 20,
    color: "#fff",
    backgroundColor: colors.mainColor,
    padding: 5,
    alignContent: 'center'
  },

  info: {
    fontSize: 15,
  },

  image: {

    height: 200,
    

    margin: 10
  },

  x: {
    
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  eventButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  // ??
  con: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
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
    marginHorizontal: 5,
    marginBottom: 5,
    fontSize: 15
  },

  buttonStyle: {
    width: '50%',
    marginLeft: 80,
    borderWidth: 1,
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
    margin: 10
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
    height: '90%',
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

  // Event list card
  card: {
    alignContent: "center",
    backgroundColor: colors.mainColor,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5
  },

  // Bottom part of event list cards
  cardUnder: {
    alignContent: "center",
    backgroundColor: colors.offBlue,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingTop: 10
  },

  cardText: {
    alignContent: "center",
    color: colors.white
  },

  cardIcon: {
    backgroundColor: colors.secondaryColor
  }, 
  container3:{
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',

  },
  button3:{
    backgroundColor: '#9190a3',
    padding: 10,
    borderRadius: 3, 

  },
  buttonText3: {
    color: 'white',
    fontSize: 16,
  },

  text3: {
    marginBottom: 100,
    fontSize: 18,
    color: 'white',
  },
  languageButton: {
    padding: 10,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
  },
  lngName: {
    fontSize: 16,
    color: 'white',
  },

});

export { styles, colors };