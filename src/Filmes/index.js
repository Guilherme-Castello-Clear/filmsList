import React, { Component} from 'react';
import {View, Text, StyleSheet, Image, Touchable, TouchableOpacity} from 'react-native';

class Filmes extends Component{
    render(){
        console.log(this.props.data.item.titulo)
        return(
            <View>
                <View style={styles.card}>
                    <Text style={styles.titulo}>{this.props.data.item.titulo}</Text>
                    <Image style={styles.capa} source={{uri: this.props.data.item.capa}}/>
                    <View style={styles.areaBotao}>
                        <TouchableOpacity style={styles.botao} onPress={() => alert(this.props.data.item.titulo)}>
                            <Text style={styles.botaoTexto}>Leia Mais</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card:{
        shadowColor: '#AAAAAA',
        backgroundColor: 'gray',
        shadowOffset: {width:0, height:1},
        shadowOpacity: 0.8,
        margin: 15,
        shadowRadius: 5,
        borderRadius: 5,
        elevation: 3,
    },
    titulo:{
        fontSize: 18,
        padding: 15,
    },
    capa:{
        height:250,
    },
    areaBotao:{
        alignItems: 'flex-end',
        marginTop: -40,
        zIndex: 9
    },
    botao:{
        width: 100,
        backgroundColor: '#09A6FF',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    botaoTexto:{
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold'
    }
})

export default Filmes