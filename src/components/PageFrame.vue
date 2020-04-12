<template lang="pug">
  .frame
    .line.top
    .line.right
    .line.bottom
    .line.left
</template>

<style lang="stylus" scoped>
.line
  position fixed
  background #204FA1
  z-index 10
  &.top
    height 32px
    width 100%
    top 0
    left 0
    transform translateY(-32px)
    animation t2b .3s ease-in-out 2s 1 normal forwards
  &.right
    height 100%
    width 32px
    top 0
    right 0
    transform translateX(32px)
    animation r2l .3s ease-in-out 2s 1 normal forwards
  &.bottom
    height 32px
    width 100%
    bottom 0
    left 0
    transform translateY(32px)
    animation b2t .3s ease-in-out 2s 1 normal forwards
  &.left
    height 100%
    width 32px
    top 0
    left 0
    transform translateX(-32px)
    animation l2r .3s ease-in-out 2s 1 normal forwards

@keyframes l2r
	from
    transform translateX(-32px)
  to
    transform translateX(0)

@keyframes r2l
	from
    transform translateX(32px)
  to
    transform translateX(0px)

@keyframes t2b
	from
    transform translateY(-32px)
  to
    transform translateY(0)

@keyframes b2t
	from
    transform translateY(32px)
  to
    transform translateY(0px)
</style>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class PageFrame extends Vue {}
</script>
