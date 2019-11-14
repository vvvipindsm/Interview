import HandleFetchRequest from '../libraries/HandleFetch';
import constant from '../config/constant'
import HandleLocalDataFetch from '../libraries/HandleLocalDataFetch'
export const InputValidate = ({ prop, value }) => {
   

    return (dispatch) => {
        var status = true;
        switch (value.Datatype) {
            case 'email':
                const regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                
                status = regEmail.test(value.value)
              
                break;
                case 'phone':
                    const regPhone =  /^\d{10}$/;
                    
                    status = regPhone.test(value.value)
                   
                break;


            case 'min-2':
                if (value.value.length <= 2) {
                    status = false;
                }
                else {
                    status = true;
                }
               

            default:
                break;
        }
        
        dispatch({
            type: 'HandleUserInput',
            payload: { status: status, value: value.value, fieldName: prop }
        })
    }
}
export const SubmitValidaiton = () => {

    return ({
        type: 'FinalValidation'
    })
}

export const formMarkRequiredField = (inputs) => {

    return ({
        type: 'formInitiate',
        payload: inputs
    })
}
export const FormReset = () => {

    return ({
        type: 'FormReset',
    })
}

export const FormSubmit = (url, parms, method = 'post') => {
  
    const apiUrl = constant.baseUrl+url
    return async (dispatch) => {

        const successCallback =  (serverResponseData) => dispatch({
            type: 'ApiFormSubmitSuccess',
            payload: { data: serverResponseData }
        });

        const errorCallback = async (serverResponseData) => dispatch({
            type: 'ApiFormSubmitFailed',
            payload: { data: serverResponseData }
        });

        //  test environment
        HandleLocalDataFetch.login(
            parms,
            successCallback,
            errorCallback,
        )
         //production envir 
        
        // if (method == 'get') {
        //     await HandleFetchRequest.remoteAction(
        //         apiUrl,
        //         'get',
        //         parms,
        //         successCallback,
        //         errorCallback,
        //     )
        // }
        // else {
        //     await HandleFetchRequest.remoteActionPOST(
        //         apiUrl,
        //         'post',
        //         parms,
        //         successCallback,
        //         errorCallback,

        //     )

        // }




    }

}