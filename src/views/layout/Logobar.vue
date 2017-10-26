<template>
  <div class="logobar-wrapper" :class="{hideSidebar:!sidebar.opened}">
    <img :src="img_logo" alt="logo">
  </div>
</template>

<script>
  import img_logo from '@/assets/images/allsmart.png'

  export default {
    name: 'logobar',
    data() {
      return {
        img_logo
      }
    },
    computed: {
      sidebar() {
        return this.$store.state.app.sidebar
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  @import '../../styles/variables.scss';

  .logobar-wrapper {
    width: 100%;
    height: 60px;
    background: $dark_bgcolor;
    img {
      width: 70%;
      margin: 12px 18px;
    }
    &.hideSidebar {
    }
  }
</style>
