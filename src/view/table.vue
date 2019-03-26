<template>
    <div>
        <div class="search">
            <div class="inner">
                <el-row :gutter="5">
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <div class="search-form">
                                <label class="search-form-label">所属学校：</label>
                                <input type="text" class="search-form-input ">
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <div class="search-form">
                                <label class="search-form-label">所属学校：</label>
                                <input type="text" class="search-form-input">
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <div class="search-form">
                                <label class="search-form-label search-form-label-col-40">所属学校地址：</label>
                                <input type="text" class="search-form-input search-form-input-60 ">
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <div class="search-form">
                                <label class="search-form-label">所属学校：</label>
                                <div class="select">
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
                        </div>
                    </el-col>
                </el-row>

                <el-row :gutter="5">
                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <div class="search-form">
                                <label class="search-form-label search-form-label-col-16">所属学校：</label>
                                <input type="text" class="search-form-input search-form-input-84">
                            </div>
                        </div>
                    </el-col>

                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <div class="search-form">
                                <label class="search-form-label search-form-label-col-40">所属学校区域：</label>
                                <input type="text" class="search-form-input search-form-input-60">
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <div class="search-form">
                                <label class="search-form-label ">所属学校：</label>
                                <div class="select">
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
                        </div>
                    </el-col>
                </el-row>

                <el-row :gutter="5">
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <div class="search-form">
                                <label class="search-form-label ">所属学校：</label>
                                <input type="text" class="search-form-input">
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <div class="search-form">
                                <label class="search-form-label">所属学校：</label>
                                <input type="text" class="search-form-input">
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <div class="search-form">
                                <label class="search-form-label search-form-label-col-40">所属学校地点：</label>
                                <input type="text" class="search-form-input search-form-input-60">
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <div class="search-form">
                                <label class="search-form-label">所属学校：</label>
                                <div class="select">
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
                        </div>
                    </el-col>
                </el-row>
            </div>
            <el-button type="primary" class="btn" icon="el-icon-search" size="mini">查询</el-button>
        </div>

        <div class="itemListBox">
            <el-table
                ref="multipleTable"
                v-loading="tableLoading"
                element-loading-background="rgba(0, 0, 0, 0.5)"
                :data="tableData"
                border
                stripe
                :height=tableHeight
                @select-all="selectAll"
                @selection-change="handleSelectionChange"
            >
                <el-table-column
                    type="selection"
                    fixed
                    width="55">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="90">
                </el-table-column>
                <el-table-column
                    prop="studyNum"
                    sortable
                    label="学号"
                    width="110">
                </el-table-column>
                <el-table-column
                    prop="sex"
                    label="性别"
                    width="70">
                </el-table-column>
                <el-table-column
                    prop="school"
                    label="所在学校"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="departments"
                    label="所在院系"
                    width="110">
                </el-table-column>
                <el-table-column
                    prop="major"
                    label="所在专业"
                    width="80">
                </el-table-column>
                <el-table-column
                    prop="grade"
                    label="所在班级"
                    width="80">
                </el-table-column>
                <el-table-column
                    prop="idCard"
                    label="身份证号"
                    width="200">
                </el-table-column>
                <el-table-column
                    prop="testName"
                    label="考试名称"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="testRole"
                    label="考试角色"
                    width="90">
                </el-table-column>
                <el-table-column
                    prop="group"
                    label="考试分组"
                    width="90">
                </el-table-column>
                <el-table-column
                    label="操作"
                    fixed="right"
                    width="270">
                    <template slot-scope="scope">
                        <div class="bottonBox">
                            <div class="button">
                                <i class="iconfont icon-chakan" style="color: #1a7bb9"></i>
                                <span>查看</span>
                            </div>
                            <div class="button" @click="detailDialog=true">
                                <i class="iconfont icon-bianji" style="color:#3bbea4;"></i>
                                <span>编辑</span>
                            </div>
                            <div class="button" @click="deleteMsg(scope.$index)">
                                <i class="el-icon-delete" style="color: red"></i>
                                <span>删除</span>
                            </div>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
            <div class="block">
                <el-button style="margin-top: 2px;color: red;border: none" icon="el-icon-delete" size="mini"
                           @click="clearData"
                >批量删除
                </el-button>
                <el-pagination
                    background
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[50, 100, 150, 200]"
                    :page-size="100"
                    layout=" prev, pager, next, ->,sizes ,total"
                    :total="500">
                </el-pagination>
            </div>
        </div>

        <el-dialog
            title="编辑大弹窗"
            :visible.sync="detailDialog"
            width="60%"
            v-loading.fullscreen.lock="loading"
            element-loading-background="rgba(0, 0, 0, 0.5)"
        >
            <el-row :gutter="10">
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <div class="group-form">
                            <label class="form-label">编辑内容内型</label>
                            <div class="formInput-editor">
                                <el-input size="mini" placeholder="请输入内容"></el-input>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <div class="group-form">
                            <label class="form-label">编辑内容</label>
                            <div class="formInput-editor">
                                <el-input size="mini" placeholder="请输入内容"></el-input>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <div class="group-form">
                            <label class="form-label">编辑内容</label>
                            <div class="formInput-editor">
                                <el-input size="mini" placeholder="请输入内容"></el-input>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <div class="group-form">
                            <label class="form-label">编辑内容</label>
                            <div class="formInput-editor">
                                <el-input size="mini" placeholder="请输入内容"></el-input>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="16">
                    <div class="grid-content bg-purple">
                        <div class="group-form">
                            <label class="form-label form-col-16">编辑内容</label>
                            <div class="formInput-editor formInput-editor-col-84">
                                <el-input size="mini" placeholder="请输入内容"></el-input>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <div class="group-form">
                            <label class="form-label">编辑内容类型</label>
                            <div class="formInput-editor">
                                <el-input size="mini" placeholder="请输入内容"></el-input>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <div class="group-form">
                            <label class="form-label">编辑内容</label>
                            <div class="formInput-editor">
                                <el-input size="mini" placeholder="请输入内容"></el-input>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <div class="group-form">
                            <label class="form-label">编辑内容</label>
                            <div class="formInput-editor">
                                <el-input size="mini" placeholder="请输入内容"></el-input>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" size="mini" @click="submitEditor">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "test2",
        data() {
            return {
                tableHeight: null,
                detailDialog: false,
                loading: false,
                tableLoading: false,
                currentPage4: 4,
                tableData: [
                    {
                        id: 0,
                        name: '陆飞',
                        studyNum: '001',
                        sex: '男',
                        school: '四川大学',
                        departments: '财务系',
                        major: '会计',
                        grade: '2018级',
                        idCard: '5102165441545454545',
                        testName: '考试1',
                        testRole: '税务专员',
                        group: '1'
                    },
                    {
                        id: 1,
                        name: '陆飞',
                        studyNum: '002',
                        sex: '男',
                        school: '四川大学',
                        departments: '财务系',
                        major: '会计',
                        grade: '2018级',
                        idCard: '5102165441545454545',
                        testName: '考试1',
                        testRole: '税务专员',
                        group: '1'
                    },
                    {
                        id: 2,
                        name: '陆飞',
                        studyNum: '003',
                        sex: '男',
                        school: '四川大学',
                        departments: '财务系',
                        major: '会计',
                        grade: '2018级',
                        idCard: '5102165441545454545',
                        testName: '考试1',
                        testRole: '税务专员',
                        group: '1'
                    },
                    {
                        id: 3,
                        name: '陆飞',
                        studyNum: '004',
                        sex: '男',
                        school: '四川大学',
                        departments: '财务系',
                        major: '会计',
                        grade: '2018级',
                        idCard: '5102165441545454545',
                        testName: '考试1',
                        testRole: '税务专员',
                        group: '1'
                    },
                    {
                        id: 3,
                        name: '陆飞',
                        studyNum: '005',
                        sex: '男',
                        school: '四川大学',
                        departments: '财务系',
                        major: '会计',
                        grade: '2018级',
                        idCard: '5102165441545454545',
                        testName: '考试1',
                        testRole: '税务专员',
                        group: '1'
                    },
                    {
                        id: 3,
                        name: '陆飞',
                        studyNum: '006',
                        sex: '男',
                        school: '四川大学',
                        departments: '财务系',
                        major: '会计',
                        grade: '2018级',
                        idCard: '5102165441545454545',
                        testName: '考试1',
                        testRole: '税务专员',
                        group: '1'
                    },
                    {
                        id: 3,
                        name: '陆飞',
                        studyNum: '007',
                        sex: '男',
                        school: '四川大学',
                        departments: '财务系',
                        major: '会计',
                        grade: '2018级',
                        idCard: '5102165441545454545',
                        testName: '考试1',
                        testRole: '税务专员',
                        group: '1'
                    },
                    {
                        id: 3,
                        name: '陆飞',
                        studyNum: '008',
                        sex: '男',
                        school: '四川大学',
                        departments: '财务系',
                        major: '会计',
                        grade: '2018级',
                        idCard: '5102165441545454545',
                        testName: '考试1',
                        testRole: '税务专员',
                        group: '1'
                    },
                    {
                        id: 3,
                        name: '陆飞',
                        studyNum: '009',
                        sex: '男',
                        school: '四川大学',
                        departments: '财务系',
                        major: '会计',
                        grade: '2018级',
                        idCard: '5102165441545454545',
                        testName: '考试1',
                        testRole: '税务专员',
                        group: '1'
                    },
                    {
                        id: 3,
                        name: '陆飞',
                        studyNum: '0010',
                        sex: '男',
                        school: '四川大学',
                        departments: '财务系',
                        major: '会计',
                        grade: '2018级',
                        idCard: '5102165441545454545',
                        testName: '考试1',
                        testRole: '税务专员',
                        group: '1'
                    },
                    {
                        id: 3,
                        name: '陆飞',
                        studyNum: '0011',
                        sex: '男',
                        school: '四川大学',
                        departments: '财务系',
                        major: '会计',
                        grade: '2018级',
                        idCard: '5102165441545454545',
                        testName: '考试1',
                        testRole: '税务专员',
                        group: '1'
                    },
                    {
                        id: 3,
                        name: '陆飞',
                        studyNum: '0012',
                        sex: '男',
                        school: '四川大学',
                        departments: '财务系',
                        major: '会计',
                        grade: '2018级',
                        idCard: '5102165441545454545',
                        testName: '考试1',
                        testRole: '税务专员',
                        group: '1'
                    },
                    {
                        id: 3,
                        name: '陆飞',
                        studyNum: '0013',
                        sex: '男',
                        school: '四川大学',
                        departments: '财务系',
                        major: '会计',
                        grade: '2018级',
                        idCard: '5102165441545454545',
                        testName: '考试1',
                        testRole: '税务专员',
                        group: '1'
                    },
                    {
                        id: 3,
                        name: '陆飞',
                        studyNum: '0014',
                        sex: '男',
                        school: '四川大学',
                        departments: '财务系',
                        major: '会计',
                        grade: '2018级',
                        idCard: '5102165441545454545',
                        testName: '考试1',
                        testRole: '税务专员',
                        group: '1'
                    }
                ],
                multipleSelection: [],
                value: '',
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
            }
        },
        created() {

        },
        mounted() {
            this.tableHeight = (document.querySelector(".childView").offsetHeight - 30) -
                (document.querySelector(".search").offsetHeight + 15) - 100;
        },
        methods: {
            selectAll(selection) {

            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            clearData() {
                this.$confirm('此操作将批量删除，是否继续', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    iconClass: 'el-icon-question'
                }).then( () => {
                    this.$message({
                        showClose: true,
                        type: 'success',
                        message: '删除成功!'
                    });
                }) .catch(() => {
                    this.$message({
                        showClose: true,
                        type: 'info',
                        message: '已取消删除'
                    });
                })
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            deleteMsg(scope) {
                this.$confirm('此操作将删除该选项, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    iconClass: 'el-icon-question'
                }).then(() => {
                    this.tableLoading = true;
                    setTimeout(() => {
                        this.tableLoading = false;
                        this.tableData.splice(scope, 1);
                        this.$message({
                            showClose: true,
                            type: 'success',
                            message: '删除成功!'
                        });
                    }, 3000);

                }).catch(() => {
                    this.$message({
                        showClose: true,
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            /****
             * 提交编辑
             */
            submitEditor() {
                this.$confirm('确认提交编辑内容, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    iconClass: 'el-icon-question'
                }).then(() => {
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        this.detailDialog = false;
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
                        message: '已撤回提交'
                    });
                });
            }
        }
    }
</script>

<style lang="less" scoped>

    .search {
        position: relative;
        width: 100%;
        padding-top: 15px;
        background-color: white;
        .inner {
            width: 90%;
            height: 100%;
        }
        .btn {
            position: absolute;
            right: 10px;
            bottom: 9%;
        }

    }

    .itemListBox {
        width: 100%;
        margin-top: 15px;
    }

    .bottonBox {
        display: flex;
        width: 270px;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        .button {
            cursor: pointer;
        }
    }
</style>
