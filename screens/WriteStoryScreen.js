import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';
import {Header} from 'react-native-elements';


export default class WriteStory extends React.Component{
  constructor(){
      super();
      this.state={
          text:'',
          text2:'',
          text3:''
      }
  }
  
    render(){
        return(
       <View>
            <Header    
                backgroundColor={'#FFC0CB'}
                centerComponent={{
                    text:'Story Hub',
                    style:{color:'black', fontSize:40}
                }}
            />

            
                
                    <TextInput
                   placeholder={'Story Title'}
                  style={styles.inputBox}
                  onChangeText={text => {
                    this.setState({ text: text });
                  }}
                  value={this.state.text}
            
                    />

                <TextInput
                   placeholder={'Author'}
                  style={styles.inputBox2}
                  onChangeText={text2 => {
                    this.setState({ text2: text2 });
                  }}
                  value={this.state.text2}
            
                    />

            <TextInput
                   placeholder={'Write your story'}
                  style={styles.inputBox3}
                  onChangeText={text3 => {
                    this.setState({ text3: text3});
                  }}
                  value={this.state.text3}
            
                    />

            <TouchableOpacity
            style={{
                backgroundColor:'#FFC0CB',
                marginTop:15,
                height:50,
                width:120,
                alignItems:'center',
                alignSelf:'center'
            }}
            
            >
                <Text
                style={{
                    color:'black',
                    marginTop:10,
                    fontWeight:'bold',
                    fontSize:20
                }}
                >Submit</Text>
            </TouchableOpacity>
                </View>
            
            
        );
      
      
    }
  
    
}

const styles=StyleSheet.create({
    inputBox:{
        
            marginTop: 50,
            width: '90%',
            alignSelf: 'center',
            height: 40,
            borderWidth: 4,
            padding:10,
           
    },

    inputBox2:{
        
        marginTop: 25,
        width: '90%',
        alignSelf: 'center',
        height: 40,
        borderWidth: 4,
        padding:10,
       
},

inputBox3:{
        
    marginTop: 25,
    width: '90%',
    alignSelf: 'center',
    height: '43%',
    borderWidth: 4,
    padding:10,
   
}
})