import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        selectValue: "",
        activeNav: [],
        editableTabs2: [],
    },
    getters: {},
    mutations: {
        changeTabsValue(state, value) {
            store.state.selectValue = value;
        },
        addRoutePath(state, route) {
            store.state.activeNav.push({path: route});
        },
        deleteRoutePath(state, index) {
            store.state.activeNav.splice(index, 1);
            console.log(store.state.activeNav)
        },
        emptyRoutePath() {
            store.state.activeNav = [];
        },
        addTabs(state, tabs) {
            store.state.editableTabs2 = tabs;
        },
        removeTabs(state, tabs) {
            store.state.editableTabs2 = tabs;
            console.log(store.state.editableTabs2);
        }
    },
    actions: {}
});
export default store

