/**
 * 全局过滤器
 * (需要大范围使用的)
 */
const vfilters ={
    //日期时间过滤器 format yyyy-MM-dd hh:mm:ss
    dateTimeFilters:function(value){
        if (value) {
            let year = value.toString().substr(0, 4);
            let month = value.toString().substr(4, 2);
            let date = value.toString().substr(6, 2);
            let hh = value.toString().substr(8, 2);
            let mm = value.toString().substr(10, 2);
            let ss = value.toString().substr(12, 2);
            value = year+"-"+month+"-"+date+" "+hh+":"+mm+":"+ss;
            return value
        } else {
            return value;
        }
    },
    //日期过滤 format yyyy-MM-dd
    dateFilters:function(value){
        if (value) {
            let year = value.toString().substr(0, 4);
            let month = value.toString().substr(4, 2);
            let date = value.toString().substr(6, 2);
            value = year+"-"+month+"-"+date;
            return value
        } else {
            return value;
        }
    },
    //性别过滤
    sexFilters:function(value){
        if (value) {
            let sex = "";
            value = parseInt(value);
            switch (value) {
                case 0:
                    sex = "男";
                    break;
                case 1:
                    sex = "女";
                    break;
                default:
                    sex ='未知';
                    break;
            }
            return sex
        } else {
            return value;
        }
    },

};


export default vfilters
