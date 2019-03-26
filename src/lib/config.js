/**
 * 配置文件
 * 公共方法
 * */
import axios from 'axios'
import qs from 'qs';
import store from '../store/index'
import router from '../router/index'

/**公用配置参数*/
const config = {
     baseURL:' http://127.0.0.1:8090',//服务器
    // baseURL:' http://39.106.168.24:8090',//服务器
    pageSizes: [10,20,30],
};


let http = axios.create({
    baseURL: config.baseURL,//服务器
    // dataType:"json",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded', //请求头
    },
    transformRequest: [function (data) {
        //序列化参数
        data = qs.stringify(data);
        return data
    }],
    beforeSend: function (xhr) {
        xhr.withCredentials = false;
    }
});
let httpJSON = axios.create({
    baseURL: config.baseURL,//服务器
    // dataType:"json",
    headers: {
        'Content-Type': 'application/JSON', //请求头
        'user-token': store.state.userToken, //自定义参数
    },
    beforeSend: function (xhr) {
        xhr.withCredentials = false;
    }
});

/**请求拦截器，加上登录标识*/
http.interceptors.request.use(config => {
    //console.log(store.state.userToken);
   // config.headers['Authorization'] = 'Bearer ' + store.state.userToken;
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
});
httpJSON.interceptors.request.use(config => {
    //console.log(store.state.userToken);
    //config.headers['Authorization'] = 'Bearer ' + store.state.userToken;
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
});

/**响应拦截器：登录过期，返回登录页*/
http.interceptors.response.use(function (response) {
    //console.log(response);
    if(response.data.code == '2'){
        alert("登录已过期，请重新登录！");
        session.clear();
        router.replace({
            path: '/',
        })
    }
    return response
});
httpJSON.interceptors.response.use(function (response) {
    //console.log(response)
    if(response.data.code == '2'){
        alert("登录已过期，请重新登录！");
        session.clear();
        router.replace({
            path: '/',
        })
    }
    return response
});

/**
 * 获取请求数据
 * method:请求方式
 * URL：请求接口路径
 * pram：请求参数
 * scuFun：请求成功的回调函数
 * failFun：请求失败的回调函数
 * */
let getData = function (method,url,pram,scuFun,failFun) {
    http[method](url, pram).then((res) => {
        scuFun(res);
    }).catch((error) => {
        failFun(error);
    })
};

/** 搜索框参数处理
 *  parameters  参数对象
 *  matchRule  匹配规则，若不需要则不写
 * eq 等于
 * rg 区间 大于等于---小于等于
 * ne 不等于
 * lt 小于
 * le 小于等于
 * gt 大于
 * ge 大于等于
 * bw 开始于
 * bn 不开始于
 * ew 结束于
 * en 不结束于
 * cn 包含
 * nc 不包含
 **/
let fromSearch = function (parameters, matchRule) {
    var postData = {};
    var res = "";
    $.each(parameters, function (i, val) {
        let searchType = matchRule[i];
        if (searchType && val) {
            if(searchType == 'rg'){
                res += ',{"field":"' + i + '","op":"' + 'ge' + '","data":"' + val[0] + '"}';
                res += ',{"field":"' + i + '","op":"' + 'le' + '","data":"' + val[1] + '"}';
            }else {
                res += ',{"field":"' + i + '","op":"' + searchType + '","data":"' + val + '"}';
            }

        }

        if (i == 'pageSize') {  //固定参数处理
            postData["rows"] = val;
        }
        if (i == 'pageNo') {
            postData["page"] = val;
        }
        if (i == 'sidx') {
            postData["sidx"] = val;
        }
        if (i == 'sord') {
            postData["sord"] = val;
        }
        if (i == 'gbk_sort') {
            postData["gbk_sort"] = val;
        }
    })
    if (res) {
        res = res.substring(1);
    }
    res = '{"groupOp":"AND","rules":[' + res + ']}';
    $.extend(postData, {filters: res});
    return postData;
};

/**
 * 表格排序回调
 * column：表格当前列的值，
 * defaultName：默认排序名称，
 * defaultOrder：默认排序 传入‘asc’或‘desc’
 * getDataFun：获取数据函数
 * searchList:搜索关键词列表
 * */
let getSortChange = function (column,defaultName,defaultOrder,searchList,getDataFun) {
    let order='',orderName='';
    if(column.order){
        if(column.order=="ascending"){
            order='asc'
        }else if(column.order == "descending"){
            order='desc'
        }
    }else {
        order = defaultOrder
    }
    if(column.prop){
        orderName = column.prop;
    }else {
        orderName = defaultName;
    }
    searchList.sidx = orderName;
    searchList.sord = order;
    //获取数据
    getDataFun();
};




/**本地存储*/
let local = {
    //存储数据
    save(key, value){
        localStorage.setItem(key, JSON.stringify(value))
    },
    //读取数据
    fetch(key){
        return JSON.parse(localStorage.getItem(key)) || {}
    },
    clear(key){
        localStorage.removeItem(key);
        localStorage.clear();
     }
};

let session = {
    //存储数据
    save(key, value){
        sessionStorage.setItem(key, JSON.stringify(value))
    },
    //读取数据
    fetch(key){
        return JSON.parse(sessionStorage.getItem(key)) || {}
    },
    clear(key){
        //sessionStorage.removeItem(key);
        sessionStorage.clear();//清除所有存储会话
    }

};

export default {
    install: function (vm) {
        vm.prototype.$local = local;
        vm.prototype.$session = session;
        vm.prototype.$http = http;
        vm.prototype.$httpJSON = httpJSON;
        vm.prototype.$qs = qs;
        vm.prototype.$fromSearch = fromSearch;
        vm.prototype.$config = config;
        vm.prototype.$getSortChange = getSortChange;
        vm.prototype.$getData = getData;
    }
}



