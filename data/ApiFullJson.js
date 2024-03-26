import React, { useState, useEffect, useContext } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { QueryContext } from './Contexts';


const URL = "https://opendata.zoneatlas.com/oulu/objects.json";

export default function FetchData() {
    

    const {setContextValue} = useContext(QueryContext);
    const {contextValue} = useContext(QueryContext);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(URL);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log('Data fetched:', data[0]);
          setContextValue(data);
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
     
    }, []);
  
    console.log('Log after setting setContextValue:', contextValue[0])
    //useEffect(() => {
    //   console.log('Context value:', contextValue);
    // }, [contextValue]);
  
    return (
        <View>
        <Text>Test</Text>
        </View>
    );
  };


//First version. Data redered inside useEffect, but outside it contextvalue empty
// const FetchData = () => {
//     const [contextValue, setContextValue] = useState([]);
  
//     useEffect(() => {
//       fetch(URL)
        
//         .then(response => response.json())
//         .then(data => {
//           console.log('Data fetched:', data[0]); // Log fetched data
//           setContextValue(data);
//         })
        
//         .catch(error => console.error('Error fetching data:', error));

//     }, []);
//     console.log('Log from fetchData:'+ contextValue[0])
//     return (
//       <QueryContext.Provider value={{contextValue, setContextValue}}>
//         {/* Render your app here */}
//       </QueryContext.Provider>
//     );
//   };
  
//   export default FetchData;



//***Pekka's code */
// export default function Api() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [refresh, setRefresh] = useState();
//   const [titles, setTitles] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [fullJson, setFullJson] = useState({});

//   const {setContextValue} = useContext(QueryContext)


  
//   useEffect(()=> {
//     let tmpTitles = [...titles];
//     let tmpCategories = [...categories];
//     fetch(URL)
//       .then(response => response.json())
//       .then ((json) => {
        
//         let jsonLength = Object.keys(json).length;
//         for (let i = 0; i < jsonLength; i++) {
//           if (!tmpTitles.includes(json[i].title)) {
//             tmpTitles.push(json[i].title)
//           }
//           if (!tmpCategories.includes(json[i].Categories[0].title)) {
//             tmpCategories.push(json[i].Categories[0].title)
//           }
//         }
//         setContextValue(json)
//         setTitles(tmpTitles);
//         setCategories(tmpCategories);
//         setError(null);
//         setIsLoading(false);
//         console.log(json[0])
//       },(error) => {
//         setError("Error retrieving activity!");
//         setIsLoading(false);
//         console.log(error);
//       })
//   },[refresh])

//   if (isLoading) {
//     return <View style={styles.container}><ActivityIndicator size="large"/></View>
//   } else if (error) {
//     return <View style={styles.container}><Text>{error}</Text></View>
//   } else {
//     return (
//       <View style={styles.container}>
//         <ScrollView>
//           <Text style={styles.heading}>Kohteet</Text>
//           {titles.map((item, index) => (
//             <Text key={index}>{item}</Text>
//           ))}
//           <Text style={styles.heading}>Kategoriat</Text>
//           {categories.map((item, index) => (
//             <Text key={index}>{item}</Text>
//           ))}
//         </ScrollView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 50,
//     marginLeft: 20,
//     marginRight: 20
//   },
//   heading: {
//     fontWeight: 'bold',
//     fontSize: 24,
//     marginBottom: 20,
//   },  
//   activity: {
//     marginBottom: 10,
//   }
// });