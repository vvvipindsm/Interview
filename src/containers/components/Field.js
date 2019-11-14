import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Keyboard
} from 'react-native';
import constant from '../../config/constant'
class Field extends Component{

  state = {
    cheKfir :false,
    enableValidation:false
  }
  renderDom(){
    if(!this.props.validation && this.state.enableValidation) {
    return (
      <Text style={{color:'#e33a2b',marginLeft:12}}>{this.props.errorMsg}</Text>
    );
  }
  }
  render() {
   
   
    return (  
      <View>
      <View style={styles.container}>
        <TextInput
         onSubmitEditing={Keyboard.dismiss}
        keyboardType ={this.props.keyboardType||'default'}
        secureTextEntry = {this.props.secureTextEntry}
        placeholder={this.props.placeholder}

        style={styles.textInput}
        value={this.props.value}
        placeholderTextColor = {constant.black}
     
      
        // underlineColorAndroid="#212121"
        onChangeText={(value)=> {
         
          this.setState({ cheKfir: true })
          this.props.onClick({prop:this.props.name,value:{Datatype:this.props.type,value:value,class:this.props.class}})}
        }
        onBlur={()=>this.setState({ enableValidation: true })}
      />
      
     
      </View>
      {this.renderDom()}
      </View>

    );
  }
}


export default Field;
const styles = StyleSheet.create({
  container : {
    backgroundColor:'#fff',
   marginVertical:'2%',
   borderRadius:10,
   elevation:1,
    alignSelf:'stretch',
    alignItems:'flex-start',
   justifyContent:'flex-start',
   

},
    textInput: {
     alignSelf:'stretch',
      paddingLeft:'5%'
   


    },
});  
