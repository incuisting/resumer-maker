<template>
    <div id="topbar">
        <div class="logo">
            ResumerMaker
        </div>
        <div class="actions">
            <el-button>登录</el-button>
            <el-button type="primary" @click="signUpDialogVisible = true">注册</el-button>
            <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
                我在那里
            </MyDialog>
            <el-button @click="preview">预览</el-button>
        </div>
    </div>
</template>
<script>
import MyDialog from './MyDialog'
export default {
    name:'Topbar',
    data(){
        return{
            signUpDialogVisible: false 
        }
    },
    components: { MyDialog },
    methods: {
        preview() {
            this.$emit('preview')
        }
    }
}
</script>

<style>
#topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    font-size: 20px;
    font-weight: 700;
}
</style>

