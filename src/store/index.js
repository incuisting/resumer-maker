import Vuex from 'vuex'
import Vue from 'vue'

import objectPath from "object-path"
Vue.use(Vuex)


export default new Vuex.Store({
    strict: true, //严格模式
    state: {
        selected: 'profile',
        user: {
            id: '',
            username: ''
        },
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
                { company: '', content: '' }
            ],
            education: [
                { school: '', content: '' }
            ],
            projects: [
                { name: '', content: '' }
            ],
            awards: [
                { name: '', content: '' },
            ],
            contacts: [
                { contact: '', content: '' }
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
        },
        setUser(state, payload) {
            Object.assign(state.user, payload)
            console.log('state.user', state.user)
        },
        removeUser(state) {
            state.user.id = null
        }
    }
})