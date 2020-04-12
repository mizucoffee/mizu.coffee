<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:serif="http://www.serif.com/"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="100%"
    height="100%"
    viewBox="0 0 512 512"
    version="1.1"
    xml:space="preserve"
    style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:square;stroke-miterlimit:1.5;"
  >
    <path
      id="l-1"
      d="M14.022,102.596l241.978,102.269l241.978,-102.269"
      style="fill:none;stroke-width:15px;"
    />
    <path
      id="l-2"
      d="M14.022,204.865l241.978,102.27l241.978,-102.27"
      style="fill:none;stroke-width:15px;"
    />
    <path
      id="l-3"
      d="M14.022,307.135l241.978,102.269l241.978,-102.269"
      style="fill:none;stroke-width:15px;"
    />
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Logo extends Vue {}
</script>

<style lang="stylus" scoped>
svg
  min-width 100px
  width 8vw
  max-width 200px
  animation fuwafuwa 1.5s ease-in-out 3s infinite alternate
  stroke #ccc
  cursor pointer

  path
    stroke inherit
    opacity 0
    animation fadeIn .5s ease 0s forwards
    transform translateY(-300px)

  #l-1
    animation-delay 2.1s
  #l-2
    animation-delay 2.05s
  #l-3
    animation-delay 2.0s

@keyframes fadeIn
  from
    opacity 0
    transform translateY(-300px)
  to
    opacity 1
    transform translateY(0px)

@keyframes fuwafuwa
  from
    transform scale(1)
    stroke #ccc
  to
    transform scale(0.9)
    stroke #777
</style>
