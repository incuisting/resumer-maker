import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)


export default new Vuex.Store({
    strict: true, //严格模式
    state: {
        resume: {
            profile: {
                name: '',
                city: '',
                birth: ''
            },
            workHistory: [
                { company: '', content: '' }
            ],
            studyHistory: [
                { school: '', duration: '', degree: '' }
            ],
            projects: [
                { name: '', content: '' }
            ],
            awards: [
                { name: '' }
            ],
            contacts: {
                qq: '',
                wechat: '',
                phone: '',
                email: ''
            }
        }
    },
    mutations: {
        updateResume(state, { field, index, subfield, value }) {
            console.log('update')
            state.resume[field][index][subfield] = value
        }
    }
})