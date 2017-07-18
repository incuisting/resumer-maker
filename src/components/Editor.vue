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
                <el-form>
                    <el-form-item label="姓名">
                        <el-input v-model="profile.name"></el-input>
                    </el-form-item>
                    <el-form-item label="城市">
                        <el-input v-model="profile.city"></el-input>
                    </el-form-item>
                    <el-form-item label="出生">
                        <el-input v-model="profile.birth"></el-input>
                    </el-form-item>
                </el-form>
            </li>
            <li v-bind:class="{active:currentTab===1}">
                <el-form>
                    <div v-for="(work,index) in workHistory">
                        <el-form-item label="公司">
                            <el-input v-model="work.company"></el-input>
                        </el-form-item>
                        <el-form-item label="工作">
                            <el-input v-model="work.content"></el-input>
                        </el-form-item>
                        <i class="el-icon-circle-close" v-on:click="removeWorkHistory(work)"></i>
                    </div>
                    <el-button type="primary" v-on:click="addWorkHistory">添加</el-button>
                </el-form>
            </li>
            <li v-bind:class="{active:currentTab===2}">
                <h2>学习经历</h2>
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
export default {
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
            ]
        }
    },
    methods: {
        addWorkHistory() {
            this.workHistory.push({
                company: '', content: ''
            })
        },
        removeWorkHistory(index) {
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
        >li {
            display: none;
            &.active {
                display: block;
            }
        }
    }
}
</style>
