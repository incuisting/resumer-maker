import Vuex from 'vuex'
import Vue from 'vue'

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
        switchTab(state, payload) {
            state.selected = payload //提交荷载
        },
        updateResume(state, { field, index, subfield, value }) {
            console.log('update')
            state.resume[field][index][subfield] = value
        }
    }
})