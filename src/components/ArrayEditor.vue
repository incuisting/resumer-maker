<template>
    <div>
        <h2>{{message[field][0]}}</h2>
        <el-form>
            <div v-for="(work,index) in items" v-bind:key="index">
                <el-form-item v-for="key in keys" v-bind:label="labels[key] || key" v-bind:key="key">
                    <el-input :value="message[field][index][key]" @input="changeResumeField(field,index, key, $event)">
                    </el-input>
                </el-form-item>
                <i class="el-icon-circle-close" v-on:click="removeItems(index)"></i>
            </div>
            <el-button type="primary" v-on:click="addItems">添加</el-button>
        </el-form>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    props: ['items', 'labels', 'title', 'field', 'value'],
    computed: {
        keys() {
            return Object.keys(this.items[0])
        },
        ...mapState({
            message: state => state.resume
        })
    },
    methods: {
        changeResumeField(field,index, subfield, value) {
            this.$store.commit('updateResume', {
                field,
                index,
                subfield,
                value
            })
        },
        changeInput(a, b, c) {
            console.log(a, b, c)
        },
        addItems() { //添加工作经历
            const empty = {}
            this.keys.map((key) => {
                empty[key] = ''
            })
            this.items.push(empty)
        },
        removeItems(index) { //删除工作经历
            this.items.splice(index, 1)
        }
    }
}
</script>

<style>

</style>
