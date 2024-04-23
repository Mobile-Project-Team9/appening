import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const colors = {
  mainColor: "#001E96",
  secondaryColor: "#E10069",
  offBlue: "#6878B5",
  white: "#ffffff",
  transparent: "#69696900"
}

const styles = StyleSheet.create({
  //Home-screen
  container: {
    paddingTop: Constants.statusBarHeight + 5,
    flex: 1,
    backgroundColor: colors.white,
  },

  containeruser: {
    zIndex: 1,
    position: "absolute",
    width: '100%',
    paddingTop: Constants.statusBarHeight + 5
  },

  headeruser: {
    backgroundColor: colors.mainColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingVertical: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    color: colors.white,
    marginBottom: 10,
  },

  headerTitle: {
    fontSize: 16,
    color: colors.white,
    flex: 1, 
  },
  
  headerusersivu: {
    position: "absolute",
    right: 30,
    alignSelf: 'center',
  },

  textuser: {
    fontSize: 16,
    color: 'black',
    padding: 10,
    backgroundColor: colors.offBlue,
    marginBottom: 10, 
    marginLeft: 10, 
    marginRight: 10, 
    borderRadius: 5, 
  },

  containerLoading: {
    backgroundColor: colors.offBlue,
    flex: 1,
    alignItems: "center"
  },

  //headeruser style
  containerheaderuser: {
    flexDirection: "row",  
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    marginHorizontal: 16,
    paddingVertical: 10,
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
  },

  loadingTextMain: {
    color: colors.white,
    fontSize: 20,
    margin: 10
  },

  cardTitle: {
    flexDirection: 'row', // Arrange elements horizontally
    justifyContent: 'space-between', // Distribute elements evenly
    alignItems: 'center', // Align vertically
  },

  searchContainer: {
    zIndex: 1,
    position: "absolute",
    width: '100%',
    paddingTop: Constants.statusBarHeight + 5
   
  },

  text: {
    fontSize: 16,
    padding: 6,
    color: colors.white
  },

  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E10069",
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
    marginTop: 0,
  },

  shortDescriptionPressableExit: {
    backgroundColor: colors.transparent,
    height: 440,
    top: 6
  },

  //Shotdescription:
  modalContainer: {
    flex: 1,
    // Make modal occupy half of the screen height
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.white,
    padding: 10
  },

  scrollViewContainer: {
    flexGrow: 1,
  },

  modalContent: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    height: '50%',
    width: '100%',
  },

  title: {
    fontSize: 20,
    color: colors.white,
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

  eventButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  Llogin: {
    backgroundColor: colors.offBlue,
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
    padding: 6,
    fontSize: 16
  },

  buttonStyle: {
    width: '50%',
    marginLeft: 80,
    borderWidth: 1,
    borderRadius: 10,
  },

  textInput: {
    borderWidth: 1,
    borderColor: colors.black,
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
    marginTop: 10,
    marginLeft:10,
    marginRight:10
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
    height: '191%',
    backgroundColor: colors.white
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

  clearFiltersButton: {
    width: 105,
    height: 55,
    marginTop: -55,
    marginRight: 15,
    backgroundColor: colors.mainColor,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },

  hideMenuButtonText: {
    color: colors.white
  },

  overlayPressable: {
    flex: 1,
    backgroundColor: '#696969a8',
    marginTop: '55%',
    marginBottom: '22%',
  },

  // Event list card
  card: {
    justifyContent: "center",
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

  drawerIconPressable: {
    paddingRight: 20
  },

  drawerIcon: {
    backgroundColor: colors.mainColor
  },

  fullDetailEventView: {
    flex: 1
  },

  fullDetailEventExitPressable: {
    alignItems: "flex-end",
    paddingTop: 0,
    paddingRight: 12,
    paddingBottom: 7,
    paddingLeft: 12
  },

  fullDetailEventExitIcon: {
    backgroundColor: colors.white
  },

  fullDetailEventHeader: {
    fontSize: 20,
    color: colors.white,
    backgroundColor: colors.mainColor,
    padding: 20,
    textAlign: "center"
  },

  fullDetailEventImageView: {
    padding: 10,
    alignItems: "center"
  },

  fullDetailEventImage: {
    width: 360,
    height: 200
  },

  fullDetailEventText: {
    fontSize: 16,
    color: colors.black,
    padding: 6,
    paddingLeft: 15,
    paddingRight: 15
  },

  container3: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button3: {
    backgroundColor: '#9190a3',
    padding: 10,
    borderRadius: 3,
  },

  buttonText3: {
    color:  colors.white,
    fontSize: 16,
  },

  // Text what?
  text3: {
    marginBottom: 100,
    fontSize: 18,
    color: colors.white,
  },

  languageButton: {
    padding: 10,
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
  },

  lngName: {
    fontSize: 16,
    color: colors.white,
  }
});

export { styles, colors };