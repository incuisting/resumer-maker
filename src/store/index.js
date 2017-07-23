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
        resumeConfig: [
            { field: 'profile', icon: 'id', keys: ['name', 'city', 'title', 'birthday'] },
            { field: 'workHistory', icon: 'work', type: 'array', keys: ['company', 'content'] },
            { field: 'education', icon: 'book', type: 'array', keys: ['school', 'content'] },
            { field: 'projects', icon: 'heart', type: 'array', keys: ['name', 'content'] },
            { field: 'awards', icon: 'cup', type: 'array', keys: ['name', 'content'] },
            { field: 'contacts', icon: 'phone', type: 'array', keys: ['contact', 'content'] },

        ],
        resume: {}
    },
    mutations: {
        initState(state, payload) {
            console.log('state.resumeConfig', state.resumeConfig)
            state.resumeConfig.map((item) => {
                console.log('item.type', item)
                if (item.type === 'array') {
                    //state.resume[item.field] = [] // 这样写 Vue 无法监听属性变化
                    Vue.set(state.resume, item.field, [])
                } else {
                    console.log(11)

                    //state.resume[item.field] = {} // 这样写 Vue 无法监听属性变化
                    Vue.set(state.resume, item.field, {})
                    item.keys.map((key) => {
                        //state.resume[item.field][key] = '' // 这样写 Vue 无法监听属性变化
                        Vue.set(state.resume[item.field], key, '')
                    })
                }
            })
            Object.assign(state, payload)
            console.log('state.resume', state.resume)
        },
        switchTab(state, payload) {
            state.selected = payload //提交荷载
            localStorage.setItem('state', JSON.stringify(state)) //每次切换标签保存一次localstorge
        },
        updateResume(state, { path, value }) {
            objectPath.set(state.resume, path, value)
            localStorage.setItem('state', JSON.stringify(state)) //每次改变内容保存一次localstorge
        },
        setUser(state, payload) {
            Object.assign(state.user, payload)
        },
        removeUser(state) {
            state.user.id = null
        }
    }
})