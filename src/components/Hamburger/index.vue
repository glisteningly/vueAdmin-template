<template>
  <div>
    <img @click="toggleClick" class="svg-icon hamburger" :class="{'is-active':isActive}" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0NzIuNjE1IDQ3Mi42MTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ3Mi42MTUgNDcyLjYxNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiPgo8Zz4KCTxnPgoJCTxyZWN0IHk9IjM3Ny41NjEiIHdpZHRoPSI0NzIuNjE1IiBoZWlnaHQ9Ijk1LjAzNSIgZmlsbD0iIzMyNDE1NyIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHJlY3QgeT0iMTg4LjgxIiB3aWR0aD0iNDcyLjYxNSIgaGVpZ2h0PSI5NS4wMzUiIGZpbGw9IiMzMjQxNTciLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxyZWN0IHk9IjAuMDIiIHdpZHRoPSI0NzIuNjE1IiBoZWlnaHQ9Ijk1LjAzNSIgZmlsbD0iIzMyNDE1NyIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />  </div>
</template>

<script>
export default {
  name: 'hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    toggleClick: {
      type: Function,
      default: null
    }
  }
}
</script>

<style scoped>
.hamburger {
    display: inline-block;
    cursor: pointer;
    width: 16px;
    height: 16px;
    transform: rotate(0deg);
    transition: .38s;
    transform-origin: 50% 50%;
}

.hamburger.is-active {
    transform: rotate(90deg);
}
</style>
