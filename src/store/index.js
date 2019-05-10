import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        selectValue: "",
        activeNav: [],
        editableTabs2: [],
        replaceTabsValue: [],

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
        },
        emptyRoutePath() {
            store.state.activeNav = [];
        },
        addTabs(state, tabs) {
            store.state.editableTabs2 = tabs;
        },
        removeTabs(state, tabs) {
            store.state.editableTabs2 = tabs;
        },
        addReplaceTabsValue(state, obj) {
           store.state.replaceTabsValue.push({key:obj.key,title:obj.title,route:obj.route});
           console.log(store.state.replaceTabsValue);
        }
    },
    actions: {}
});
export default store

