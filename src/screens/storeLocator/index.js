import React from 'react';
import { Component } from 'react';
import {View, Text} from 'react-native';

    class storeLocator extends Component{
        constructor (props){
            super(props);
            this.state = {};
        }
        render() {
            return(
                <View>
                    <Text> Store Locator</Text>
                </View>
            )

        }
    }

    export default storeLocator;