<template>
    <div id="topbar">
        <div class="wrapper">
            <!-- <span class="logo">Resumer</span> -->
            <div class="actions">
                <div class="userActions" v-if="logined">
                    <!--对用户的id进行判断  如果存在就显示登出  -->
                    <span class="welcome">你好,{{user.username}}</span>
                    <a href="#" class="button" @click.prevent="signOut">登出</a>
                    <a class="button" href="#" @click.prevent="preview">全屏</a>
                </div>
                <div v-else class="userAcitons">
                    <a class="button primary" href="#" @click.prevent="signUpDialogVisible =true">注册</a>
    
                    <a class="button" href="#" @click.prevent="signInDialogVisible = true">登录</a>
                </div>
            </div>
        </div>
        <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
            <SignUpForm @success="signIn($event)" />
        </MyDialog>
        <MyDialog title="登录" :visible="signInDialogVisible" @close="signInDialogVisible = false">
            <SignInForm @success="signIn($event)" />
        </MyDialog>
    </div>
</template>
 
<script>
import MyDialog from './MyDialog'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'
import AV from '../lib/leancloud'

export default {
    name: 'Topbar',
    data() {
        return {
            signUpDialogVisible: false,
            signInDialogVisible: false
        }
    },
    computed: {
        user() {
            return this.$store.state.user
        },
        logined() {
            return this.user.id
        }
    },
    components: { MyDialog, SignUpForm, SignInForm },
    methods: {
        signOut() {
            AV.User.logOut()
            this.$store.commit('removeUser')//vuex发起一个移除用户的commit
        },
        signIn(user) {
            this.signInDialogVisible = false
            this.$store.commit('setUser', user)
            console.log("$event", user)
        },
        preview() {
            this.$emit('preview')
        }
    }
}
</script>
 
 <style scoped lang="scss">
//  如果使用 "scoped" 属性，那么所规定的样式只能应用到 style 元素的父元素及其子元素。
#topbar {
    background: #f25743;
    color: #fff;
    .wrapper {
        height: 8em;
        display: flex;
        justify-content: center;
        align-items: center;
        .actions {
            display: flex;
            .userActions {
                display: flex;
                justify-content: center;
                align-items: center;
                .welcome {
                    font-size: 2em;
                    margin-right: .5em
                }
            }
        }
    }
}

.button {
    // 由于加了 scoped， 所以这个 button 选择器只在本组件内有效，不会影响其他组件
    width: 72px;
    height: 32px;
    border: 1px solid #fff;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px; // 设计稿上是 20px，看起来太大，就改成 18px 了
    background: transparent;
    color: #222;
    text-decoration: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    margin-right: 8px;
    color: white;
    // border-radius: 5px;
    &:hover {
        box-shadow: 1px 1px 1px hsla(0, 0, 0, 0.40);
    }
    &.primary {
        background: #fff;
        color: #f25743;
    }
}
</style>