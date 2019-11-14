const INITIAL  = {   
   data: [], Preloader : [],error:[]
  };
 
export default (state = INITIAL, action) => {
   switch (action.type) {
    case 'requestSuccess':
     
      state.data[action.payload.prefix] = action.payload.data
      const requestBachPreloader = []
      requestBachPreloader[action.payload.prefix] = false
       const data = {...state,Preloader:requestBachPreloader}
      

       return data
      
    default:
     return state
   }
  }