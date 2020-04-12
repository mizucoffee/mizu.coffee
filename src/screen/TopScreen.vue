<template lang="pug">
.screen
  Logo
  a(v-scroll-to="'#main'")
    ScrollButton
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Logo from "@/components/Logo.vue";
import ScrollButton from "@/components/ScrollButton.vue";

@Component({
  components: {
    Logo,
    ScrollButton
  }
})
export default class TopScreen extends Vue {}
</script>

<style lang="stylus" scoped>
a
  position absolute
  bottom 100px
</style>
