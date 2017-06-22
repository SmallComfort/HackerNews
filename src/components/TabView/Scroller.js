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
  renderSlot as __react__vue__renderSlot
} from 'react-vue-helper'
import {
  createElement as __react__vue__createElement,
  Component as __react__vue__Component
} from 'react'

import {
  Platform
} from 'react-native';
import {
  emptyFn,
  SCREEN_WIDTH
} from '../../util'
const __react__vue__options = {
  props: {
    defaultIndex: {
      type: Number,
      default: 0
    },
    onScroll: {
      type: Function,
      default () {
        return emptyFn;
      }
    },
    onPageSelected: {
      type: Function,
      default () {
        return emptyFn;
      }
    },
    setRef: {
      type: Function,
      default () {
        return emptyFn;
      }
    }
  },
  computed: {
    ios() {
      return Platform.OS === 'ios';
    },
    android() {
      return Platform.OS === 'android';
    },
    contentOffset() {
      return {
        x: this.defaultIndex * SCREEN_WIDTH,
        y: 0
      };
    },
    SCREEN_WIDTH() {
      return SCREEN_WIDTH;
    }
  },
  methods: {
    _onScroll(v) {
      this.onScroll(v);
    },
    _onPageSelected(i) {
      this.onPageSelected(i);
    }
  },
  mounted() {
    this.setRef(this.$refs.scroller);
  }
};

const __react__vue__render = function render(vm) {
  const __react__vue__slotSet = __react__vue__renderSlot.call(this, [], this.props.children);
  return __react__vue__createElement(vm.$options.components['View'], __react__vue__mergeProps.call(this, this.props.__react__vue__nativeEvents, {
    ref: ref => {
      this.setRootRef(ref);
      this.props['__react__vue__setRef'] && this.props['__react__vue__setRef'](ref);
    },
    style: [__react__vue__bindClass.call(this, {
      staticClass: "container",
      parentClass: this.props.style
    }), __react__vue__bindStyle(undefined, undefined, undefined)]
  }), vm['ios'] ? __react__vue__createElement(vm.$options.components['ScrollView'], {
    ref: ref => {
      this.setRef(ref, "scroller", false);
    },
    horizontal: true,
    pagingEnabled: true,
    scrollEventThrottle: 10,
    showsHorizontalScrollIndicator: false,
    onScroll: e => vm['_onScroll'](e.nativeEvent.contentOffset.x / vm['SCREEN_WIDTH']),
    onMomentumScrollEnd: e => vm['_onPageSelected'](e.nativeEvent.contentOffset.x / vm['SCREEN_WIDTH']),
    contentOffset: vm['contentOffset'],
    style: []
  }, __react__vue__slotSet(undefined, {})) : vm['android'] ? __react__vue__createElement(vm.$options.components['ViewPagerAndroid'], {
    ref: ref => {
      this.setRef(ref, "scroller", false);
    },
    initialPage: vm['defaultIndex'],
    keyBoardDismissMode: "on-drag",
    onPageScroll: e => vm['_onScroll'](e.nativeEvent.position + e.nativeEvent.offset),
    onPageSelected: e => vm['_onPageSelected'](e.nativeEvent.position),
    style: [__react__vue__bindClass.call(this, {
      staticClass: "container"
    })]
  }, __react__vue__slotSet(undefined, {})) : null);
};

const __react__vue__css = {
  "container": {
    "flex": 1
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