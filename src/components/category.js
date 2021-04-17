import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    TouchableOpacity } from "react-native";

class Category extends Component {
    render() {
        return (
            <View style={{ height: 130, width: 130, borderWidth: 0.5, borderColor: '#dddddd' }}>
                <View style={{ flex: 2 }}>

                        <TouchableOpacity onPress={ () => this.props.link()}>
                            <Image style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} source= {this.props.imageUri} />
                        </TouchableOpacity>
                   
                </View>
                <View style={{ flex: 1, paddingTop: 10 }}>
                    <Text>{this.props.name}</Text>
                </View>
            </View>
        );
    }
}

export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

// import React, { Component } from "react";
// import {
//     View,
//     Text,
//     StyleSheet,
//     Image,
//     Button } from "react-native";

// class Category extends Component {
//     render() {
//         return (
//             <View style={{ height: 130, width: 130, borderWidth: 0.5, borderColor: '#dddddd' }}>
//                 <View style={{ flex: 2 }}>
//                     <Button icon={this.props.imageUri}
//                         style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
//                         onPress={ () => this.props.link()}
//                     > </Button>
//                 </View>
//                 <View style={{ flex: 1, paddingTop: 10 }}>
//                     <Text>{this.props.name}</Text>
//                 </View>
//             </View>
//         );
//     }
// }

// export default Category;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });