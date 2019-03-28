<template>
    <div v-loading.fullscreen.lock="loading" element-loading-background="rgba(0, 0, 0, 0.5)">
        <div class="menuBttonBox">
            <el-button type="primary" size="mini" icon="el-icon-arrow-left" @click="success">成功</el-button>
            <el-button type="success" size="mini" icon="el-icon-document" @click="fail">失败</el-button>
            <el-button type="primary" size="mini" icon="el-icon-plus" @click="dialogTableVisible=true">新增</el-button>
            <el-button type="success" size="mini" icon="el-icon-download" @click="submitForm('ruleForm')">提交</el-button>
            <el-button type="warning" size="mini" icon="el-icon-warning">警告按钮</el-button>
            <el-button type="danger" size="mini" icon="el-icon-info">危险按钮</el-button>
        </div>

        <el-dialog title="小弹窗" :visible.sync="dialogTableVisible" width="35%">
            <div class="popContent">
                <el-form :rules="ruleAdd" :model="ruleFormAdd" ref="add">
                    <div class="formBox">
                        <label class="form-label">新增：</label>
                        <div class="formInput-editor">
                            <el-form-item prop="add">
                                <el-input size="mini" v-model="ruleFormAdd.add" placeholder="请输入内容"></el-input>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="formBox">
                        <label class="form-label">选择：</label>
                        <div class="formInput-editor">
                            <el-select v-model="value" size="mini" style="width: 100%" placeholder="请选择">
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="formBox" style="height: 90px">
                        <label class="form-label Height">备注</label>
                        <div class="text-area text-area-col-60">
                            <textarea class="text-area-inner"></textarea>
                        </div>
                    </div>
                </el-form>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" size="mini" @click="newAdd('add')">确 定</el-button>
            </div>
        </el-dialog>
        <p style="font-size: 13px;color: #676a6c;margin: 20px 0">可选择颜色</p>
        <span style="font-size: 13px;color: #676a6c">蓝色（color-blue）、绿色（color-green）、红色（color-red）、黄色（color-yellow）、灰色（color-gray）</span>
        <!--可编辑内容-->
        <div class="searchForm">
            <p style="font-size: 13px;color: #676a6c;margin-bottom: 20px">可编辑的输入框</p>
            <el-form :rules="rules" :model="ruleForm" status-icon ref="ruleForm">
                <el-row :gutter="10">
                    <el-col :span="6">
                        <div class="group-form">
                            <label class="form-label form-col-40">所属组织内容：</label>
                            <div class="formInput-editor formInput-editor-col-60">
                                <el-form-item prop="name">
                                    <el-input size="mini" v-model="ruleForm.name" placeholder="请输入内容"></el-input>
                                </el-form-item>
                            </div>
                            <span class="required">*</span>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="group-form">
                            <label class="form-label">考试名称：</label>
                            <div class="formInput-editor">
                                <el-form-item prop="testName">
                                    <el-input size="mini" v-model="ruleForm.testName"
                                              placeholder="请输入内容"></el-input>
                                </el-form-item>
                            </div>
                            <span class="required">*</span>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="group-form">
                            <label class="form-label">手机验证：</label>
                            <div class="formInput-editor">
                                <el-form-item prop="phone">
                                    <el-input size="mini" v-model="ruleForm.phone" placeholder="请输入内容"></el-input>
                                </el-form-item>
                                <span class="el-icon-required"></span>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="group-form">
                            <label class="form-label">电话号码：</label>
                            <div class="formInput-editor">
                                <el-form-item prop="telphone">
                                    <el-input size="mini" v-model="ruleForm.telphone"
                                              placeholder="请输入内容"></el-input>
                                </el-form-item>
                            </div>
                        </div>
                    </el-col>
                </el-row>

                <el-row :gutter="10">
                    <el-col :span="12">
                        <div class="group-form">
                            <label class="form-label form-col-20">身份证号：</label>
                            <div class="formInput-editor formInput-editor-col-80">
                                <el-form-item prop="idCard">
                                    <el-input size="mini" v-model="ruleForm.idCard" placeholder="请输入内容"></el-input>
                                </el-form-item>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="group-form">
                            <label class="form-label form-col-16">显示成绩：</label>
                            <div class="formInput-editor formInput-editor-col-84">
                                <el-form-item prop="showScore">
                                    <el-input size="mini" v-model="ruleForm.showScore"
                                              placeholder="请输入内容"></el-input>
                                </el-form-item>
                            </div>
                        </div>
                    </el-col>
                </el-row>

                <el-row :gutter="10">
                    <el-col :span="6">
                        <div class="group-form">
                            <label class="form-label form-col-40">选择类型：</label>
                            <div class="formInput-editor formInput-editor-col-60">
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
                    </el-col>

                    <el-col :span="6">
                        <div class="group-form">
                            <label class="form-label">开始时间：</label>
                            <div class="formInput-editor">
                                <el-form-item prop="time">
                                    <el-date-picker
                                        v-model="ruleForm.time"
                                        type="date"
                                        size="mini"
                                        placeholder="选择日期">
                                    </el-date-picker>
                                </el-form-item>
                            </div>
                        </div>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="24">
                        <div class="text-area-box" style="height: 90px">
                            <label class="form-label form-col-10 Height">备注：</label>
                            <div class="text-area">
                                <textarea class="text-area-inner" v-model="ruleForm.area"> </textarea>
                            </div>
                        </div>
                    </el-col>
                </el-row>

                <el-row>
                    <p style="font-size: 13px;color: #676a6c;margin-bottom: 20px">复选按钮</p>
                    <el-col :span="24">
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox label="复选框 A"></el-checkbox>
                            <el-checkbox label="复选框 B"></el-checkbox>
                            <el-checkbox label="复选框 C"></el-checkbox>
                            <el-checkbox label="禁用" disabled></el-checkbox>
                            <el-checkbox label="选中且禁用" disabled></el-checkbox>
                        </el-checkbox-group>
                    </el-col>
                </el-row>

                <el-row>
                    <p style="font-size: 13px;color: #676a6c;margin-bottom: 20px">单选按钮</p>
                    <el-col :span="24">
                        <el-radio v-model="radio" label="1">备选项</el-radio>
                        <el-radio v-model="radio" label="2">备选项</el-radio>
                    </el-col>
                </el-row>
            </el-form>
        </div>
    </div>

</template>

<script>
    export default {
        name: "test1",
        data() {
            let phoneNumber = (rule, value, callback) => {
                const phone = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
                if (!phone.test(value)) {
                    callback(new Error('输入手机号错误'));
                } else {
                    callback();
                }
            };
            let telPhone = (rule, value, callback) => {
                const phone = /^\d{3}-\d{8}|^\d{4}-\d{7}/;
                if (!phone.test(value)) {
                    callback(new Error('输入电话号码错误'));
                } else {
                    callback()
                }
            };
            let idCard = (rule, value, callback) => {
                const idCard = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
                if (!idCard.test(value)) {
                    callback(new Error('输入身份证号码错误'));
                } else {
                    callback()
                }
            };
            return {
                dialogTableVisible: false,
                loading: false,
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                ruleForm: {
                    name: '',
                    testName: '',
                    phone: '',
                    telphone: '',
                    idCard: '',
                    showScore: '',
                    time: '',
                    area: ''
                },
                ruleFormAdd: {
                    add: ''
                },
                rules: {
                    name: [
                        {required: true, message: '请输入组织内容', trigger: 'blur'},
                    ],
                    testName: [
                        {required: true, message: '考试名称', trigger: 'blur'}
                    ],
                    phone: [
                        {validator: phoneNumber, message: '手机号格式不正确', trigger: 'blur'}
                    ],
                    telphone: [
                        {validator: telPhone, message: '电话号码格式不正确', trigger: 'blur'}
                    ],
                    idCard: [
                        {validator: idCard, message: '身份证号格式不正确', trigger: 'blur'}
                    ],
                    showScore: [
                        {required: true, message: '输入文字', trigger: 'blur'}
                    ],
                    time: [
                        {type: 'date', message: '请选择日期', trigger: 'blur'}
                    ],
                },
                ruleAdd: {
                    add: [
                        {required: true, message: '输入文字', trigger: 'blur'}
                    ]
                },
                value: '',
                date: '',
                dynamicTags: ['标签一', '标签二', '标签三'],
                inputVisible: false,
                inputValue: '',
                dialogImageUrl: '',
                dialogVisible: false,
                checkList: ["复选框A", "选中且禁用"],
                radio: "1",

            }
        },
        created() {

        },
        mounted() {

        },
        methods: {
            /****
             * 提交表单验证
             * @param formName
             */
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$confirm('确定要提交信息, 是否继续?', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            iconClass: 'el-icon-question',
                        }).then(() => {
                            this.loading = true;
                            setTimeout(() => {
                                this.loading = false;
                                this.$message({
                                    showClose: true,
                                    type: 'success',
                                    message: '提交成功!'
                                });
                            }, 3000);

                        }).catch(() => {
                            this.$message({
                                showClose: true,
                                type: 'info',
                                message: '已取消提交'
                            });
                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            newAdd(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$confirm('确定要提交信息, 是否继续?', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            iconClass: 'el-icon-question',
                        }).then(() => {
                            this.$message({
                                showClose: true,
                                type: 'success',
                                message: '提交成功!'
                            });
                        }).catch(() => {
                            this.$message({
                                showClose: true,
                                type: 'info',
                                message: '已取消提交'
                            });
                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            success() {
                this.$message({
                    showClose: true,
                    message: '恭喜你，这是一条成功消息',
                    type: 'success'
                });
            },
            fail() {
                this.$message({
                    showClose: true,
                    message: '失败哦，这是一条失败消息',
                    type: 'error'
                });
            }

        },
        components: {}

    }
</script>

<style lang="less">
    @import "../../src/assets/css/popUpOne";

    .menuButtonBox {
        width: 100%;
        height: 55px;
        margin-bottom: 25px;
    }

    .searchForm {
        width: 100%;
        margin-top: 2vh;
        padding-top: 10px;
    }
</style>
