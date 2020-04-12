<template lang="pug">
.screen-horizontal
  .box
    //- h2 ABOUT ME
    span.name Ritsuki GOTO
    span.birthday 07/09/2000

//  .box
//    img#photo(src="@/assets/ritsukigoto.png")
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class AboutMeScreen extends Vue {}
</script>

<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css?family=Archivo+Black&display=swap');
@import url('https://fonts.googleapis.com/css?family=Alegreya:700|Carter+One|Orbitron&display=swap');
.screen-horizontal
  margin-top -32px
  padding-top 32px

h2
  font-family 'Archivo Black', sans-serif
  font-family: 'Carter One', cursive;

  font-size 38pt
  margin-bottom 24px

.name
  display block
  font-family: 'Orbitron', sans-serif;
  font-size 38pt

.birthday
  display block
  font-family: 'Orbitron', sans-serif;
  font-size 28pt

img
  max-height 80vh
  max-width calc(40vw - 64px)

.box
  text-align center
  max-width calc(100vw - 64px)
  width 40vw
  overflow-wrap break-word
</style>
