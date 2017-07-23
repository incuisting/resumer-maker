<template>
    <div>
        <form @submit.prevent="signUp">
            <div class="row">
                <label>用户名</label>
                <input type="text" v-model="formData.username" required>
            </div>
            <div class="row">
                <label>密码</label>
                <input type="password" v-model="formData.password" required>
            </div>
            <div class="actions">
                <label>用户名</label>
                <input type="submit" value="提交">
                <span class="errorMessage">{{errorMessage}}</span>
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
                this.$store.commit('setUser',getAVUser())
            }),(error)=>{
                this.errorMessage = getErrorMessage(error)
            }
        }

    }
}
</script>

<style>
  
</style>
