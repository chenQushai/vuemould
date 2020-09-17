let checkString = (val) => {
    let pattern = new RegExp("[^a-zA-Z0-9\_\u4e00-\u9fa5]", "i");
    return pattern.test(val)
};
let checkAccNo = (val) => {
    let accNO = /^[0-9A-Z]{1,20}$/;//账号
    return accNO.test(val)
};
let checkMoney = (val) => {
    if (val === '') {
        return true
    }
    let money = /^([1-9][\d]{0,9}|0)(\.[\d]{1,2})?$/;
    return money.test(val)
};
let checkPercentage = (val) => {
    if (val === '') {
        return true
    }
    let percentage = /^\d*\.?\d*\%$/;
    return percentage.test(val);
};

let getCurrentMothLastDay = (years, moth) => {
    let nextMothDay = new Date(years, moth, 1);
    let oneDay = 1000 * 60 * 60 * 24;
    let lastDay = new Date(nextMothDay - oneDay);
    let month = lastDay.getMonth() + 1;
    return `${lastDay.getFullYear()}-${moth}-${lastDay.getDate()}`
};
let checkNum = (value) => {
    if (parseFloat(value).toString() == "NaN") {
        return false;
    } else {
        return true;
    }
};
let getToday = () => {
    let day = new Date();
    day.setTime(day.getTime());
    let month = null;
    let today = null;
    if (day.getMonth() + 1 < 10) {
        month = '0' + (day.getMonth() + 1)
    }
    else {
        month = day.getMonth() + 1
    }
    if (day.getDate() < 10) {
        today = '0' + day.getDate();
    }
    else {
        today = day.getDate()
    }
    return day.getFullYear() + "-" + month + "-" + today;
};

let getComputerTime = () => {
    let date = new Date();
    let years = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let min = date.getMinutes();
    let seconds = date.getSeconds();
    if (seconds < 10) {
        seconds = `0${seconds}`
    }
    if (hours < 10) {
        hours = `0${hours}`
    }
    return `${years}-${month}-${day} ${hours}:${min}:${seconds}`
}


export
{
    checkString,
    checkAccNo,
    checkMoney,
    checkPercentage,
    getCurrentMothLastDay,
    checkNum,
    getToday,
    getComputerTime,
}
