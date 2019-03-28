<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="5">
                <div class="grid-content bg-purple">
                    <div class="leftColumn">
                        <div class="operatorBox">
                            <label class="form-label form-col-25">类型：</label>
                            <div class="formInput-editor formInput-editor-col-75 line-height-28">
                                <el-select v-model="value" size="mini" placeholder="请选择">
                                    <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <div class="operatorBox">
                            <label class="form-label form-col-25">搜索</label>
                            <div class="formInput-editor formInput-editor-col-75">
                                <el-input
                                    placeholder="请输入内容"
                                    suffix-icon="el-icon-search"
                                    size="mini"
                                >
                                </el-input>
                            </div>
                        </div>
                        <ul>
                            <li @click="changeUserPermission(o)" v-for="o in options">{{o.label}}</li>
                        </ul>
                    </div>
                </div>
            </el-col>

            <el-col :span="19"><div class="grid-content bg-purple">
                <div class="management">
                    <el-tree :data="data" show-checkbox>
                    </el-tree>
                </div>
            </div></el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "userPermissionManagement",
        data() {
            return {
                value: '',
                data: [{
                    label: '一级 1',
                    children: [{
                        label: '二级 1-1',
                        children: [{
                            label: '三级 1-1-1'
                        }]
                    }]
                }, {
                    label: '一级 2',
                    children: [{
                        label: '二级 2-1',
                        children: [{
                            label: '三级 2-1-1'
                        }]
                    }, {
                        label: '二级 2-2',
                        children: [{
                            label: '三级 2-2-1'
                        }]
                    }]
                }, {
                    label: '一级 3',
                    children: [{
                        label: '二级 3-1',
                        children: [{
                            label: '三级 3-1-1'
                        }]
                    }, {
                        label: '二级 3-2',
                        children: [{
                            label: '三级 3-2-1'
                        }]
                    }]
                }],
                options: [
                    {
                        value: '选项一',
                        label: '角色'
                    },
                    {
                        value: '选项二',
                        label: '管理员'
                    }, {
                        value: '选项三',
                        label: '超级管理员'
                    }
                ],

            }
        },
        methods: {

        }
    }
</script>

<style lang="less" scoped>
    .leftColumn {
        height: 100%;
        background-color: white;
        .operatorBox {
            overflow: hidden;
        }
        ul {
            width: 100%;
            li {
                list-style: none;
                height: 35px;
                border-bottom: 1px solid rgb(234, 235, 237);
                border-top: none;
                text-align: center;
                font-size: 14px;
                color: #676a6c;
                line-height: 35px;
                cursor: pointer;
            }
        }
    }

    .management {
        background-color: white;
    }
</style>