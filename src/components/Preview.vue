<template>
    <div id="preview">
         {{resume}} 
        <!-- {{state}} -->
        <h1>{{resume.profile.name || '请填写姓名'}}</h1>
        <p>{{resume.profile.city || '请填写城市'}}</p>
        <p>{{resume.profile.birth || '请填写生日'}}</p>
        <section v-if="filter(resume.workHistory).length > 0">           
            <h2>工作经历</h2>
            <ol>
                <li v-for="work in filter(resume.workHistory)" :key="work.company">
                    {{work.company}}
                    {{work.content}}
                </li>
            </ol>
        </section>
         <section v-if="filter(resume.projects).length > 0">           
            <h2>项目</h2>
            <ol>
                <li v-for="project in filter(resume.projects)" :key="project.name">
                    {{project.name}}
                    {{project.content}}
                </li>
            </ol>
        </section> 
    </div>
</template>
<script>
export default {
    name:"preview",
    computed:{
        resume(){
            return this.$store.state.resume
        },
        state(){
            return this.$store.state
        }
    },
    methods: {
        filter(array) { //找出非空对象
            return array.filter(item => !this.isEmpty(item))
        },
        isEmpty(object) { //只要有一个value不是false，就返回false
            let empty = true
            for (let key in object) {
                if (object[key]) {
                    empty = false
                    break
                }
            }
            return empty
        }
    }

}
</script>

