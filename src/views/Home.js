import __react__vue__Vue, {
  observer as __react__vue__observer
} from 'react-vue'
import __react__vue__ReactNative from 'react-native'
import __react__vue__PropType from 'prop-types'
import {
  buildNativeComponent as __react__vue__buildNativeComponent
} from 'react-vue-helper'
import {
  bindNativeClass as __react__vue__bindClass,
  bindNativeStyle as __react__vue__bindStyle,
  mergeProps as __react__vue__mergeProps,
  renderList as __react__vue__renderList
} from 'react-vue-helper'
import {
  createElement as __react__vue__createElement,
  Component as __react__vue__Component
} from 'react'

import TabView from '../components/TabView';
import Stories from '../components/Stories';
import store from '../store'
const __react__vue__options = {
  components: {
    TabView,
    Stories
  },
  props: {
    navigation: {
      type: Object
    }
  },
  data() {
    return {
      loading: {}
    };
  },
  computed: {
    items() {
      return store.state.items;
    },
    titles() {
      return Object.keys(this.items);
    },
    renderHeader() {
      return this.titles.map(v => {
        return {
          value: v[0].toUpperCase() + v.slice(1),
          type: v
        };
      });
    }
  },
  methods: {
    select(i) {
      const type = this.renderHeader[i].type;
      this.fetchList(type);
    },
    onRefresh() {
      this.pullFetchList(store.state.activeType);
    },
    onEndReached() {
      const type = store.state.activeType;
      if (this.items[type].length) {
        store.dispatch('LOAD_MORE_ITEMS');
      }
    },
    pullFetchList(type) {
      this.$set(this.loading, type, true);
      this.fetchList(type).then(() => {
        this.$set(this.loading, type, false);
      });
    },
    fetchList(type) {
      return store.dispatch('FETCH_LIST_DATA', {
        type: type
      });
    }
  },
  created() {
    this.fetchList(store.state.activeType);
  }
};

const __react__vue__render = function render(vm) {
  return __react__vue__createElement(vm.$options.components['TabView'], __react__vue__mergeProps.call(this, this.props.__react__vue__nativeEvents, {
    ref: ref => {
      this.setRootRef(ref);
      this.props['__react__vue__setRef'] && this.props['__react__vue__setRef'](ref);
    },
    renderHeader: vm['renderHeader'],
    onPress: vm['select'],
    onPageSelected: vm['select'],
    style: [__react__vue__bindClass.call(this, {
      staticClass: "container",
      parentClass: this.props.style
    }), __react__vue__bindStyle(undefined, undefined, undefined)]
  }), __react__vue__renderList(vm['items'], function(item, type) {
    return __react__vue__createElement(vm.$options.components['Stories'], {
      stories: item,
      navigation: vm['navigation'],
      loading: !!vm['loading'][type],
      onRefresh: vm['onRefresh'],
      onEndReached: vm['onEndReached'],
      key: arguments[1],
      style: []
    });
  }.bind(this)));
};

const __react__vue__css = {
  "container": {
    "backgroundColor": "#f6f6ef"
  }
}

const __react__vue__ComponentBuilded = __react__vue__buildNativeComponent(__react__vue__render, __react__vue__options, {
  Component: __react__vue__Component,
  PropTypes: __react__vue__PropType,
  Vue: __react__vue__Vue,
  ReactNative: __react__vue__ReactNative,
  css: __react__vue__css
})

export default __react__vue__observer(__react__vue__ComponentBuilded)