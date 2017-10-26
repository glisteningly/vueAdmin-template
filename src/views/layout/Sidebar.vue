<template>
  <div>
    <logobar></logobar>
    <el-menu mode="vertical" theme="dark" :default-active="$route.path">
      <sidebar-item :routes="routes"></sidebar-item>
    </el-menu>
  </div>
</template>

<script>
  import SidebarItem from './SidebarItem'
  import Logobar from './Logobar'

  export default {
    components: { SidebarItem, Logobar },
    computed: {
      routes() {
        return this.$router.options.routes
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .el-menu {
    min-height: 100%;
  }
</style>
