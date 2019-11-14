import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  ActivityIndicator,
  Keyboard,
  Dimensions
} from 'react-native';
import constant from '../../config/constant';

var { height } = Dimensions.get('screen');

const Button = (props) => {
  

    return (

      <TouchableHighlight style={{ 
         borderRadius:10,
       elevation:1,
        borderColor: props.color,
        backgroundColor: props.color,
        //  alignSelf: 'stretch',
        height:height/13.5, 
        //  flex: 1, 
         justifyContent: 'center',
          alignItems: 'center',
          
         
         }}
         underlayColor= {constant.btnHover}
        onPress={() => {
          if(props.onloading) return null
          Keyboard.dismiss();
          props.onClick({ prop: props.class, value: 'dfdf' })
        }
        }
      >
        { (props.onloading) ?<ActivityIndicator size="small" color="#00ff00" />:<Text style={styles.txt}>{props.value}</Text>}
        

      </TouchableHighlight>
    );
  
}
const styles = StyleSheet.create({

  txt: {
    color: '#fff',
    fontSize: 15,
    

  }
});  

export default  Button
