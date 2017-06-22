<template>
  <view class="container">
    <scroll-view v-if="ios"
      ref="scroller"
      horizontal
      paging-enabled
      :scroll-event-throttle="10"
      :shows-horizontal-scroll-indicator="false"
      :on-scroll="e => _onScroll(e.nativeEvent.contentOffset.x / SCREEN_WIDTH)"
      :on-momentum-scroll-end="e=> _onPageSelected(e.nativeEvent.contentOffset.x / SCREEN_WIDTH)"
      :content-offset="contentOffset">
      <slot></slot>
    </scroll-view>
    <view-pager-android v-else-if="android"
      ref="scroller"
      class="container"
      :initial-page="defaultIndex"
      key-board-dismiss-mode="on-drag"
      :on-page-scroll="e => _onScroll(e.nativeEvent.position + e.nativeEvent.offset)"
      :on-page-selected="e => _onPageSelected(e.nativeEvent.position)">
      <slot></slot>
    </view-pager-android>
  </view>
</template>

<script>
import { Platform } from 'react-native';
import { emptyFn, SCREEN_WIDTH } from '../../util';

export default {
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
    ios () {
      return Platform.OS === 'ios';
    },
    android () {
      return Platform.OS === 'android';
    },
    contentOffset () {
      return {
        x: this.defaultIndex * SCREEN_WIDTH,
        y: 0
      };
    },
    SCREEN_WIDTH () {
      return SCREEN_WIDTH;
    }
  },
  methods: {
    _onScroll (v) {
      this.onScroll(v);
    },
    _onPageSelected (i) {
      this.onPageSelected(i);
    }
  },
  mounted () {
    this.setRef(this.$refs.scroller);
  }
};
</script>

<style>
  .container {
    flex: 1;
  }
</style>
