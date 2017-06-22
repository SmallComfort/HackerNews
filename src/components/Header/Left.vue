<template>
  <touchable-opacity class="container" :on-press="onPress" :active-opacity="1">
    <view class="back"/>
  </touchable-opacity>
</template>

<script>
export default {
  props: {
    navigation: {
      type: Object
    }
  },
  methods: {
    onPress () {
      this.navigation.goBack();
    }
  }
};
</script>

<style>
  .container {
    flex: 1;
    justify-content: center;
    align-items: center;
  }
  .back {
    width: 30;
    height: 30;
    border-top-width: 4;
    border-left-width: 4;
    border-top-color: #ff6600;
    border-left-color: #ff6600;
    margin-left: 8;
    align-self: center;
    transform: rotate(-45deg) scale(0.5);
  }
</style>
