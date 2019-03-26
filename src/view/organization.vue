<template>
    <div>
        <div class="organization-directory">
            <el-tree
                :data="data"
                node-key="id"
                default-expand-all
                :expand-on-click-node="false"
                @node-click="handleNodeClick"
                @node-contextmenu="rightClickEvent"
            >
            </el-tree>
        </div>
        <div class="editorBox" :style="editorBoxStyle" v-if="editorShow">
            <div class="editorBtn" style="color: #3a8ee6" @click="append(currentValue.data)">
                <i class="el-icon-plus"></i>
                <span>新增</span>
            </div>
            <div class="editorBtn" style="color:rgb(59,190,164);">
                <i class="iconfont icon-bianji"></i>
                <span>编辑</span>
            </div>
            <div class="editorBtn" style="color: red" @click="stopUse(currentValue)">
                <i class="iconfont icon-jinyong"></i>
                <span>禁用</span>
            </div>
        </div>
    </div>
</template>

<script>
    let id = 1000;
    export default {
        name: "organization",
        data() {
            return {
                data: [
                    {

                        label: '一级 1',
                        disabled: false,
                        children: [
                            {
                                label: '二级 1-1',
                                disabled: false,
                                children: [
                                    {
                                        label: '三级 1-1-1',
                                        disabled: false,
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: '一级 2',
                        disabled: false,
                        children: [
                            {
                                label: '二级 2-1',
                                disabled: false,
                                children: [
                                    {
                                        label: '三级 2-1-1',
                                        disabled: false,
                                    }
                                ]
                            },
                            {

                                label: '二级 2-2',
                                disabled: false,
                                children: [
                                    {
                                        label: '三级 2-2-1',
                                        disabled: false,
                                    }
                                ]
                            }]
                    },
                    {

                        label: '一级 3',
                        disabled: false,
                        children: [
                            {

                                label: '二级 3-1',
                                disabled: false,
                                children: [{
                                    label: '三级 3-1-1',
                                    disabled: false,
                                }]
                            },
                            {

                                label: '二级 3-2',
                                disabled: false,
                                children: [{
                                    label: '三级 3-2-1',
                                    disabled: false,
                                }]
                            }
                        ]
                    },
                ],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                currentValue: null,
                editorShow: false,
                editorBoxStyle: {
                    left: "",
                    top: ""
                }
            }
        },
        created() {

        },
        mounted() {
            window.addEventListener("click", () => {
                this.editorShow = false;
            })
        },
        methods: {
            handleNodeClick(data) {
                // console.log(data);
                this.editorShow = false;
            },
            rightClickEvent(event, data, node, obj) {
                // console.log(event);
                this.editorShow = true;
                this.editorBoxStyle.left = `${event.clientX}px`;
                this.editorBoxStyle.top = `${event.clientY}px`;
                this.currentValue = node;
                // console.log(data);
                // console.log(node);
                // console.log(obj);

            },
            append(data) {
                console.log(data);
                const newChild = {id: id++, label: 'testtest', children: []};
                if (!data.children) {
                    this.$set(data, 'children', []);
                }
                data.children.push(newChild);
            },
            stopUse(data) {
                data.data.disabled = true;
                console.log(data)
            }
        }
    }
</script>

<style lang="less" scoped>
    .organization-directory {
        width: 100%;
    }

    .editorBox {
        position: absolute;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        width: 100px;
        padding: 0px 12px;
        border: 1px solid rgb(234, 235, 237);
        background-color: #ffffff;
        .editorBtn {
            width: 55px;
            height: 25px;
            margin-top: 10px;
            font-size: 14px;
            text-align: center;
            cursor: pointer;
        }
    }
</style>