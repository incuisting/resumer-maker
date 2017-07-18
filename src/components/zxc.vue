<template>
    <el-form>
        <div v-for="(work,index) in items" v-bind:key="index">
            <el-form-item  v-for="key in keys" v-bind:label="labels[key] || key" v-bind:key="key">
                <el-input v-model="work[key]"></el-input>
            </el-form-item>
            <i class="el-icon-circle-close" v-on:click="removeItems(index)"></i>
        </div>
        <el-button type="primary" v-on:click="addItems">添加</el-button>
    </el-form>
</template>

<script>
export default {
    props: ['items', 'labels'],
    computed: {
        keys() {
            return Object.keys(this.items[0])
        }
    },
    methods: {
        addItems() { //添加工作经历
            const empty = {}
            this.keys.map((key) => {
                empty[key] = ''
            })
            this.items.push({empty})
        },
        removeItems(index) { //删除工作经历
            this.items.splice(index, 1)
        }
    }
}
</script>

<style>

</style>
