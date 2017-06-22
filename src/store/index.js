/**
 * reference
 * https://github.com/weexteam/weex-hackernews/tree/master/src/store
 */

import Vue from 'react-vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
  actions,
  mutations,

  state: {
    activeType: 'top',
    items: {
      top: [],
      new: [],
      show: [],
      ask: [],
      job: []
    },
    counts: {
      top: 0,
      new: 0,
      show: 0,
      ask: 0,
      job: 0
    },
    lists: {
      top: [],
      new: [],
      show: [],
      ask: [],
      job: []
    }
  },

  getters: {
    // ids of the items that should be currently displayed based on
    // current list type and current pagination
    activeIds (state) {
      const { activeType, lists, counts } = state;
      const result = activeType ? lists[activeType].slice(counts[activeType], counts[activeType] + 10) : [];
      return result;
    },

    activeIndex (state) {
      const { activeType, lists } = state;
      const index = Object.keys(lists).indexOf(activeType);
      return index === -1 ? 0 : index;
    }
  }
});

export default store;
