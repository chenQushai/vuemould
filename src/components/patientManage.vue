<template>
    <div>
        <div class="form-box border-gray">
            <el-form ref="form" :model="form" :inline="true" inline-message size="mini">
                <el-row :gutter="10">
                    <el-col :span="8" class="el-world-6 el-col-item">
                        <el-checkbox class="check-box" v-model="form.overOffice"
                                     :disabled="isSelectOffice"></el-checkbox>
                        <el-form-item label="科室:">
                            <el-select v-model="form.office" filterable clearable placeholder="请选择"
                                       :disabled="!form.overOffice || officeDisabled">
                                <el-option
                                        v-for="item in office"
                                        :key="item.IKSBM"
                                        :label="item.CKSMC"
                                        :value="item.IKSBM">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" class="el-world-6 el-col-item">
                        <el-checkbox class="check-box" v-model="form.overArea"></el-checkbox>
                        <el-form-item label="病区:">
                            <el-select v-model="form.area" filterable clearable placeholder="请选择"
                                       :disabled="!form.overArea">
                                <el-option
                                        v-for="item in AreaOption"
                                        :key="item.IBM"
                                        :label="item.CMC"
                                        :value="item.IBM">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4" class="el-world-6 el-col-item">
                        <el-form-item>
                            <el-input
                                    style="display: inline-block;width: 210px;margin-left: 20px"
                                    placeholder="请输入病人名称"
                                    prefix-icon="el-icon-search"
                                    size="mini"
                                    v-model="form.searchVal">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4" style="text-align: right">
                        <el-button type="primary" size="mini" @click="getHospitalPatient('searchBtn')">查询</el-button>
                    </el-col>
                </el-row>
            </el-form>
        </div>

        <div class="border-gray margin-top10">
            <el-table
                    v-loading="patientLoading"
                    :data="patientData"
                    :height="458"
                    stripe
                    highlight-current-row
                    :header-row-style="{background:'#F2F7FF'}"
                    :header-cell-style="{background:'transparent'}"
                    style="width: 100%">
                <el-table-column
                        label="序号"
                        type="index"
                        align="center"
                        width="80">
                </el-table-column>
                <el-table-column
                        prop="CXM"
                        label="病人姓名"
                        align="center"
                        width="130">
                </el-table-column>
                <el-table-column
                        prop="CXB"
                        label="性别"
                        align="center"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="CZYKS"
                        label="科室"
                        align="center"
                        width="110">
                </el-table-column>
                <el-table-column
                        prop="DRYSJ"
                        label="住院时间"
                        align="center"
                        width="130">
                </el-table-column>
                <el-table-column
                        prop="CZYBQ"
                        label="病区"
                        align="center"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="CZYH"
                        label="住院号"
                        align="center"
                        width="140">
                </el-table-column>
                <el-table-column
                        label="权限设置"
                        align="center"
                        min-width="140">
                    <template slot-scope="scope">
                        <span style="color: red;cursor: pointer" @click="addPatient(scope.row)">添加标记</span>
                    </template>
                </el-table-column>

            </el-table>
            <div class="pagination">
                <el-pagination
                        background
                        :page-sizes="[10, 20,30]"
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :page-size="pageSize"
                        :current-page.sync="currentPage"
                        layout=" prev, pager, next, sizes,total"
                        :total="total" class="right">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "doctorOath",
        data() {
            return {
                patientLoading: false,
                isSelectOffice: false,///科室勾选是否禁用
                officeDisabled: false,//是否禁止选择科室
                pageSize: 10,
                currentPage: 1,
                office: [],
                AreaOption: [],
                form: {
                    overOffice: false,//科室勾选是否禁用
                    office: '',
                    overArea: false,
                    area: '',
                    searchVal: ''
                },
                total: 10,
                patientData: []
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

<style lang="scss" scoped>
</style>