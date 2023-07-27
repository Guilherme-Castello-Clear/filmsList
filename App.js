import React, { Component, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList} from 'react-native';

import api from './src/services/api'
import Filmes from './src/Filmes'


class App extends Component{

  constructor(props){
    super(props);
    this.state={
      filmes:[]
    }
  }

  async componentDidMount(){
    const response = await api.get('rn-api/?api=posts')
    this.setState({
      filmes: response.data
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <FlatList data={this.state.filmes}
        keyExtractor={item => item.id.toString()}
        renderItem={(item) => <Filmes data={item}/>}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})

export default App;