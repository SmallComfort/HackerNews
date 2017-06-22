<template>
  <view class="container">
    <view class="bar">
      <touchable-opacity
        v-for="(item, index) in renderHeader"
        class="item"
        :active-opacity="1"
        :on-press="() => _onPress(item, index)">
        <animated:text
          class="item-text"
          :style="{
            color: animateValue.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: ['#000', '#ff6600', '#000'],
              extrapolate: 'clamp'
            })
          }">
          {{item.value || item}}
        </animated:text>
      </touchable-opacity>
      <animated:view class="underline" :style="underlineStyle" />
    </view>
    <scroller
      :default-index="defaultIndex"
      :set-ref="setRef"
      :on-scroll="_onScroll"
      :on-page-selected="_onPageSelected">
      <slot></slot>
    </scroller>
  </view>
</template>

<script>
import { Animated, Platform } from 'react-native';
import Scroller from './Scroller';
import { emptyFn, SCREEN_WIDTH } from '../../util';

export default {
  components: { Scroller },
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
    scenes () {
      return this.renderScene || this.$slots.default.map(v => () => v);
    },
    underlineStyle () {
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
    scrollerWidth () {
      return SCREEN_WIDTH * this.renderHeader.length;
    }
  },
  methods: {
    _onPress (v, i) {
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
    _onScroll (v) {
      this.animateValue.setValue(v);
    },
    _onPageSelected (i) {
      this.onPageSelected(i);
    },
    setRef (ref) {
      this.scrollerRef = ref;
    }
  },
  created () {
    this.animateValue = new Animated.Value(this.defaultIndex);
  }
};
</script>

<style>
  .container {
    flex: 1
  }
  .bar {
    position: relative;
    flex-direction: row;
    background-color: #fff;
    border-bottom-color: #d9d9d9;
    height: 44;
  }
  .underline {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2;
    background-color: #ff6600;
  }
  .item {
    flex: 1;
    justify-content: center;
    align-items: center;
  }
  .item-text {
    font-size: 14;
  }
</style>
