<template>
  <tab-view
    class="container"
    :render-header="renderHeader"
    :on-press="select"
    :on-page-selected="select">
    <stories
      v-for="(item, type) in items"
      :stories="item"
      :navigation="navigation"
      :loading="!!loading[type]"
      :on-refresh="onRefresh"
      :on-end-reached="onEndReached"/>
  </tab-view>
</template>

<script>
import TabView from '../components/TabView';
import Stories from '../components/Stories';
import store from '../store';

export default {
  components: { TabView, Stories },
  props: {
    navigation: {
      type: Object
    }
  },
  data () {
    return {
      loading: {}
    };
  },
  computed: {
    items () {
      return store.state.items;
    },
    titles () {
      return Object.keys(this.items);
    },
    renderHeader () {
      return this.titles.map(v => {
        return {
          value: v[0].toUpperCase() + v.slice(1),
          type: v
        };
      });
    }
  },
  methods: {
    select (i) {
      const type = this.renderHeader[i].type;
      this.fetchList(type);
    },
    onRefresh () {
      this.pullFetchList(store.state.activeType);
    },
    onEndReached () {
      const type = store.state.activeType;
      if (this.items[type].length) {
        store.dispatch('LOAD_MORE_ITEMS');
      }
    },
    pullFetchList (type) {
      this.$set(this.loading, type, true);
      this.fetchList(type).then(() => {
        this.$set(this.loading, type, false);
      });
    },
    fetchList (type) {
      return store.dispatch('FETCH_LIST_DATA', {
        type: type
      });
    }
  },
  created () {
    this.fetchList(store.state.activeType);
  }
};
</script>

<style>
.container {
  background-color: #f6f6ef;
}
</style>

