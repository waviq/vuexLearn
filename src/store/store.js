/**
 * Created by waviq on 18/02/2017.
 */

import Vue from 'vue'
import Vuex from 'vuex'

import counter from './modules/counter'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        valueOnState:0
    },
    //ES6 format, nama propertis gak boleh sembarangan (getters,mutations,actions)
    getters,
    mutations,
    actions,

    modules: {
        counter
    }
});