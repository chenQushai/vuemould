import store from '../src/store/index'
//跳至内部页面
const goInnerTab = (title, route, _this) => {
    store.state.editableTabs2.forEach((item, index) => {
        if (item.name === store.state.selectValue) {
            _this.$store.commit("addReplaceTabsValue", {
                key: item.name, title: item.title,
                route: store.state.activeNav[index].path
            });
            item.title = title;
            //替换当前位置的路由
            store.state.activeNav[index].path = route;
            _this.$router.replace(route);
        }
    })
};
//返回上级页面
const backOutTab = (_this) => {
    let routeIndex = null;
    let hasSelectArr = [];
    let itemIndex = [];
    store.state.replaceTabsValue.forEach((item, index) => {
        console.log(item);
        if (item.key === store.state.selectValue) {
            //将当前selectValue的所有对象加入数组
            hasSelectArr.push(item);
            //将获取的item角标存起来
            itemIndex.push(index);
        }
    });
    //删除并获取最后一个当前selectValue的数组
    let value = hasSelectArr.pop();
    //删除获取的item角标
    let deleteIndex = itemIndex.pop();
    //删除对应角标的跳转地址对象
    store.state.replaceTabsValue.splice(deleteIndex, 1);
    store.state.editableTabs2.forEach((item, index) => {
        if (item.name === store.state.selectValue) {
            routeIndex = index;
        }
    });
    store.state.editableTabs2[routeIndex].title = value.title;
    store.state.activeNav[routeIndex].path = value.route;
    _this.$router.replace(value.route);

};
export {goInnerTab, backOutTab};
