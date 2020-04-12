<template lang="pug">
#app
  PageFrame
  .main
    router-view
</template>

<style lang="stylus">
*
  margin 0
  padding 0
</style>

<style lang="stylus" scoped>
.main
  margin 32px
</style>

<script lang="ts">
import PageFrame from "@/components/PageFrame.vue";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {
    PageFrame
  }
})
export default class App extends Vue {}
</script>
