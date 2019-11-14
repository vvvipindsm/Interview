
import HandleFetchRequest from '../libraries/HandleFetch';
import HandleLocalDataFetch from '../libraries/HandleLocalDataFetch'
import constant from '../config/constant'

export const makeRemoteRequest =  (url,method,params,prefix,debegg_enable=false) => {  
  // dispatch({
  //   type: 'requestIntiated',
  // })

    const apiUrl = constant.baseUrl+url
    return async (dispatch) => {
       
        const successCallback = (serverResponseData)=>   {
          console.warn("action",serverResponseData.user)
        
          dispatch({
            type: 'requestSuccess',
            payload:  {
                    data :serverResponseData.user,
                    prefix
               }
            });
          }
          const errorCallback = ''
      //  localEnvironment
          await HandleLocalDataFetch.userDetails(     
            successCallback, 
          )
       
        //  await HandleFetchRequest.remoteAction(
        //     apiUrl,
        //     method,
        //     params ,
        //     successCallback,
        //     errorCallback,
        //     '',
        //     debegg_enable
        
        //   )
 
    }



}
