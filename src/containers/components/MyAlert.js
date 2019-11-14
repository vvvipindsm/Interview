import { ToastAndroid,Alert,Platform} from 'react-native';
export  const MyAlert = (msg) => {
     if(Platform.OS !== 'ios' ) {
        ToastAndroid.show(msg, ToastAndroid.SHORT);
    }
    else {
        Alert.alert(msg)
    }
}