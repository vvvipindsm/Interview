import {AsyncStorage} from 'react-native'
class CiSession {

    setSessionData = async (data,key,method='add',debugg_enable = false) => {
  
        try {
          if(method == 'add') {
          await AsyncStorage.setItem(key, JSON.stringify(data),()=>{
            if(debugg_enable) {
            AsyncStorage.getItem(key, (err, result) => {
            
                console.warn("this is from libarray Session",result);
              
              });
            }
          });
          }else {
           
            await AsyncStorage.mergeItem(key, JSON.stringify(data))
          }
          return true
        } catch (error) {
          console.warn("this error from session error",error)
          return false
        }
      };
      clearSession = async (key) => {
  
        try {
        
          await AsyncStorage.removeItem(key);
          return true
        
        } catch (error) {
             return false
        }
      };
      getSession = async (keys) => {
       
        try {
          if(keys.length == 1){
            
          }
          else {

              return AsyncStorage.multiGet(keys);
     

          }
        
          
        
        } catch (error) {
          console.warn(error)
             return false
        }
      };
  
   }


 
   const Session = new CiSession();
 export default Session;