<template>
    <div>
        <from>
            <div class="row">
                <label>用户名</label>
                <input type="text" v-model="formData.username">
            </div>
            <div class="row">
                <label>密码</label>
                <input type="password" v-model="formData.username">
            </div>
            <div class="actions">
                <label>用户名</label>
                <input type="submit" value="提交">
            </div>
        </from>
    </div>
</template>

<script>
import AV from '../lib/leancloud'
export default {
    name: 'SignUpFrom',
    data() {
        return {
            formData: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        signUp() {
            let { username, password } = this.formData//ed6 对象解构
            var user = new AV.User();
            user.setUsername(username);
            user.setPassword(password);
            user.signUp().then((loginedUser) => {
                this.$emit('success', {
                    username: loginedUser.attributes.username,
                    id: loginedUser.id
                })
            }, (error) => {
                alert(JSON.stringify(error));
            });
        }

    }
}
</script>

<style>

</style>
