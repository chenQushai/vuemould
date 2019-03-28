<template>
    <div>
        <div class="detailPage">
            <div class="content">
                <p style="font-size: 13px;color: #676a6c;margin-bottom: 20px">查看详情展示</p>
                <el-row :gutter="20">
                    <el-col :span="6">
                        <div class="group-show-form">
                            <label class="form-label-show">考试名称:</label>
                            <input type="text" class="form-show" v-model="dataMsg" disabled>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="group-show-form">
                            <label class="form-label-show">考试模式:</label>
                            <input type="text" class="form-show" disabled>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="group-show-form">
                            <label class="form-label-show">考试科目:</label>
                            <input type="text" class="form-show" disabled>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="group-show-form">
                            <label class="form-label-show">考试名称:</label>
                            <input type="text" class="form-show" disabled>
                        </div>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="6">
                        <div class="group-show-form">
                            <label class="form-label-show">考试模式模式:</label>
                            <input type="text" class="form-show" disabled>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="group-show-form">
                            <label class="form-label-show">考试模式:</label>
                            <input type="text" class="form-show" disabled>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="group-show-form">
                            <label class="form-label-show form-label-show-col-16">考试人数人数:</label>
                            <input type="text" class="form-show form-show-col-84" disabled>
                        </div>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="6">
                        <div class="group-show-form" style="height: 30px;">
                            <label class="form-label-show" style="line-height: 30px">开始时间:</label>
                            <div class="form-show">
                                <el-date-picker
                                    v-model="date"
                                    size="mini"
                                    type="date"
                                    disabled
                                    readonly
                                >
                                </el-date-picker>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="group-show-form" style="height: 30px;">
                            <label class="form-label-show" style="line-height: 30px;">结束时间:</label>
                            <div class="form-show">
                                <el-date-picker
                                    v-model="date"
                                    size="mini"
                                    type="date"
                                    disabled
                                >
                                </el-date-picker>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="group-show-form" style="height: 30px;">
                            <label class="form-label-show" style="line-height: 30px;">开始时间:</label>
                            <div class="form-show">
                                <el-date-picker
                                    v-model="date"
                                    size="mini"
                                    type="date"
                                    disabled
                                >
                                </el-date-picker>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="group-show-form" style="height: 30px">
                            <label class="form-label-show" style="line-height: 30px;">结束时间:</label>
                            <div class="form-show">
                                <el-date-picker
                                    v-model="date"
                                    size="mini"
                                    type="date" disabled
                                >
                                </el-date-picker>
                            </div>
                        </div>
                    </el-col>

                </el-row>

                <el-row>
                    <el-col :span="24">
                        <div class="text-area-box" style="height: 90px">
                            <label class="form-label-show form-label-show-col-8 Height">备注</label>
                            <div class="text-area form-show-col-92">
                                <textarea class=" textAreaInnerShow " disabled></textarea>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "detailPage",
        data() {
            return {
                dataMsg: '2019年考试信息',
                date: '2010-10-01',
            }
        },
        created() {

        },
        mounted() {

        },
        methods: {

        }
    }
</script>
<style lang="less" scoped>
    .detailPage {
        width: 100%;
        height: auto;
        .content {
            width: 100%;
            margin-top: 15px;
            .el-row {
                margin-bottom: 5px;
            }
        }
    }

</style>
