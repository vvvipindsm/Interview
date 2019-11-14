
// import axios from 'axios';
import login from '../../VirtualDB/login'
import userData from '../../VirtualDB/userData'

class HandleFetch {

     login( parms,successCallback,errorCallback,debuggEnable= false) {
        

        if(parms.email = login.username && parms.password == login.password) {
            successCallback({email:login.username,password:login.password})
        }
        else {
            errorCallback({status:false})
        }
        

    }
     async userDetails( successCallback,debuggEnable=true) {
        
     
         await successCallback(userData)

    }
}
const HandleLocalDataFetch = new HandleFetch();
export default HandleLocalDataFetch;