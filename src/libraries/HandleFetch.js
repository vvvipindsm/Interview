
import axios from 'axios';

class HandleFetch {

    async remoteAction(url, method, parms, successCallback, errorCallback,customCallback = '',debuggEnable= false) {
        
        await axios({
            url,
            method,
            params: parms, 
            })
            .then(responseJson => {
                if(debuggEnable) {
                console.warn("server result :",responseJson.data)
                }
               
                if (responseJson.data.status) {
                    if(debuggEnable) {
                        console.warn("server result :",responseJson.data)
                        }
                    if (typeof successCallback !== 'string') {
                        successCallback(responseJson.data)
                    }

                }
                else {
                    if (typeof customCallback !== 'string') {
                        customCallback(responseJson.data)
                    }
                }
            })
            .catch((error) => {
                console.warn("server reqest ",error)
                if (typeof errorCallback !== 'string') {

                    
                    // console.warn(error)
                }



            });


    }
    async remoteActionPOST(url, method, data, successCallback, errorCallback,debuggEnable=true) {
        
      
       
     
        await axios({
            url,
            method,
            data , 
             headers: {'Content-Type': 'application/x-www-form-urlencoded' }
            })
            .then(responseJson => {
                if(debuggEnable) {
                    console.warn(responseJson)
                }
               
                if (responseJson.data.status) {
              
                    if (typeof successCallback !== 'string') {
                        successCallback(responseJson.data)
                    }

                }
                else {
                    if (typeof errorCallback !== 'string') {
                        errorCallback(responseJson.data)
                    }

                }
            })
            .catch((error) => {
                if(debuggEnable) {
                    console.warn(error)
                }
                
                if (typeof errorCallback !== 'string') {

                   
           
                }



            });


    }
}
const HandleFetchRequest = new HandleFetch();
export default HandleFetchRequest;