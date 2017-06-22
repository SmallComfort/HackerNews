<template>
  <flat-list
    :style="flatListStyle"
    :refresh-control="refreshControl"
    :data="data"
    :render-item="renderItem"
    :on-end-reached="onEndReached"
    :List-footer-component="listFooterComponent" />
</template>

<script>
import React from 'react';
import { RefreshControl } from 'react-native';
import { SCREEN_WIDTH, emptyFn } from '../../util';
import Story from './Story';
import Footer from './Footer';

export default {
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
      default: function(){
        return emptyFn;
      }
    },
    onEndReached: {
      type: Function,
      default: function(){
        return emptyFn;
      }
    },
    navigation: {
      type: Object
    }
  },
  computed: {
    data () {
      return this.stories.map(story => {
        story.key = story.id;
        return story;
      });
    },
    refreshControl () {
      return <RefreshControl refreshing={this.loading} onRefresh={this.onRefresh} colors={['#ff6600']}/>;
    },
    listFooterComponent () {
      return Footer;
    },
    flatListStyle () {
      return {
        width: SCREEN_WIDTH
      };
    }
  },
  methods: {
    renderItem (props) {
      return <Story {...props} onPress={this.onPress} />;
    },
    onPress (item) {
      const { navigate } = this.navigation;
      navigate('WebSite', {url: item.url});
    }
  }
};
</script>

<style>
  .list {
    flex: 1;
  }
</style>
