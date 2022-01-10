<template>
    <div class="image-view" @mouseover="hoverShow" @mouseout="hoverClose">
        <img class="image-show" :src="imageList[0]" alt="">
        <div v-if="hover" class="deep-cover">
            <span class="iconfont iconyh-icon-ued-view view-eyes"></span>
        </div>
        <div v-else class="light-cover">
            <span class="image-num">{{imageList.length}}</span>
        </div>

    </div>
</template>

<script>
    export default {
        name: "image-view",
        props: {
            imageList: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                hover: false
            }
        },
        methods: {
            hoverShow() {
                this.hover = true;
            },
            hoverClose() {
                this.hover = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .image-view {
        width: 100%;
        height: inherit;
        position: relative;
        border-radius: 2px;
        .image-show {
            width: 100%;
            height: inherit;
            border-radius: 2px;
        }
        .light-cover {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: rgba(153, 153, 153, 0.2);
            border-radius: 2px;
        }
        .image-num {
            position: absolute;
            bottom: 0px;
            right: 2px;
            font-size: 12px;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.85);
        }
        .deep-cover {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: rgba(38, 38, 38, 0.75);;
            border-radius: 2px;
            line-height: 100%;
            .view-eyes {
                color: #ffffff;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translateX(-50%) translateY(-50%);
            }
        }
    }
</style>