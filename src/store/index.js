import Vuex from 'vuex'
import Vue from 'vue'

import objectPath from "object-path"
Vue.use(Vuex)


export default new Vuex.Store({
    strict: true, //严格模式
    state: {
        selected: 'profile',
        resume: {
            config: [
                { field: 'profile', icon: 'id' },
                { field: 'workHistory', icon: 'work' },
                { field: 'education', icon: 'book' },
                { field: 'projects', icon: 'heart' },
                { field: 'awards', icon: 'cup' },
                { field: 'contacts', icon: 'phone' },
            ],
            profile: {
                name: '',
                city: '',
                title: ''
            },
            workHistory: [
                { company: 'AL', content: '我的第二份工作是' },
                { company: 'TX', content: '我的第一份工作是' },
            ],
            education: [
                { school: 'AL', content: '文字' },
                { school: 'tx', content: '文字' },
            ],
            projects: [
                { name: 'project A', content: '文字' },
                { name: 'project b', content: '文字' },
            ],
            awards: [
                { name: 'awards A', content: '文字' },
                { name: 'awards b', content: '文字' },
            ],
            contacts: [
                { contact: 'phone', content: '13812345678' },
                { contact: 'qq', content: '12345678' },
            ],
        }
    },
    mutations: {
        initState(state, payload) {
            Object.assign(state, payload) //改变数据  还有个问题 assign是深拷贝还是浅拷贝？？
        },
        switchTab(state, payload) {
            state.selected = payload //提交荷载
            localStorage.setItem('state', JSON.stringify(state)) //每次切换标签保存一次localstorge
        },
        updateResume(state, { path, value }) {
            console.log('update')
            objectPath.set(state.resume, path, value)
            localStorage.setItem('state', JSON.stringify(state)) //每次改变内容保存一次localstorge
        }
    }
})