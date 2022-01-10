<template>
    <div>
        <div class="cover-dialog" v-if="coverDialogShow" v-loading="loading">
            <div class="left-cover-img">
                <div class="view-cotent" id="view-cotent">
                    <!-- <div class="viewImg" id="viewImg" @mousedown="onmousedown"></div> -->
                    <img
                        class="viewImg"
                        id="viewImg"
                        :src="viewSrc"
                        alt=""
                        ondragstart="return false;"
                        @mousedown="onmousedown"
                    />
                </div>
                <i class="yh-icon-close" @click="closeCoverDialog"></i>
            </div>
            <div class="right-cover-nav gray-color59">
                <template v-for="(item, index) in coverNavData">
                    <div
                        :key="'nav' + index"
                        class="pointer"
                        :class="viewName == item[dataKey.title] ? 'white-color' : ''"
						style="text-align: center;"
                        @click="changeCover(item)"
                    >
                        <div
                            class="nav-content"
                            :class="viewName == item[dataKey.title] ? 'white-border' : ''"
                        >
                            <img :src="item.src" alt=""/>
                        </div>
                        <div class="nav-title">{{ item[dataKey.title] }}</div>
                    </div>
                </template>
            </div>
        </div>
        <div id="empty-content">
            <div>1234</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            //   需要渲染的data
            coverNavData: {
                type: Array,
                default: () => {
                    return [];
                },
            },
            dataKey: {
                type: Object,
                default: () => {
                    return {
                        title: "title",
                        src: "src",
                    };
                },
            },
            // 当前选中的类名
            navName: {
                type: String,
                default: '',
            },
            // 是否展示预览框
            coverDialogShow: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                loading: false,
                viewSrc: "",
                viewName: "",
                scal: 1,
            };
        },
        mounted() {
            // // IE9, Chrome, Safari, Opera
            // viewImg.addEventListener("mousewheel", onMouseWheel, false);
            // // Firefox
            // viewImg.addEventListener("DOMMouseScroll", onMouseWheel, false);
        },
        methods: {
            changeCover(data) {
                this.viewName = data[this.dataKey.title];
                this.viewSrc = data[this.dataKey.src];
                this.centerScale();
                this.setBackImg();
            },
            getImg() {
                this.coverDialogShow = true;
                this.coverNavData.map((item, index) => {
                    if (this.coverNavData[index][this.dataKey.title] == this.viewName) {
                        this.viewSrc = this.coverNavData[index][this.dataKey.src];
                    }
                });
            },
            setBackImg() {
                let backImg = document.getElementById("viewImg");
                backImg.style.backgroundImage = `url(${this.viewSrc})`;
                backImg.style.backgroundRepeat = "no-repeat";
                backImg.style.backgroundPosition = "center";
                backImg.style.backgroundSize = "cover";
            },
            closeCoverDialog() {
                this.$emit('update:coverDialogShow', false);
            },
            onmousedown(ev) {
                let event = ev || window.event;
                let mousePlaceX = event.clientX; //点击时当前鼠标的位置 X轴
                let mousePlaceY = event.clientY; //点击时当前鼠标的位置 Y轴
                let backImg = document.getElementById("viewImg");
                let viewContent = document.getElementById("view-cotent");
                //鼠标移动的时候
                viewContent.onmousemove = function (ev) {
                    let event = ev || window.event; //当前的事件对象
                    let mouseMoveX = mousePlaceX - event.clientX; //拖动的X距离
                    let mouseMoveY = mousePlaceY - event.clientY; //拖动的Y距离
                    backImg.style.marginLeft = Number(backImg.style.marginLeft.split("px")[0] || 0) + mouseMoveX * -1 + "px";
                    backImg.style.marginTop = Number(backImg.style.marginTop.split("px")[0] || 0) + mouseMoveY * -1 + "px";
                    mousePlaceX = event.clientX;
                    mousePlaceY = event.clientY;
                };
                viewContent.onmouseup = function () {
                    viewContent.onmousemove = null;
                    viewContent.onmouseup = null;
                };
            },
            onMouseWheel(e) {
                let viewImg = document.getElementById("viewImg");
                let scal = this.scal;
                /*当鼠标滚轮事件发生时，执行一些操作*/
                let ev = e || window.event;
                let down = true; // 定义一个标志，当滚轮向下滚时，执行一些操作
                down = ev.wheelDelta ? ev.wheelDelta < 0 : ev.detail > 0;
                if (down) {
                    if (scal == 1) {
                        scal = 1;
                        return;
                    } else {
                        scal = (parseFloat(scal) - 0.04).toFixed(2);
                    }
                    viewImg.style.transform = "scale(" + scal + ")"; //scale()在这里要使用拼接的方式才能生效。
                    viewImg.style.transformOrigin = "0 0";
                } else {
                    console.log("鼠标滚轮向下放大---------");
                    scal = (parseFloat(scal) + 0.04).toFixed(2);
                    console.log("放大系数: " + scal);
                    viewImg.style.transform = "scale(" + scal + ")"; //scale()在这里要使用拼接的方式才能生效
                    viewImg.style.transformOrigin = "0 0";
                }
                if (ev.preventDefault) {
                    /*FF 和 Chrome*/
                    ev.preventDefault(); // 阻止默认事件
                }
                this.scal = scal;
                return false;
            },

            addEvent(obj, xEvent, fn) {
                if (obj.attachEvent) {
                    obj.attachEvent("on" + xEvent, fn);
                } else {
                    obj.addEventListener(xEvent, fn, false);
                }
            },
            // 还原缩放
            centerScale() {
                let viewImg = document.getElementById("viewImg");
                this.scal = 1;
                viewImg.style.transform = "scale(" + this.scal + ")";
                viewImg.style.transformOrigin = "0 0";
            },
        },
        watch: {
            coverDialogShow: {
                handler(newValue) {
                    if (newValue) {
                            this.navName != ''?this.viewName = this.navName:this.viewName = this.coverNavData[0][this.dataKey.title]
                        this.getImg();
                        this.$nextTick(() => {
                            var viewImg = document.getElementById("viewImg");
                            this.setBackImg();
                            this.addEvent(viewImg, "mousewheel", this.onMouseWheel);
                            this.addEvent(viewImg, "DOMMouseScroll", this.onMouseWheel);
                        });
                    }
                },
                deep: true,
            },
        },
    };
</script>

<style lang="scss" scoped>
    .cover-dialog {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        background: rgba(0, 0, 0, 0.6);
        z-index: 3000;
        .left-cover-img {
            width: 100%;
            height: 100%;
            padding: 31px 88px;
            position: relative;
            .yh-icon-close {
                position: absolute;
                right: 24px;
                top: 24px;
                color: #fff;
                font-size: 30px;
                cursor: pointer;
            }
            .view-cotent {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: auto;
                white-space: nowrap;
            }
            .view-cotent::-webkit-scrollbar {
                display: none;
            }
            .view-cotent {
                -ms-overflow-style: none;
            }
            //IE 10+
            .view-cotent {
                overflow: -moz-scrollbars-none;
            }
            //Firefox
            .viewImg {
                max-width: 100%;
                max-height: 100%;
                // cursor: pointer;
                // transition: all 0.6s;
            }
        }
        .right-cover-nav {
            height: 100%;
            padding: 40px 12px;
            background: #000;
            font-size: 14px;
            overflow-y: auto;
            .white-border {
                border: 1px solid #fff !important;
            }
            .nav-content {
				display: inline-block;
                width: 60px;
                height: 58px;
                text-align: center;
                border: 1px solid #505050;
                padding: 0 8px;
                border-radius: 2px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .nav-title {
                margin-top: 8px;
                margin-bottom: 24px;
                text-align: center;
            }
        }
    }

    #empty-content {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -20;
    }
</style>