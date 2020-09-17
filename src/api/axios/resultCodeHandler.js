import Vue from 'vue';
import {axios} from './index'
export default async function (response) {
    if (response === undefined) {

    }
    else if (response.data.Code === -99999) {//token失效
        window.location.href = '#/login';
    }

}

