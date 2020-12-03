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
            <el-aside :width="computeMenuWidth" class="aside">

                <el-menu
                        router
                        unique-opened
                        :default-active="defaultActive"
                        class="el-menu-vertical-demo"
                        background-color="#ffffff"
                        text-color="#545c64"
                        :collapse="iscollapse"
                        @select="addTab"
                >
                    <div v-for="(item,index) in menuData" :key="index">
                        <el-submenu :index="item.url" v-if="item.children.length > 0">
                            <template slot="title">
                                <i :class="item.icon"></i>
                                <span slot="title" v-if="!iscollapse">{{item.menuName}}</span>
                            </template>
                            <div :key="i" v-for="(child,i) in item.children">
                                <el-submenu :index="child.url" v-if="child.children.length > 0">
                                    <template slot="title">{{child.menuName}}</template>
                                    <div v-for="(third,i) in child.children">
                                        <el-submenu :index="third.url" v-if="third.children.length > 0">
                                            <template slot="title">{{third.menuName}}</template>
                                            <div v-for="(fourth,i) in third.children">
                                                <el-menu-item :index="fourth.url"
                                                              v-if="fourth.children.length === 0">
                                                    {{fourth.menuName}}
                                                </el-menu-item>
                                            </div>
                                        </el-submenu>

                                        <el-menu-item :index="third.url" :key="i"
                                                      v-if="third.children.length === 0">
                                            {{third.menuName}}
                                            <i v-if="third.focused" class="el-icon-star-on margin-left10"
                                               style="font-size: 14px"></i>
                                            <i v-else class="el-icon-star-off margin-left10"
                                               style="font-size: 14px"></i>
                                        </el-menu-item>
                                    </div>

                                </el-submenu>

                                <el-menu-item :index="child.url" :key="i" v-if="child.children.length === 0">
                                    {{child.menuName}}
                                </el-menu-item>
                            </div>
                        </el-submenu>

                        <el-menu-item :index="item.url" v-if="item.children.length === 0">
                            <i :class="item.icon"></i>
                            <span slot="title">{{item.menuName}}</span>
                        </el-menu-item>
                    </div>
                </el-menu>
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
                    <i :class="iscollapse ? 'el-icon-arrow-right': 'el-icon-arrow-left'" @click="showCollapse"
                       :style="collapseStyle"></i>
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
                defaultActive: '/home/index',//当前激活菜单
                iscollapse: false,
                collapseStyle: {
                    position: 'absolute',
                    top: '10px',
                    left: '2px',
                    cursor: 'pointer',
                    transition: 'all 1s'
                },
                itemTabs: [
                    {
                        title: '首页',
                        name: '/home'
                    }
                ],//tabs栏目
                menuData: [
                    {
                        icon: ['iconfont', 'iconchufangguanli2', 'menu-iconfont'],
                        menuName: '字典维护',
                        url: '2',
                        children: [
                            {
                                menuName: '字典编码维护',
                                url: '/home/dictionaryCode',
                                focused: false,
                                children: []
                            },
                            {
                                menuName: '住院编码维护',
                                url: '/home/inHospitalCode',
                                focused: false,
                                children: []
                            },
                            {
                                menuName: '药品用法附加收费',
                                url: '/home/drugAdditionalCost',
                                focused: false,
                                children: []
                            },
                            {
                                menuName: '组合项目设置',
                                url: '/home/compoundProject',
                                focused: false,
                                children: []
                            },
                            {
                                menuName: '疾病编码维护',
                                url: '/home/diseaseCode',
                                focused: false,
                                children: []
                            },
                            {
                                menuName: '手术编码维护',
                                url: '/home/operationCode',
                                focused: false,
                                children: []
                            },
                            {
                                menuName: '医技科室药房设置',
                                url: '/home/medicalDepartment',
                                focused: false,
                                children: []
                            },
                        ]
                    },
                    {
                        icon: ['iconfont', 'iconyaopinguanli2', 'menu-iconfont'],
                        menuName: '参数设置',
                        url: '3',
                        children: [
                            {
                                menuName: '库位设置',
                                url: '3-1',
                                focused: false,
                                children: []
                            },
                            {
                                menuName: '添加库位',
                                url: '/home/addStorage',
                                focused: false,
                                children: []
                            },
                            {
                                menuName: '病区管理',
                                url: '/home/wardManage',
                                focused: false,
                                children: []
                            },
                            {
                                menuName: '病区兼管设置',
                                url: '/home/wardRegulation',
                                focused: false,
                                children: []
                            }
                        ]
                    },
                    {
                        icon: ['iconfont', 'iconkucunguanli2', 'menu-iconfont'],
                        menuName: '用户管理',
                        url: '4',
                        children: [
                            {
                                menuName: '操作员管理',
                                url: '/home/operator',
                                focused: false,
                                children: []
                            },
                            {
                                menuName: '操作员组管理',
                                url: '/home/operatorGroup',
                                focused: false,
                                children: []
                            },
                            {
                                menuName: '职称对应权限维护',
                                url: '4-3',
                                focused: false,
                                children: []
                            },
                            {
                                menuName: '签名图片录入维护',
                                url: '4-5',
                                focused: false,
                                children: []
                            },
                            {
                                menuName: '医生权限管理',
                                url: '/home/doctorPermission',
                                focused: false,
                                children: []
                            },
                            {
                                menuName: '医生病区调动',
                                url: '/home/doctorWardMove',
                                focused: false,
                                children: []
                            },
                            {
                                menuName: '抗生素级别设置',
                                url: '/home/antibioticGrade',
                                focused: false,
                                children: []
                            },
                        ]
                    },
                    {
                        icon: ['iconfont', 'iconxinxichaxun2', 'menu-iconfont'],
                        menuName: '常用工具',
                        url: '5',
                        children: [
                            {
                                menuName: '病人总账检测',
                                url: '/home/patientLedgerTest',
                                children: []
                            },
                            {
                                menuName: '数据库表结构升级',
                                url: '/home/tableStructureUp',
                                children: []
                            },
                            {
                                menuName: '全局解锁处理',
                                url: '/home/globalUnlock',
                                children: []
                            },
                            {
                                menuName: '常用字典信息管理',
                                url: '/home/commonlyUsedDictionary',
                                children: []
                            },
                            {
                                menuName: 'RvEdit配置工具',
                                url: '/home/rvEditSet',
                                children: []
                            },
                            {
                                menuName: '病历文书模板维护',
                                url: '5-6',
                                children: []
                            },
                        ]
                    },
                    {
                        icon: ['iconfont', 'icontongji1', 'menu-iconfont'],
                        menuName: '系统日志',
                        url: '6',
                        children: [
                            {
                                menuName: '操作日志查询',
                                url: '/home/operationLog',
                                children: []
                            },
                            {
                                menuName: '修改配置日志',
                                url: '/home/changeConfigLog',
                                children: []
                            },
                            {
                                menuName: '用户登录日志',
                                url: '/home/userLoginLog',
                                children: []
                            },
                        ]
                    }
                ],
            }
        },
        created() {
        },
        mounted() {

        },
        methods: {
            //需自行根据业务修改
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
            //需自行根据业务修改
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
            //需自行根据业务修改
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

            },
            showCollapse() {
                this.iscollapse = !this.iscollapse;
            },
        },
        computed: {
            //计算菜单宽度
            computeMenuWidth() {
                return this.iscollapse ? '63px' : '210px'
            },
        },
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
        position: relative;
        padding: 0 20px;
        height: 40px;
        /deep/ .el-tabs__header {
            margin: 0;
        }

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
        overflow: auto;
        .el-menu {
            border-right: none;
        }
    }

    .router-view {
        width: 100%;
        height: calc(100% - 40px);
        overflow: auto;
        background-color: rgb(241, 245, 253);
    }
</style>