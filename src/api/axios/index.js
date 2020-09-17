import {axios} from 'castle-haozijunqaq-utils'
import resultCodeHandler from './resultCodeHandler'
console.log(window.baseUrl);
 axios.setBaseUrl(window.baseUrl);
//axios.setBaseUrl('http://192.168.103.101:8111');
axios.setResultCodeHandler(resultCodeHandler);
axios.changeIsWithCredentials(false);
if (window.sessionStorage.getItem('token')) {
    axios.addHeader('authorization', window.sessionStorage.getItem('token'));
}
export {axios}