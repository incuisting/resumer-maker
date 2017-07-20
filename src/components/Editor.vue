<template>
    <div id="editor">
        <nav>
            <ol>
                <li v-for="i in [0,1,2,3,4,5]" v-bind:class="{active:currentTab===i}" v-on:click="currentTab=i" :key="i">
                    <svg class="icon">
                        <use v-bind:xlink:href="`#${icons[i]}`"></use>
                    </svg>
                </li>
            </ol>
        </nav>
        <ol class="panes">
            <li v-bind:class="{active:currentTab===0}">
                <ProfileEditor v-bind:profile="resume.profile"></ProfileEditor>
            </li>
            <li v-bind:class="{active:currentTab===1}">
                <ArrayEditor v-bind:items="resume.workHistory" v-bind:labels="{company:'公司',content:'工作内容'}" title="工作经历"></ArrayEditor>
            </li>
            <li v-bind:class="{active:currentTab===2}">
                <ArrayEditor v-bind:items="resume.studyHistory" v-bind:labels="{school:'学校',duration:'时间',degree:'学位'}" title="学习经历"></ArrayEditor>
            </li>
            <li v-bind:class="{active:currentTab===3}">
                <ArrayEditor v-bind:items="resume.projects" v-bind:labels="{name:'项目名称',content:'项目描述'}" title="项目经历"></ArrayEditor>
            </li>
            <li v-bind:class="{active:currentTab===4}">
                <ArrayEditor v-bind:items="resume.awards" v-bind:labels="{name:'奖励详情'}" title="获奖情况"></ArrayEditor>
            </li>
            <li v-bind:class="{active:currentTab===5}">
                <h2>联系方式</h2>
                <el-form>
                    <el-form-item label="QQ">
                        <el-input v-model="resume.contacts.qq"></el-input>
                    </el-form-item>
                    <el-form-item label="微信">
                        <el-input v-model="resume.contacts.wechat"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱">
                        <el-input v-model="resume.contacts.mail"></el-input>
                    </el-form-item>
                    <el-form-item label="手机">
                        <el-input v-model="resume.contacts.phone"></el-input>
                    </el-form-item>
                </el-form>
            </li>
           
        </ol>
    </div>
</template>
<script>
import ProfileEditor from './ProfileEditor'
import ArrayEditor from './ArrayEditor'
export default {
    props:['resume'],
    components: { ProfileEditor, ArrayEditor },
    computed:{
        count(){
            return this.$store.state.count
        }
    },
    data() {
        return {
            currentTab: 0,
            icons: ['icon-id-card', 'icon-work', 'icon-daxue', 'icon-xiangmu', 'icon-huojiangzuopin', 'icon-dianhua'],
            
        }
    },
    methods: {
        add(){
            this.$store.commit('increment')
        },
        addWorkHistory() { //添加工作经历
            this.workHistory.push({
                company: '', content: ''
            })
        },
        removeWorkHistory(index) { //删除工作经历
            this.workHistory.splice(index, 1)
        }
    }
}
</script>

<style lang="scss">
#editor {
    display: flex;
    >nav {
        background: black;
        width: 80px;
        >ol>li {
            padding: 16px 0;
            text-align: center;
            >.icon {
                width: 24px;
                height: 24px;
                fill: white;
            }
            &.active {
                background: white;
                >.icon {
                    fill: black;
                }
            }
        }
    }
    >.panes {
        overflow: auto;
        flex: 1;
        padding: 24px;
        >li {
            display: none;
            &.active {
                display: block;
            }
        }
    }
}
</style>
