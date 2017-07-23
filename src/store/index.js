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
            config: [{ field: 'profile', icon: 'id', key: ['name', 'city', 'title', 'birthday'] },
                { field: 'workHistory', icon: 'work', type: 'array', key: ['company', 'content'] },
                { field: 'education', icon: 'book', type: 'array', key: ['school', 'content'] },
                { field: 'projects', icon: 'heart', type: 'array', key: ['name', 'content'] },
                { field: 'awards', icon: 'cup', type: 'array', key: ['name', 'content'] },
                { field: 'contacts', icon: 'phone', type: 'array', key: ['contact', 'content'] },
            ]
        }
    },
    mutations: {
        initState(state, payload) {
            state.resume.config.map((item) => {
                if (item.type === 'array') {
                    Vue.set(state.resume, item.field, [])
                } else {
                    Vue.set(state.resume, item.field, {})
                    item.keys.map((key) => {
                        Vue.set(state.resume[item.field], key, '')
                    })
                }

            })


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