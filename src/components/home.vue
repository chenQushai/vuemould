<template>
    <div>
        <div class="outBox">
            <div class="sideLeft" :class="{collapseSideLeft: isCollapse}">
                <div class="personMsgBox" v-if="isCollapse === false">
                    <div class="headImage">
                        <img class="image" src="../assets/img/headImage.png" alt="">
                    </div>

                    <div class="userName">{{userName}}</div>

                    <div class="userType">
                        <el-dropdown trigger="click">
                            <span class="el-dropdown-link">
                            管理员<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>修改密码</el-dropdown-item>
                                <el-dropdown-item>查看详情</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>

                </div>

                <div class="shortMsgBox" v-if="isCollapse === true">
                    <div class="headImage">
                        <img class="image" src="../assets/img/headImage.png" alt="">
                    </div>
                </div>


                <div class="menuColumn">
                    <el-col :span="24">
                        <el-menu
                            class="el-menu-vertical-demo"
                            unique-opened
                            default-active="1"
                            @open="handleOpen"
                            @close="handleClose"
                            @select="addTab"
                            background-color="#2f4050"
                            text-color="#98a4b4"
                            router
                            :collapse="isCollapse"
                            active-text-color="#fff">
                            <el-submenu index="1">
                                <template slot="title">
                                    <i class="el-icon-menu"></i>
                                    <span>菜单一</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="展示页" route="/home/test1">展示页</el-menu-item>
                                    <el-menu-item index="详情页" route="/home/detailPage">详情页</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>

                            <el-submenu index="2">
                                <template slot="title">
                                    <i class="el-icon-date"></i>
                                    <span>菜单二</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="表格" route="/home/table">表格</el-menu-item>
                                    <el-menu-item index="组织架构" route="/home/organization">组织架构</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>

                            <el-submenu index="3">
                                <template slot="title">
                                    <i class="el-icon-setting"></i>
                                    <span>菜单三</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="权限管理" route="/home/userPermissionManagement">权限管理
                                    </el-menu-item>
                                    <el-menu-item index="1-2" route="/home/test6">选项2</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>

                            <el-submenu index="4">
                                <template slot="title">
                                    <i class="el-icon-tickets"></i>
                                    <span>菜单四</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="1-1">选项1</el-menu-item>
                                    <el-menu-item index="1-2">选项2</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>

                            <el-submenu index="5">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>菜单五</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="">选项1</el-menu-item>
                                    <el-menu-item index="">选项2</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>

                            <el-submenu index="6">
                                <template slot="title">
                                    <i class="el-icon-star-on"></i>
                                    <span>菜单六</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="1-1">选项1</el-menu-item>
                                    <el-menu-item index="1-2">选项2</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                        </el-menu>
                    </el-col>
                </div>
            </div>
            <div class="sideRight">
                <div class="header">
                    <div class="commonHeadBox">
                        <div class="head">
                            <div :class="isCollapse ? 'menuButtonCollapse' : 'menuButton' "
                                 @click="changeModeShow"></div>
                            <p class="title"><b>管理系统</b></p>
                        </div>
                    </div>

                    <div class="commonNav">
                        <div class="navBox">
                            <div class="changeLeft" @click="prve">
                                <div class="backImage"></div>
                            </div>

                            <div class="goToHome"
                                 :class="{'goToHome-active': selectValue ===''||  selectValue === '0' }"
                                 @click="goHome">首页
                            </div>

                            <div class="haveOpenNavBox">
                                <el-tabs v-model="selectValue" type="card" closable @tab-click="selectTab"
                                         @tab-remove="removeTab">
                                    <el-tab-pane
                                        v-for="(item, index) in editableTabs2"
                                        :key="item.name"
                                        :label="item.title"
                                        :name="item.name"
                                    >
                                    </el-tab-pane>
                                </el-tabs>
                            </div>

                            <div class="exit"><img class="exitImage" src="../assets/img/tuichu.png"
                                                   alt=""><span>退出</span></div>

                            <div class="operation" @click="closeWindow">关闭操作</div>

                            <div class="changeRight" @click="next">
                                <div class="backImageRight"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <router-view class="childView"></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    import store from "../store";
    export default {
        name: 'HelloWorld',
        data() {
            return {
                userName: 'username',
                selectValue: "",
                editableTabs2: [],
                tabIndex: 0,
                isCollapse: false
            }
        },
        computed: {},
        created() {
            this.selectValue = store.state.selectValue;
            this.editableTabs2 = store.state.editableTabs2;
        },
        mounted() {
            /****
             * 页面刷新跳到home页
             */
            window.onload = () => {
                store.state.activeNav = [];
                store.state.editableTabs2 = [];
                store.state.selectValue = this.selectValue;
                window.location.href = "#/home";
            };
            /****
             * 监听用户点击浏览器回退前进按钮
             */
            window.addEventListener("hashchange", (ev) => {
                this.$store.state.activeNav.forEach((item, index) => {
                    if (item.path === ev.newURL.split("#")[1]) {
                        this.selectValue = this.editableTabs2[index].name;
                        this.$store.commit("changeTabsValue", this.selectValue);
                    } else {
                        //如有删除的历史地址
                        this.editableTabs2.forEach((item, index) => {
                            if (item.name === this.selectValue) {
                                this.$router.push(`${this.$store.state.activeNav[index].path}`);
                            }
                        });
                    }
                })
            }, false);

        },
        methods: {
            handleOpen(key, keyPath) {
                for (let i = 0; i < document.querySelectorAll(".el-submenu__title").length; i++) {
                    document.querySelectorAll(".el-submenu__title")[i].style.borderLeft = ""
                }
                document.querySelectorAll(".el-submenu__title")[key - 1].style.borderLeft = "4px solid rgb(40,129,219)";
            },
            handleClose(key, keyPath) {
                document.querySelectorAll(".el-submenu__title")[key - 1].style.borderLeft = ""
            },
            /****
             * 改变显示模式
             */
            changeModeShow() {
                this.isCollapse = !this.isCollapse;
            },
            /****
             * 添加导航标签
             * @param targetName
             */
            addTab(targetName, index, submenu) {
                //将路由地址加入地址堆,有重复地址不加入
                console.log(this.editableTabs2);
                console.log(this.$store.state.activeNav);
                for (let i = 0; i < this.$store.state.activeNav.length; i++) {
                    if (this.$store.state.activeNav[i].path === submenu.route) {
                        //如果数组存在路由地址，导航菜单任然在跳转。tabs也变动。
                        this.selectValue = this.editableTabs2[i].name;
                        this.$store.commit("changeTabsValue", this.selectValue);
                        return
                    }
                }
                this.tabIndex = this.tabIndex + 1;
                let newTabName = String(this.tabIndex);
                let title = targetName;
                this.editableTabs2.push({
                    title: title,
                    name: newTabName
                });
                this.$store.commit("addTabs", this.editableTabs2);
                this.selectValue = newTabName;
                this.$store.commit("changeTabsValue", this.selectValue);
                this.$store.commit("addRoutePath", submenu.route);
            },
            /****
             * 移除导航标签
             * @param targetName
             */
            removeTab(targetName) {
                let oldTarget;
                this.editableTabs2.forEach((item, index) => {
                    if (item.name === targetName) {
                        oldTarget = index;
                        this.$store.commit("deleteRoutePath", index);
                    }
                });
                let tabs = this.editableTabs2;
                let activeName = this.selectValue;
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
                this.selectValue = activeName;
                this.$store.commit("changeTabsValue", this.selectValue);
                this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
                this.$store.commit("removeTabs", this.editableTabs2);
                //判断点击的是最后一个或者是第一个或则是中间穿插的删除的
                if (oldTarget === tabs.length - 1 && oldTarget !== 0) {
                    this.$router.push(`${this.$store.state.activeNav[oldTarget - 1].path}`);
                } else if (oldTarget < tabs.length - 1) {
                    //删除中间时,获取删除后的数组中对应的name,和改变后selectValue相同时的索引
                    this.editableTabs2.forEach((item, index) => {
                        if (item.name === this.selectValue) {
                            this.$router.push(`${this.$store.state.activeNav[index].path}`);
                        }
                    });
                } else if (oldTarget === tabs.length - 1 && oldTarget === 0) {
                    this.tabIndex = 0;
                    this.selectValue = "";
                    this.$store.commit("changeTabsValue", this.selectValue);
                    this.$router.push("/home");
                }

            },

            /****
             * 点击tabs导航跳转
             * @param tab (点击的tabs实例)
             */
            selectTab(tab) {
                this.selectValue = this.$store.state.editableTabs2[Number(tab.index)].name;
                this.$store.commit("changeTabsValue", this.selectValue);
                this.$router.push(`${this.$store.state.activeNav[Number(tab.index)].path}`);
            },
            /****
             * 跳至下一个导航
             */
            next() {
                if (this.selectValue > 0) {
                    this.editableTabs2.some((item, index) => {
                        if (item.name === this.selectValue) {
                            if (index + 1 !== this.$store.state.activeNav.length) {
                                this.selectValue = this.editableTabs2[index + 1].name;
                                this.$store.commit("changeTabsValue", this.selectValue);
                                window.location.href = `#${this.$store.state.activeNav[index + 1].path}`;
                                return true;
                            }
                        }
                    })
                } else if (this.selectValue === "" || this.selectValue === "0") {
                    if (this.editableTabs2.length > 0) {
                        this.selectValue = this.editableTabs2[0].name;
                        this.$store.commit("changeTabsValue", this.selectValue);
                        console.log(this.$store.state.selectValue);
                        this.$router.push(`${this.$store.state.activeNav[0].path}`);
                    }
                }
            },
            /****
             * 跳至上一个导航
             */
            prve() {
                if (this.selectValue > 0) {
                    this.editableTabs2.some((item, index) => {
                        if (item.name === this.$store.state.selectValue) {
                            if (index - 1 === -1) {
                                this.selectValue = "";
                                this.$store.commit("changeTabsValue", this.selectValue);
                                this.$router.push('/home');
                                return true
                            }
                            this.selectValue = this.editableTabs2[index - 1].name;
                            this.$store.commit("changeTabsValue", this.selectValue);
                            window.location.href = `#${this.$store.state.activeNav[index - 1].path}`;
                        }
                    })
                }
            },
            /****
             * 关闭操作
             */
            closeWindow() {
                window.location.href = "#/home";
                this.tabIndex = 0;
                this.editableTabs2 = [];
                this.selectValue = "";
                this.$store.commit("changeTabsValue", this.selectValue);
                store.state.activeNav = [];
                store.state.editableTabs2 = [];
            },
            goHome() {
                this.selectValue = "";
                this.$store.commit("changeTabsValue", this.selectValue);
                this.$router.push("/home");
            }
        },
        components: {},
        watch: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .outBox {
        display: flex;
        height: 100vh;
        .sideLeft {
            width: 15%;
            min-width: 210px;
            background-color: #2f4050;
            .personMsgBox {
                width: 100%;
                height: 130px;
                padding-top: 10px;
                padding-left: 20px;
                background-color: rgb(39, 59, 75);
                .headImage {
                    width: 60px;
                    height: 60px;
                    padding: 5px;
                    .image {
                        float: left;
                        width: 100%;
                        height: 100%;
                        border-radius: 55px;
                    }
                }

                .userName {
                    padding-top: 2px;
                    padding-left: 5px;
                    font-size: 12px;
                    font-family: "Arial Black";
                    color: white;
                }

                .userType {
                    padding-left: 5px;
                    font-size: 12px;
                    font-family: "Arial Black";
                    color: rgb(149, 149, 149);
                }
            }

            .shortMsgBox {
                width: 100%;
                height: 80px;
                background-color: rgb(39, 59, 75);
                .headImage {
                    width: 64px;
                    height: 64px;
                    padding: 5px;
                    .image {
                        float: left;
                        width: 100%;
                        height: 100%;
                        border-radius: 64px;
                    }
                }
            }

            .menuColumn {
                width: 100%;
                height: 79vh;
                overflow: auto;
            }
            .menuColumn::-webkit-scrollbar {
                display: none;
            }

        }
        .collapseSideLeft {
            width: 64px;
            min-width: 64px;
        }
        .sideRight {
            width: 100%;
            min-width: 1136px;
            overflow: auto;
            .header {
                width: 100%;
                height: auto;
                .commonHeadBox {
                    width: 100%;
                    height: 7.6vh;
                    .head {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        width: 100%;
                        height: 100%;
                        padding-left: 15px;
                        background-color: rgb(243, 243, 243);

                        .menuButton {
                            width: 30px;
                            height: 30px;
                            background-image: url("../assets/img/classify2.png");
                            background-repeat: no-repeat;
                            background-size: 30px 30px;
                            cursor: pointer;
                        }
                        .menuButtonCollapse {
                            width: 30px;
                            height: 30px;
                            background-image: url("../assets/img/classify.png");
                            background-repeat: no-repeat;
                            background-size: 30px 30px;
                            cursor: pointer;
                        }

                        .title {
                            margin-left: 30px;
                            font-family: "Arial Black";
                            font-size: 16px;
                        }
                    }
                }

                .commonNav {
                    width: 100%;
                    height: 41px;
                    .navBox {
                        width: 100%;
                        height: 41px;
                        background-color: white;
                        border-top: 1px solid rgb(231, 234, 236);
                        border-bottom: 2px solid rgb(47, 64, 80);
                        .changeLeft {
                            float: left;
                            width: 3.3%;
                            height: 100%;
                            border-right: 1px solid rgb(238, 238, 238);
                            padding: 10px;
                            cursor: pointer;
                            .backImage {
                                width: 15px;
                                height: 15px;
                                background-image: url("../assets/img/jiantouarrowheads3.png");
                                background-repeat: no-repeat;
                                background-size: 100% 100%;
                            }
                        }

                        .goToHome {
                            float: left;
                            width: 4.6%;
                            height: 100%;
                            font-size: 12px;
                            line-height: 40px;
                            background-color: rgb(250, 250, 250);
                            color: #999;
                            text-align: center;
                            cursor: pointer;
                            border-right: 1px solid rgb(238, 238, 238);
                        }
                        .goToHome-active {
                            color: white;
                            background-color: #2f4050;
                        }

                        .haveOpenNavBox {
                            float: left;
                            width: 77.8%;
                            height: 100%;
                        }

                        .exit {
                            display: flex;
                            align-items: center;
                            float: right;
                            padding: 5px;
                            width: 5%;
                            height: 100%;
                            border-left: 1px solid rgb(238, 238, 238);
                            font-size: 12px;
                            text-align: center;
                            color: rgb(153, 153, 153);
                            cursor: pointer;
                            .exitImage {
                                display: inline;
                                width: 15px;
                                height: 15px;
                                margin-right: 5px;
                            }
                        }

                        .operation {
                            float: right;
                            width: 5.8%;
                            height: 100%;
                            padding: 5px;
                            line-height: 30px;
                            border-left: 1px solid rgb(238, 238, 238);
                            color: rgb(153, 153, 153);
                            font-size: 12px;
                            text-align: center;
                            cursor: pointer;
                        }

                        .changeRight {
                            float: right;
                            width: 3.3%;
                            height: 100%;
                            border-left: 1px solid rgb(238, 238, 238);
                            padding: 10px;
                            cursor: pointer;

                            .backImageRight {
                                width: 15px;
                                height: 15px;
                                background-image: url("../assets/img/jiantouarrowheads3.png");
                                background-repeat: no-repeat;
                                background-size: 100% 100%;
                                transform: rotate(-180deg);
                            }
                        }
                    }
                }
            }

            .container {
                width: 100%;
                .childView {
                    width: 100%;
                    height: 86.7vh;
                    padding: 20px 15px 0 15px;
                    background-color: #e5e5e5;
                    overflow: auto;
                }
            }
            /*.childView::-webkit-scrollbar {*/
            /*!*width: 6px;*!*/
            /*!*height: 10px;*!*/

            /*!*background-color: #999;*!*/
            /*}*/
        }
    }


</style>
