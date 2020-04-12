<template lang="pug">
.screen
  .box
    h2 Contact
    p mizucoffee@mizucoffee.net
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class AboutMeScreen extends Vue {}
</script>

<style lang="stylus" scoped>
.box
  max-width calc(100vw - 64px)

  p
    overflow-wrap break-word
</style>
