import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)


export default new Vuex.Store({
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
        updateResume(state, { field, subfield, value }) {
            state.resume[field][subfield] = value
        }
    }
})