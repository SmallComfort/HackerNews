<template>
  <web-view
    class="web"
    :source="{uri: uri}"
    :on-load-end="onLoadEnd"
    :on-load-start="onLoadStart"/>
</template>

<script>
export default {
  props: {
    navigation: {
      type: Object
    }
  },
  computed: {
    uri () {
      const { params } = this.navigation.state;
      return params.url;
    }
  },
  methods: {
    onLoadEnd () {
      this.navigation.setParams({title: ''});
    },
    onLoadStart () {
      this.navigation.setParams({title: 'loading...'});
    }
  }
};
</script>

<style>
  .web {
    flex: 1;
  }
</style>
