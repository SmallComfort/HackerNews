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
  _toString as __react__vue__toString
} from 'react-vue-helper'
import {
  createElement as __react__vue__createElement,
  Component as __react__vue__Component
} from 'react'

import {
  emptyFn
} from '../../util'
const __react__vue__options = {
  props: {
    item: {
      type: Object
    },
    onPress: {
      type: Function,
      default () {
        return emptyFn;
      }
    }
  },
  methods: {
    _onPress() {
      this.onPress(this.item);
    }
  }
};

const __react__vue__render = function render(vm) {
  return __react__vue__createElement(vm.$options.components['TouchableOpacity'], __react__vue__mergeProps.call(this, this.props.__react__vue__nativeEvents, {
    ref: ref => {
      this.setRootRef(ref);
      this.props['__react__vue__setRef'] && this.props['__react__vue__setRef'](ref);
    },
    onPress: vm['_onPress'],
    activeOpacity: 0.5,
    style: [__react__vue__bindClass.call(this, {
      staticClass: "container",
      parentClass: this.props.style
    }), __react__vue__bindStyle(undefined, undefined, undefined)]
  }), __react__vue__createElement(vm.$options.components['View'], {
    style: [__react__vue__bindClass.call(this, {
      staticClass: "score"
    })]
  }, __react__vue__createElement(vm.$options.components['Text'], {
    style: [__react__vue__bindClass.call(this, {
      staticClass: "score-text"
    })]
  }, __react__vue__toString(vm['item'].score))), __react__vue__createElement(vm.$options.components['View'], {
    style: [__react__vue__bindClass.call(this, {
      staticClass: "detail"
    })]
  }, __react__vue__createElement(vm.$options.components['Text'], {
    style: [__react__vue__bindClass.call(this, {
      staticClass: "name"
    })]
  }, __react__vue__toString(vm['item'].by)), __react__vue__createElement(vm.$options.components['Text'], {
    style: [__react__vue__bindClass.call(this, {
      staticClass: "title"
    })]
  }, __react__vue__toString(vm['item'].title))));
};

const __react__vue__css = {
  "container": {
    "flex": 1,
    "flexDirection": "row",
    "padding": 16
  },
  "score": {
    "width": 40,
    "height": 40,
    "backgroundColor": "#fff",
    "borderRadius": 20,
    "justifyContent": "center",
    "alignItems": "center",
    "marginRight": 16
  },
  "score-text": {
    "color": "#ff6600",
    "fontWeight": "bold"
  },
  "detail": {
    "flex": 1
  },
  "name": {
    "color": "#666",
    "fontSize": 12,
    "marginBottom": 6
  },
  "title": {
    "color": "#333",
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