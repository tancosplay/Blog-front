import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const actions = {
    updateUserMessage (context, title) {
        context.commit('updateUserMessage', title)
    },

    setUserMessage (context,UserName) {
        context.commit('setUserMessage', UserName)
    }

}

const mutations = {
    updateUserMessage (state, title) {
        let passages = state.message.passages;
        // eslint-disable-next-line no-unused-vars
        let index = 0;
        // eslint-disable-next-line no-unused-vars
        let exist = false;

        if (!passages) {
            state.message.passages = [{...title}]
        } else {
            passages.forEach(element => {
                if (element.title === title.title) {
                    exist = true
                } else {
                    index ++;
                }
            });

            // console.log(index)
            if (!exist) {
                passages.push({...title})
            } else {
                passages.splice(index, 1, {...title})
            }
        }
        localStorage.setItem(state.UserName, JSON.stringify({...state.message}))
        
    },

    setUserMessage (state, UserName) {
        const userMessage = JSON.parse(localStorage.getItem(UserName))
        state.UserName = UserName
        state.message = userMessage
    }
}

const state = {
    UserName: '',
    message: {}
}

export default new Vuex.Store({actions, mutations, state})