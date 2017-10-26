<template>
  <div class="app-container">
    <el-row>
      <el-button @click="fetchData" type="primary">fetch!</el-button>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-input type="textarea" v-model="resjson"></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { getMyInfo } from '@/api/table'

  export default {
    data() {
      return {
        resjson: null
      }
    },
    methods: {
      fetchData: function () {
        getMyInfo().then(response => {
          console.log('graphql fetch myinfo')
          console.log(response)
          this.resjson = JSON.stringify(response.data)
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .el-row {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
