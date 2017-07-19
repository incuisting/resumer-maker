<template>
    <div id="editor">
        <nav>
            <ol>
                <li v-for="i in [0,1,2,3,4,5]" v-bind:class="{active:currentTab===i}" v-on:click="currentTab=i">
                    <svg class="icon">
                        <use v-bind:xlink:href="`#${icons[i]}`"></use>
                    </svg>
                </li>
            </ol>
        </nav>
        <ol class="panes">
            <li v-bind:class="{active:currentTab===0}">
                <h2>个人信息</h2>
               <ProfileEditor v-bind:profile="profile"></ProfileEditor>
            </li>
            <li v-bind:class="{active:currentTab===1}">
                <h2>工作经历</h2>
                <ArrayEditor v-bind:items="workHistory" v-bind:labels="{company:'公司',content:'工作内容'}"></ArrayEditor>
            </li>
            <li v-bind:class="{active:currentTab===2}">
                <h2>学习经历</h2>
                <ArrayEditor v-bind:items="studyHistory" v-bind:labels="{school:'学校',duration:'时间',degree:'学位'}"></ArrayEditor>
            </li>
            <li v-bind:class="{active:currentTab===3}">
                <h2>项目经验</h2>
            </li>
            <li v-bind:class="{active:currentTab===4}">
                <h2>获奖情况</h2>
            </li>
            <li v-bind:class="{active:currentTab===5}">
                <h2>联系方式</h2>
            </li>
        </ol>
    </div>
</template>
<script>
import ProfileEditor from './ProfileEditor'
import ArrayEditor from './ArrayEditor'
export default {
    components:{ProfileEditor,ArrayEditor},
    data() {
        return {
            currentTab: 0,
            icons: ['icon-id-card', 'icon-work', 'icon-daxue', 'icon-xiangmu', 'icon-huojiangzuopin', 'icon-dianhua'],
            profile: {
                name: '',
                city: '',
                birth: ''
            },
            workHistory: [
                { company: '', content: '' }
            ],
            studyHistory:[
                {school:'',duration:'',degree:''}
            ]
        }
    },
    methods: {
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
