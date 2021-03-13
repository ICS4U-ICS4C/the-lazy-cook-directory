import React from 'react'
import {StyleSheet, View, Text, Image, ImageBackground} from 'react-native'
import {TextInput, ScrollView, TouchableOpacity} from 'react-native-gesture-handler'

/** Veiw Sections Explained
 *   View 1: General
 *  Veiw 2(where backgroundColor is BDD358): 
 */
const Home = ({navigation}) => {
    return(
        <View style = {{ 

            backgroundColor: 'white',
            flex: 1
        }}>
       
            <View style = {{
                backgroundColor: '#BDD358',
                hieght: '63%',
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                paddingHorizontal: 15
            }}>
                <View style = {{ 
                    width: '50%'
                }}>
                    <Text style = {styles.headerHomie}> Lazy Cook's Directory </Text>

                </View>
            </View>

        </View>
    )
}

export default Home;


// import React from 'react'
// import {View, Text} from 'react-native'

// export default class Home extends React.Component{
//     render(){
//         return(
//             <View>
//                 <Text> Home </Text>
//             </View>
//         )
//     }
// }
