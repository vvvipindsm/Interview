
import React, { Component } from 'react';
import { View, StyleSheet, KeyboardAvoidingView,ScrollView,Dimensions, TouchableOpacity,Alert,Text } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import { MyAlert } from './components/MyAlert';
import Field from './components/Field';
import Button from './components/Button';
import Session from '../libraries/Session'
import constant from '../config/constant'
import { InputValidate, SubmitValidaiton ,FormSubmit,formMarkRequiredField,FormReset } from '../actions/Form';
import { connect } from 'react-redux';

var {  width } = Dimensions.get('screen');


class Login extends Component {
   
   
    constructor(props) {
        super(props);
        this.state = {
            validation: false,
            netstatus: false,
          
        }
        NetInfo.isConnected.fetch().then(isConnected => {
            this.setState({ netstatus: isConnected });

        });
        this.props.FormReset()
        this.props.formMarkRequiredField({email:false,password:false})
        
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectionChange);
      
    }

    handleConnectionChange = (isConnected) => {
        this.setState({ netstatus: isConnected });

    }
    async _submit(a) {
        await Session.clearSession('userDetails')
        if (this.state.netstatus) {

            
            await this.props.SubmitValidaiton();
            //check validation
            if (this.props.formValidationStatus) {
               await this.props.FormSubmit('User/login_check',this.props.data,'get')
             
               if(this.props.formServerResponseStatus) {
                   if(await Session.setSessionData(this.props.formServerResponse,'userDetails')) {
                       this.props.navigation.navigate('HomeScreen')
                   }
               }
               else {
                Alert.alert(
                    '',
                    "Invalid email or password",
                    [
                      '',
                      {
                        text: 'Try again',
                        
                        style: 'cancel',
                      },
                      '',
                    ],
                    {cancelable: false},
                  );
                   
               }

            }
            else {
                MyAlert('Validation Failed');
            }
        }
        else {
            MyAlert('Not Internet Access');

        }

    }
    async componentDidMount() {
     
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionChange);

    }

    render() {
        const valid = this.props.formValidation
      
        return (
            <View style={styles.container} keyboardShouldPersistTaps="always">
    

                <KeyboardAvoidingView style={styles.subContainer} behavior="postion" 
                 >
                    <ScrollView keyboardShouldPersistTaps="always" contentContainerStyle={{ alignSelf: 'stretch', justifyContent: 'space-around',width:width-50 }}>

                        <Field
                            value={this.props.data.email || ''}
                            placeholder="Username"
                            validation={valid.email||false}
                            keyboardType="email-address"
                            name="email"
                            type="email"
                            class="Login"
                            errorMsg="Username is not correct"
                            onClick={(userInputData) => this.props.InputValidate(userInputData)}
                        />
                        <Field
                            value={this.props.data.password||''}
                            placeholder="Password"
                            secureTextEntry={true}
                            validation={valid.password||false}
                            name="password"
                            type="string" 
                            class="Login" 
                            errorMsg=""
                            onClick={(userInputData) => this.props.InputValidate(userInputData)}
                        />
                      



                        <View style={{  flex:1, marginHorizontal:'1%' }} >
                            <Button value="CONTINUE" color={constant.btnColor} class="Login" 
                             onClick={this._submit.bind(this)}
                             onloading={this.props.preLoader} />
                        </View>

                    </ScrollView>

                </KeyboardAvoidingView>

            </View>
        );
    }
}
const mapStateToProps = state => {

    const { data,formValidation, preLoader, formValidationStatus ,formServerResponse,formServerResponseStatus} = state.Form
    return { data,formValidation,preLoader, formValidationStatus,formServerResponse,formServerResponseStatus }

}

export default connect(mapStateToProps, { InputValidate, SubmitValidaiton, FormSubmit,formMarkRequiredField,FormReset })(Login);



const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        flex: 1,
        flexDirection: 'column',
        margin: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgrourrrndColor: 'red',
    },
    forgetContainer : {
        justifyContent:'center',
        alignItems: 'center',
        paddingVertical : '5%',
        marginBottom: '8%',
        elevation:1
    },
    forgetTxt : {
        color  : constant.black,
        fontSize:12
    },

    subContainer: {
        flexGrow: 9,
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'column',
        marginTop: '5%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: 'blue',
    },

});


