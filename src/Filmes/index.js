import React, { Component} from 'react';
import {View, Text} from 'react-native';

class Filmes extends Component{
    render(){
        console.log(this.props.data.item.titulo)
        return(
            <View>
                <Text>{this.props.data.item.titulo}</Text>
            </View>
        )
    }
}

export default Filmes