<template>
    <div>
        <form @submit.prevent="signIn">
            <div class="row">
                <label>用户名</label>
                <input type="text" v-model="formData.username" required>
            </div>
            <div class="row">
                <label>密码</label>
                <input type="password" v-model="formData.password" required>
            </div>
            <div class="actions">
                <span class="errorMessage">{{errorMessage}}</span>
                <input type="submit" value="提交">
            </div>
        </form>
    </div>
</template>

<script>
import AV from '../lib/leancloud'
import getErrorMessage from '../lib/getErrorMessage'
import getAVUser from '../lib/getAVUser'

export default {
    name: 'SignInFrom',
    data() {
        return {
            formData: {
                username: '',
                password: ''
            },
            errorMessage:''
        }
    },
    methods: {
        signIn() {
            let { username, password } = this.formData//ed6 对象解构
            AV.User.logIn(username,password).then(()=>{
                this.$emit('success',getAVUser())
            },(error)=>{
                console.log(1)
                this.errorMessage = getErrorMessage(error)
            })
        }

    }
}
</script>

<style lang="scss" scoped>
.row {
    margin: 20px;
    >input {
        min-width: 16em;
        height: 32px;
        border: 1px solid #ebecee;
    }
    input[type="password"] {
        margin-left: 22px;
    }
    input[type="text"] {
        margin-left: 8px;
    }
}

.actions {
    display: flex;
    justify-content: flex-end;
    margin: 15px 20px;
    >span {
        line-height: 37px;
        font-size: 16px;
        color: red;
        margin: 0 8px 0 0;
    }
    >input {

        &:hover {
            background: #000;
            opacity: .45;
            color: #fff;
        }
        cursor: pointer;
        border: none;
        padding: 10px 20px;
    }
}
</style>