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
  mergeProps as __react__vue__mergeProps
} from 'react-vue-helper'
import {
  createElement as __react__vue__createElement,
  Component as __react__vue__Component
} from 'react'

import React from 'react';
import {
  RefreshControl
} from 'react-native';
import {
  SCREEN_WIDTH,
  emptyFn
} from '../../util';
import Story from './Story';
import Footer from './Footer'
const __react__vue__options = {
  props: {
    stories: {
      type: Array,
      default: []
    },
    loading: {
      type: Boolean,
      default: true
    },
    onRefresh: {
      type: Function,
      default: function() {
        return emptyFn;
      }
    },
    onEndReached: {
      type: Function,
      default: function() {
        return emptyFn;
      }
    },
    navigation: {
      type: Object
    }
  },
  computed: {
    data() {
      return this.stories.map(story => {
        story.key = story.id;
        return story;
      });
    },
    refreshControl() {
      return <RefreshControl refreshing = {
        this.loading
      }
      onRefresh = {
        this.onRefresh
      }
      colors = {
        ['#ff6600']
      }
      />;
    },
    listFooterComponent() {
      return Footer;
    },
    flatListStyle() {
      return {
        width: SCREEN_WIDTH
      };
    }
  },
  methods: {
    renderItem(props) {
      return <Story { ...props
      }
      onPress = {
        this.onPress
      }
      />;
    },
    onPress(item) {
      const {
        navigate
      } = this.navigation;
      navigate('WebSite', {
        url: item.url
      });
    }
  }
};

const __react__vue__render = function render(vm) {
  return __react__vue__createElement(vm.$options.components['FlatList'], __react__vue__mergeProps.call(this, this.props.__react__vue__nativeEvents, {
    ref: ref => {
      this.setRootRef(ref);
      this.props['__react__vue__setRef'] && this.props['__react__vue__setRef'](ref);
    },
    refreshControl: vm['refreshControl'],
    data: vm['data'],
    renderItem: vm['renderItem'],
    onEndReached: vm['onEndReached'],
    ListFooterComponent: vm['listFooterComponent'],
    style: [__react__vue__bindClass.call(this, {
      parentClass: this.props.style
    }), __react__vue__bindStyle(vm['flatListStyle'], undefined, undefined)]
  }));
};

const __react__vue__css = {
  "list": {
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