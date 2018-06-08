<template>
    <div class="app-container tab-container">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="商品管理" name="first">
                <item-setting></item-setting>
            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import ItemSetting from './components/ItemSetting'

    export default {
        data() {
            return {
                activeName: 'first'
            };
        },

        components:{
            ItemSetting
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    };
</script>

<style scoped>
    .tab-container{
        margin: 30px;
    }
</style>

