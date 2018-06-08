<template>
    <el-row :gutter="20">

        <el-col :span="8">
            <el-form :model="itemForm" :rules="rules" ref="itemForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="商品名称" prop="name">
                    <el-input v-model="itemForm.name"></el-input>
                </el-form-item>
                <el-form-item label="原产地" prop="origin">
                    <el-input v-model="itemForm.origin"></el-input>
                </el-form-item>
                <el-form-item label="类目" prop="category">
                    <el-select v-model="itemForm.category" placeholder="请选择一个类目">
                        <el-option label="新鲜蔬菜" value="新鲜蔬菜"></el-option>
                        <el-option label="肉禽蛋品" value="肉禽蛋品"></el-option>
                        <el-option label="精品水果" value="精品水果"></el-option>
                        <el-option label="速冻食品" value="速冻食品"></el-option>
                        <el-option label="酒水冲调" value="酒水冲调"></el-option>
                        <el-option label="休闲食品" value="休闲食品"></el-option>
                        <el-option label="粮油副食" value="粮油副食"></el-option>
                        <el-option label="海鲜水产" value="海鲜水产"></el-option>
                        <el-option label="其他种类" value="其他种类"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="产品介绍" prop="description">
                    <el-input type="textarea" v-model="itemForm.description"></el-input>
                </el-form-item>

                <el-form-item label="单位" prop="unit">
                    <el-input v-model="itemForm.unit"></el-input>
                </el-form-item>

                <el-form-item label="库存量" prop="balance">
                    <el-input type="number" v-model="itemForm.balance"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm('itemForm')">立即创建</el-button>
                    <el-button @click="resetForm('itemForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-col>

        <el-col :span="14" :offset="2">
            <el-row :gutter="20" class="filter-container">
                <el-col :span="14">
                    <el-input v-model="search" placeholder="输入商品名称进行搜索"/>
                </el-col>
                <el-col :span="10">
                    <el-button type="primary" icon="el-icon-search">搜索</el-button>
                </el-col>
            </el-row>

            <el-row>
                <el-table
                    :data="tableData"
                    stripe
                    border
                    max-height="500"
                    style="width: 100%">

                    <el-table-column
                        fixed
                        prop="name"
                        label="商品名称"
                        width="100">
                    </el-table-column>

                    <el-table-column
                        prop="origin"
                        label="原产地"
                        width="120">
                    </el-table-column>

                    <el-table-column
                        prop="category"
                        label="类目"
                        width="120">
                    </el-table-column>

                    <el-table-column
                        prop="description"
                        label="产品介绍"
                        width="300">
                    </el-table-column>

                    <el-table-column
                        prop="unit"
                        label="单位"
                        width="80">
                    </el-table-column>

                    <el-table-column
                        prop="balance"
                        label="库存量"
                        width="80">
                    </el-table-column>

                    <el-table-column
                        label="操作"
                        fixed="right"
                        width="150"
                    >
                        <template slot-scope="scope">
                            <el-button
                                size="mini"
                                @click="handleClick(scope.row)">编辑
                            </el-button>
                            <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-row>
        </el-col>

        <el-dialog
            title="修改商品"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">

            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>

            <el-form :model="item_row" :rules="rules" ref="item_row" label-width="100px" class="demo-ruleForm">
                <el-form-item label="商品名称" prop="name">
                    <el-input v-model="item_row.name"></el-input>
                </el-form-item>
                <el-form-item label="原产地" prop="origin">
                    <el-input v-model="item_row.origin"></el-input>
                </el-form-item>
                <el-form-item label="类目" prop="category">
                    <el-select v-model="item_row.category" placeholder="请选择一个类目">
                        <el-option label="新鲜蔬菜" value="新鲜蔬菜"></el-option>
                        <el-option label="肉禽蛋品" value="肉禽蛋品"></el-option>
                        <el-option label="精品水果" value="精品水果"></el-option>
                        <el-option label="速冻食品" value="速冻食品"></el-option>
                        <el-option label="酒水冲调" value="酒水冲调"></el-option>
                        <el-option label="休闲食品" value="休闲食品"></el-option>
                        <el-option label="粮油副食" value="粮油副食"></el-option>
                        <el-option label="海鲜水产" value="海鲜水产"></el-option>
                        <el-option label="其他种类" value="其他种类"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="产品介绍" prop="description">
                    <el-input type="textarea" v-model="item_row.description"></el-input>
                </el-form-item>

                <el-form-item label="单位" prop="unit">
                    <el-input v-model="item_row.unit"></el-input>
                </el-form-item>

                <el-form-item label="库存量" prop="balance">
                    <el-input type="number" v-model="item_row.balance"></el-input>
                </el-form-item>
            </el-form>
        </el-dialog>
    </el-row>
</template>

<script>
    import {addItem, findItem, removeItem, updateItem} from "@/api/item";

    export default {
        components: {},
        data() {
            return {
                item_list: null,

                item_row: {},

                itemForm: {
                    name: '',
                    origin: '',
                    category: '',
                    description: '',
                    unit: '',
                    balance: 0.0
                },
                rules: {
                    name: [
                        {required: true, message: '请输入商品名称', trigger: 'blur'},
                        {min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur'}
                    ],
                    origin: [
                        {required: true, message: '请输入原产地', trigger: 'blur'},
                        {min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur'}
                    ],
                    category: [
                        {required: true, message: '请选择一个类目', trigger: 'change'}
                    ],
                    description: [
                        {required: true, message: '请填写产品介绍', trigger: 'blur'}
                    ],
                    unit: [
                        {required: true, message: '请输入单位', trigger: 'blur'}
                    ],
                    balance: [
                        {required: true, message: '请输入一个数值', trigger: 'blur'}
                    ],
                },

                search:'',

                tableData: [
                    {
                        name: '荔枝',
                        origin: '上海',
                        category: '精品水果',
                        description: '上海荔枝',
                    },
                    {
                        name: '荔枝',
                        origin: '上海',
                        category: '精品水果',
                        description: '上海荔枝',
                    },
                    {
                        name: '荔枝',
                        origin: '上海',
                        category: '精品水果',
                        description: '上海荔枝',
                    },
                    {
                        name: '荔枝',
                        origin: '上海',
                        category: '精品水果',
                        description: '上海荔枝',
                    },
                    {
                        name: '荔枝',
                        origin: '上海',
                        category: '精品水果',
                        description: '上海荔枝',
                    },
                    {
                        name: '荔枝',
                        origin: '上海',
                        category: '精品水果',
                        description: '上海荔枝',
                    },
                    {
                        name: '荔枝',
                        origin: '上海',
                        category: '精品水果',
                        description: '上海荔枝',
                    },
                    {
                        name: '荔枝',
                        origin: '上海',
                        category: '精品水果',
                        description: '上海荔枝',
                    },
                    {
                        name: '荔枝',
                        origin: '上海',
                        category: '精品水果',
                        description: '上海荔枝',
                    },
                    {
                        name: '荔枝',
                        origin: '上海',
                        category: '精品水果',
                        description: '上海荔枝',
                    },
                    {
                        name: '荔枝',
                        origin: '上海',
                        category: '精品水果',
                        description: '上海荔枝',
                    },
                    {
                        name: '荔枝',
                        origin: '上海',
                        category: '精品水果',
                        description: '上海荔枝',
                    },
                    {
                        name: '荔枝',
                        origin: '上海',
                        category: '精品水果',
                        description: '上海荔枝',
                    },
                    {
                        name: '荔枝',
                        origin: '上海',
                        category: '精品水果',
                        description: '上海荔枝',
                    },
                    {
                        name: '荔枝',
                        origin: '上海',
                        category: '精品水果',
                        description: '上海荔枝',
                    },
                    {
                        name: '荔枝',
                        origin: '上海',
                        category: '精品水果',
                        description: '上海荔枝',
                    },
                    {
                        name: '荔枝',
                        origin: '上海',
                        category: '精品水果',
                        description: '上海荔枝',
                    },

                ],

                dialogVisible: false
            };
        },
        created(){

        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.itemForm.platform_id = 20
                        addItem(this.itemForm).then(response=>{
                            const data = response.data
                            console.log(data)
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },

            handleClick(row) {
                this.item_row = row
                this.dialogVisible = true
                console.log(row.name);
            },

            handleDelete(index, row) {
                console.log(index)
                console.log(row.name)
            },

            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {
                    });
            }
        }
    }
</script>
