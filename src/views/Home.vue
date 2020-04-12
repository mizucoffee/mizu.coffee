<template lang="pug">
  .home(:class="{'disable-scroll': !scroll}")
    TopScreen
    AboutMeScreen#main
    ContactScreen
    //- PGP鍵
    //- Intern
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import TopScreen from "@/screen/TopScreen.vue";
import AboutMeScreen from "@/screen/AboutMeScreen.vue";
import ContactScreen from "@/screen/ContactScreen.vue";

@Component({
  components: {
    TopScreen,
    AboutMeScreen,
    ContactScreen
  }
})
export default class Home extends Vue {
  scroll: boolean = false;
  mounted() {
    setTimeout(() => (this.scroll = true), 2400);
  }
}
</script>

<style lang="stylus">
.screen
  width calc(100vw - 64px)
  min-height calc(100vh - 64px)
  display flex
  flex-direction column
  justify-content center
  align-items center

.screen-horizontal
  width calc(100vw - 64px)
  min-height calc(100vh - 64px)
  display flex
  justify-content center
  align-items center

.disable-scroll
  height calc(100vh - 64px)
  overflow hidden
</style>
