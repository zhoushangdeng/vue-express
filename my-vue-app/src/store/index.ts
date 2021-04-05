import { createStore } from 'vuex'
const store = createStore({
    state: {
        userInfo: {
            userID: '',
            Menus: [],
        }
    },
    mutations: {
        getUserInfo(state, userID) {
            state.userInfo.userID = userID
        }
    },
    actions: {
        asyncGetUserInfo({ commit }, val) {
            commit("getUserInfo", val)
        }
    },
    getters: {
        userInfoGetter(state) {
            return state.userInfo.userID
        }
    }
})

export default store