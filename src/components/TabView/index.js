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
  renderList as __react__vue__renderList,
  _toString as __react__vue__toString,
  renderSlot as __react__vue__renderSlot
} from 'react-vue-helper'
import {
  createElement as __react__vue__createElement,
  Component as __react__vue__Component
} from 'react'

import {
  Animated,
  Platform
} from 'react-native';
import Scroller from './Scroller';
import {
  emptyFn,
  SCREEN_WIDTH
} from '../../util'
const __react__vue__options = {
  components: {
    Scroller
  },
  props: {
    renderHeader: {
      type: Array
    },
    renderScene: {
      type: Array
    },
    defaultIndex: {
      type: Number,
      default: 0
    },
    onPress: {
      type: Function,
      default: function() {
        return emptyFn;
      }
    },
    onPageSelected: {
      type: Function,
      default: function() {
        return emptyFn;
      }
    }
  },
  computed: {
    scenes() {
      return this.renderScene || this.$slots.default.map(v => () => v);
    },
    underlineStyle() {
      const width = SCREEN_WIDTH / (this.renderHeader.length || 1);
      return {
        width: width,
        transform: [{
          translateX: this.animateValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, width]
          })
        }]
      };
    },
    scrollerWidth() {
      return SCREEN_WIDTH * this.renderHeader.length;
    }
  },
  methods: {
    _onPress(v, i) {
      if (Platform.OS === 'ios') {
        this.scrollerRef.scrollTo({
          x: i * SCREEN_WIDTH,
          y: 0,
          animated: true
        });
      } else {
        this.scrollerRef.setPage(i);
      }
      this.onPress(i, v);
    },
    _onScroll(v) {
      this.animateValue.setValue(v);
    },
    _onPageSelected(i) {
      this.onPageSelected(i);
    },
    setRef(ref) {
      this.scrollerRef = ref;
    }
  },
  created() {
    this.animateValue = new Animated.Value(this.defaultIndex);
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
  }), __react__vue__createElement(vm.$options.components['View'], {
    style: [__react__vue__bindClass.call(this, {
      staticClass: "bar"
    })]
  }, __react__vue__renderList(vm['renderHeader'], function(item, index) {
    return __react__vue__createElement(vm.$options.components['TouchableOpacity'], {
      activeOpacity: 1,
      onPress: () => vm['_onPress'](item, index),
      key: arguments[1],
      style: [__react__vue__bindClass.call(this, {
        staticClass: "item"
      })]
    }, __react__vue__createElement(vm.$options.components['Animated']['Text'], {
      style: [__react__vue__bindClass.call(this, {
        staticClass: "item-text"
      }), __react__vue__bindStyle({
        color: vm['animateValue'].interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: ['#000', '#ff6600', '#000'],
          extrapolate: 'clamp'
        })
      }, undefined, undefined)]
    }, "" + __react__vue__toString(item.value || item) + ""));
  }.bind(this)), __react__vue__createElement(vm.$options.components['Animated']['View'], {
    style: [__react__vue__bindClass.call(this, {
      staticClass: "underline"
    }), __react__vue__bindStyle(vm['underlineStyle'], undefined, undefined)]
  })), __react__vue__createElement(vm.$options.components['Scroller'], {
    defaultIndex: vm['defaultIndex'],
    setRef: vm['setRef'],
    onScroll: vm['_onScroll'],
    onPageSelected: vm['_onPageSelected'],
    style: []
  }, __react__vue__slotSet(undefined, {})));
};

const __react__vue__css = {
  "container": {
    "flex": 1
  },
  "bar": {
    "position": "relative",
    "flexDirection": "row",
    "backgroundColor": "#fff",
    "borderBottomColor": "#d9d9d9",
    "height": 44
  },
  "underline": {
    "position": "absolute",
    "left": 0,
    "bottom": 0,
    "height": 2,
    "backgroundColor": "#ff6600"
  },
  "item": {
    "flex": 1,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "item-text": {
    "fontSize": 14
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