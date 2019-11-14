const INITIAL = {formValidationStatus: false, preLoader: false, data: [],formValidation: [],formServerResponse : [],formServerResponseStatus : false};

export default  (state = INITIAL, action) => {

    switch (action.type) {

        case 'HandleUserInput':
           
            //form data
            const userInp = []
            userInp[action.payload.fieldName] = action.payload.value
            const inputData = { ...state.data, ...userInp }
            //form validation
            const formValid = []
            formValid[action.payload.fieldName] = action.payload.status
            const formValidation_temp = { ...state.formValidation, ...formValid }
            console.warn("point 3",formValidation_temp)
            return { ...state, data: inputData,formValidation :formValidation_temp };


        case 'FinalValidation':
            if(state.formValidation.length == 0){
                return state
            }
            var validationString = state.formValidation;
            let value = JSON.stringify(validationString);
            if (value.search('false') == -1) {

                return { ...state, formValidationStatus: true, preLoader: true };
            }
            return state;
       
        case 'ApiFormSubmitSuccess':
           
            return { ...state, formServerResponse:action.payload.data,preLoader: false,formServerResponseStatus :true };
        case 'ApiFormSubmitFailed':
                    return { ...state, formServerResponse:action.payload.data,preLoader: false,formServerResponseStatus :false };
         case 'formInitiate':
          
               return { ...state, formValidation:action.payload };
        case 'FormReset':              
              return { ...state, ...INITIAL };
        default:
            return state;
    }
}