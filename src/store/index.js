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
        resumeConfig: [{
                field: 'profile',
                icon: 'id',
                keys: ['name', 'city', 'birthday', 'intention'],
                title: '个人信息',
                template: {
                    name: '姓名',
                    city: '城市',
                    job: '职称',
                    birthday: '出生年月',
                    intention: '求职意向'
                }
            },
            {
                field: 'workHistory',
                icon: 'work',
                type: 'array',
                keys: ['company', 'content'],
                title: '工作经历',
                template: {
                    company: '公司',
                    content: '工作内容',
                }
            },
            {
                field: 'education',
                icon: 'book',
                type: 'array',
                keys: ['school', 'content'],
                title: '教育经历',
                template: {
                    school: '学校名称',
                    content: '时间',
                }
            },
            {
                field: 'projects',
                icon: 'heart',
                type: 'array',
                keys: ['name', 'content'],
                title: '项目经历',
                template: {
                    name: '项目名称',
                    content: '项目内容',
                }
            },
            {
                field: 'awards',
                icon: 'cup',
                type: 'array',
                keys: ['name', 'content'],
                title: '获奖信息',
                template: {
                    name: '名称',
                    content: '获奖内容',
                }
            },
            {
                field: 'contacts',
                icon: 'phone',
                type: 'array',
                keys: ['contact', 'content'],
                title: '联系方式',
                template: {
                    contact: '途径',
                    content: '内容',
                }
            },

        ],
        resume: {}
    },
    mutations: {
        initState(state, payload) {
            state.resumeConfig.map((item) => {
                if (item.type === 'array') {
                    //state.resume[item.field] = [] // 这样写 Vue 无法监听属性变化
                    Vue.set(state.resume, item.field, [])
                } else {

                    //state.resume[item.field] = {} // 这样写 Vue 无法监听属性变化
                    Vue.set(state.resume, item.field, {})
                    item.keys.map((key) => {
                        //state.resume[item.field][key] = '' // 这样写 Vue 无法监听属性变化
                        Vue.set(state.resume[item.field], key, '')
                    })
                }
            })
            Object.assign(state, payload)
            console.log('resume', state.resumeConfig);
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
        },
        addResumeSubfield(state, { field }) {
            let empty = {}
            state.resume[field].push(empty)
            state.resumeConfig.filter((i) => i.field === field)[0].keys.map((key) => {
                Vue.set(empty, key, '')
            })
        },
        removeResumeSubfield(state, { field, index }) {
            state.resume[field].splice(index, 1)
        }
    }
})