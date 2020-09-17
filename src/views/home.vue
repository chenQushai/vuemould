<template>
    <el-container>
        <el-header class="page-header" :style="{backgroundImage: `url(${headerBg})`}">
            <img class="company-icon" src="../assets//img/company-icon.png" alt="">
            <div class="system-name">临床试验管理系统</div>
            <div class="user-function">
                <span class="iconfont iconxiaoxi2 set"></span>
                <span class="iconfont iconshezhi1 set"></span>
                <div class="user-msg">
                    <img class="user-head-img" src="../assets/img/doctor-img.png" alt="">
                    <el-dropdown class="user-name">
                                    <span class="el-dropdown-link">
                                    {{createName}}<i class="el-icon-arrow-down el-icon--right"></i>
                                    </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item >退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </el-header>
        <el-container>
            <el-aside width="148px" class="aside">

                <div class="out-box"
                     @click="addTab('menuItem',m)"
                     :class="m.select ? 'select' : ''"
                     :key="index" v-for="(m,index) in menuData">
                    <div class="inner-menu " :class="m.select ? 'select-bg' : ''">
                        <div class="menu-icon"
                             :style="{backgroundImage:`url(${m.icon})`,backgroundSize: '36px 36px'}"></div>
                        <p class="menu-name">{{m.menuName}}</p>
                    </div>
                </div>
            </el-aside>
            <el-main>
                <div class="tabs-title">
                    <div class="option-box">
                        <div class="nav-tab">
                            <el-tabs v-model="ItemTabsValue" type="card"
                                     @tab-click="tabClick"
                                     closable @tab-remove="removeTab">
                                <el-tab-pane
                                        v-for="(item, index) in itemTabs"
                                        :key="item.name"
                                        :label="item.title"
                                        :name="item.name"
                                >
                                </el-tab-pane>
                            </el-tabs>
                        </div>
                    </div>

                </div>

                <div class="router-view">
                    <router-view style="min-width: 1280px;" :key="keyNow"></router-view>
                </div>

            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "home",
        data() {

            return {
                headerBg: require('../assets/img/header.png'),
                createName: '',
                keyNow: '',
                ItemTabsValue: '',
                itemTabs: [],//tabs栏目
                menuData: [],
            }
        },
        created() {
        },
        mounted() {

        },
        methods: {

            addTab(type, target) { //type 跳转类型,target为点击的对象
                if (type === 'projectItem') {
                    const isInclude = this.itemTabs.some((item) => {
                        return item.name === target.ITEM_ID;
                    });
                    if (isInclude) {
                        this.ItemTabsValue = target.ITEM_ID;
                        this.keyNow = new Date().getTime();
                        this.$router.push(`/home/projectDetail?itemId=${target.ITEM_ID}&createTime=${target.CREATE_DT}&lastChanceTime=${target.MODIFY_DT}`);
                        return
                    }
                    this.itemTabs.push({
                        title: target.ITEM_CODE,
                        name: target.ITEM_ID,
                        path: '/home/projectDetail',
                        itemMsg: target
                    });
                    this.ItemTabsValue = target.ITEM_ID;
                    this.keyNow = new Date().getTime();
                    this.$router.push(`/home/projectDetail?itemId=${target.ITEM_ID}&createTime=${target.CREATE_DT}&lastChanceTime=${target.MODIFY_DT}`);
                }
                else if (type === 'menuItem') {
                    this.menuData.forEach((item) => {//选择菜单样式
                        item.select = false;
                    });
                    target.select = true;

                    const isInclude = this.itemTabs.some((item) => {
                        return item.name === target.path;
                    });
                    if (isInclude) {
                        this.ItemTabsValue = target.path;
                        this.$router.push(target.path)
                        return
                    }
                    this.itemTabs.push({
                        title: target.menuName,
                        name: target.path,
                        path: target.path,
                    });
                    this.ItemTabsValue = target.path;
                    this.$router.push(target.path)
                }
            },

            tabClick(tab) {
                let path = "";
                let p = {};
                console.log(tab)
                this.itemTabs.forEach((item) => {
                    if (tab.name === item.name) {
                        path = item.path;
                        if (item.itemMsg) { //是项目
                            p = item.itemMsg;
                        }
                    }
                });

                if (JSON.stringify(p) === '{}') { //为空是菜单项
                    this.$router.push(path)
                }
                else {
                    this.keyNow = new Date().getTime();
                    this.$router.push(`${path}?itemId=${p.ITEM_ID}&createTime=${p.CREATE_DT}&lastChanceTime=${p.MODIFY_DT}`)
                }
                this.ItemTabsValue = tab.name;
            },

            removeTab(targetName) {//target为将要删除的item的name
                if (targetName === this.itemTabs[0].name) { //选项卡 第一个不能删除
                    this.$message({
                        message: `${this.itemTabs[0].title}为首页，不能删除哦！`,
                        type: 'warning',
                        duration: 2000
                    });
                    return
                }

                let tabs = this.itemTabs;
                let activeName = this.ItemTabsValue;


                let page = {};
                let path = "";
                if (activeName === targetName) {
                    tabs.forEach((tab, index) => {
                        if (tab.name === targetName) {
                            let nextTab = tabs[index + 1] || tabs[index - 1];
                            if (nextTab) {
                                activeName = nextTab.name;
                            }
                        }
                    });
                }

                this.ItemTabsValue = activeName;
                this.itemTabs = tabs.filter(tab => tab.name !== targetName);
                this.keyNow = new Date().getTime();


                tabs.forEach((tab) => {
                    if (tab.name === this.ItemTabsValue) {
                        if (tab.itemMsg) { //是项目
                            page = tab;
                        }
                        else {
                            path = tab.path;
                        }

                    }
                });
                if (JSON.stringify(page) === '{}') { //为空是菜单项
                    this.$router.push(path);
                }
                else {
                    window.location.href = `#${page.path}?itemId=${page.itemMsg.ITEM_ID}&createTime=${page.itemMsg.CREATE_DT}&lastChanceTime=${page.itemMsg.MODIFY_DT}`;
                }

            }
        }
    }
</script>

<style lang="scss" scoped>
    .page-header {
        .company-icon {
            float: left;
            width: 27px;
            height: 30px;
            margin-top: 9px;
        }
        .system-name {
            float: left;
            width: 450px;
            line-height: 44px;
            color: white;
            font-weight: bold;
            font-size: 20px;
            padding-left: 10px;
        }
        .user-function {
            float: right;
            height: 40px;
            line-height: 40px;
            .set {
                color: white;
                font-size: 18px;
                cursor: pointer;
                margin-right: 30px;
            }

            .user-msg {
                float: right;
                height: 100%;
                line-height: 40px;
                .user-name {
                    display: inline-block;
                    font-size: 15px;
                    font-weight: bold;
                    vertical-align: middle;
                    color: white;
                }
                .user-head-img {
                    width: 25px;
                    height: 25px;
                    border-radius: 30px;
                    margin-right: 8px;
                    vertical-align: middle;
                }
            }

        }
    }

    .tabs-title {
        height: 40px;
        /deep/ .el-tabs__header {
            margin: 0;
        }
        /*.back-btn {*/
        /*float: left;*/
        /*width: 95px;*/
        /*height: 40px;*/
        /*text-align: center;*/
        /*cursor: pointer;*/
        /*.font {*/
        /*display: inline-block;*/
        /*vertical-align: center;*/
        /*margin-right: 10px;*/
        /*font-size: 14px;*/
        /*line-height: 40px;*/
        /*}*/

        /*}*/
        .option-box {
            float: left;
            width: 100%;
            /deep/ .el-tabs--card > .el-tabs__header .el-tabs__nav {
                border-top: none;
            }
            /deep/ .el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
                border-bottom: none;
                background-color: #DEECFF;
            }
            /deep/ .el-tabs__item.is-active {
                color: black;
            }
        }
    }

    .aside {
        box-shadow: 1px 0px 3px rgba(25, 41, 63, 0.1);
        padding: 16px 10px;
        overflow: auto;
        .out-box {
            width: 136px;
            height: 104px;
            padding: 6px;
            margin-bottom: 2px;
            .inner-menu {
                width: 115px;
                height: 90px;
                background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(236, 246, 255, 1) 100%);
                box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
                overflow: auto;
                cursor: pointer;
                .menu-icon {
                    width: 36px;
                    height: 36px;
                    margin: 15px auto;
                }
                .menu-name {
                    font-size: 16px;
                    line-height: 16px;
                    letter-spacing: 2px;
                    text-align: center;
                    font-weight: 500;
                }

            }
            .select-bg {
                background: rgba(0, 0, 0, 0);
                box-shadow: none;
            }
        }

        .select {
            background-image: url("../assets/img/menu/menuBg.png");
            background-size: 136px 104px;

        }
    }

    .router-view {
        width: 100%;
        height: calc(100% - 40px);
        overflow: auto;
        background-color: rgb(241, 245, 253);
    }
</style>