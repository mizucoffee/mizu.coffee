<template>
  <svg viewBox="0 0 2520 280" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g id="m">
      <g id="m1" class="v">
        <rect x="50" y="0" width="50" height="280" />
      </g>
      <g id="m2" class="h">
        <rect x="0" y="50" width="300" height="50" />
      </g>
      <g id="m3" class="v">
        <rect x="150" y="50" width="50" height="230" />
      </g>
      <g id="m4" class="v">
        <rect x="250" y="50" width="50" height="230" />
      </g>
    </g>
    <g id="i">
      <g id="i1" class="v">
        <rect x="330" y="50" width="50" height="230" />
      </g>
    </g>
    <g id="z">
      <g id="z1" class="h">
        <rect x="410" y="50" width="250" height="50" />
      </g>
      <g id="z2" class="h">
        <rect x="460" y="140" width="150" height="50" />
      </g>
      <g id="z3" class="h">
        <rect x="410" y="230" width="250" height="50" />
      </g>
    </g>
    <g id="u">
      <g id="u1" class="v">
        <rect x="690" y="50" width="50" height="230" />
      </g>
      <g id="u2" class="h">
        <rect x="690" y="230" width="230" height="50" />
      </g>
      <g id="u3" class="v">
        <rect x="870" y="50" width="50" height="230" />
      </g>
    </g>
    <g id="dot" class="v">
      <rect x="950" y="230" width="50" height="50" />
    </g>
    <g id="c">
      <g id="c1" class="h">
        <rect x="1030" y="50" width="230" height="50" />
      </g>
      <g id="c2" class="v">
        <rect x="1030" y="50" width="50" height="230" />
      </g>
      <g id="c3" class="h">
        <rect x="1030" y="230" width="230" height="50" />
      </g>
    </g>
    <g id="o">
      <g id="o1" class="h">
        <rect x="1290" y="50" width="230" height="50" />
      </g>
      <g id="o2" class="v">
        <rect x="1290" y="50" width="50" height="230" />
      </g>
      <g id="o3" class="h">
        <rect x="1290" y="230" width="230" height="50" />
      </g>
      <g id="o3" class="v">
        <rect x="1470" y="50" width="50" height="230" />
      </g>
      <g id="o3" class="v">
        <rect x="1380" y="140" width="50" height="50" />
      </g>
    </g>
    <g id="f1">
      <g id="f11" class="h">
        <rect x="1600" y="50" width="150" height="50" />
      </g>
      <g id="f12" class="v">
        <rect x="1600" y="50" width="50" height="230" />
      </g>
      <g id="f13" class="h">
        <rect x="1550" y="140" width="200" height="50" />
      </g>
    </g>
    <g id="f2">
      <g id="f21" class="h">
        <rect x="1830" y="50" width="150" height="50" />
      </g>
      <g id="f22" class="v">
        <rect x="1830" y="50" width="50" height="230" />
      </g>
      <g id="f23" class="h">
        <rect x="1780" y="140" width="200" height="50" />
      </g>
    </g>
    <g id="e1">
      <g id="e11" class="h">
        <rect x="2010" y="50" width="230" height="50" />
      </g>
      <g id="e12" class="h">
        <rect x="2010" y="140" width="230" height="50" />
      </g>
      <g id="e13" class="h">
        <rect x="2010" y="230" width="230" height="50" />
      </g>
      <g id="e14" class="v">
        <rect x="2010" y="50" width="50" height="230" />
      </g>
      <g id="e15" class="v">
        <rect x="2190" y="50" width="50" height="140" />
      </g>
    </g>
    <g id="e2">
      <g id="e21" class="h">
        <rect x="2290" y="50" width="230" height="50" />
      </g>
      <g id="e22" class="h">
        <rect x="2290" y="140" width="230" height="50" />
      </g>
      <g id="e23" class="h">
        <rect x="2290" y="230" width="230" height="50" />
      </g>
      <g id="e24" class="v">
        <rect x="2290" y="50" width="50" height="230" />
      </g>
      <g id="e25" class="v">
        <rect x="2470" y="50" width="50" height="140" />
      </g>
    </g>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Logo extends Vue {
  mounted() {
    const v = document.querySelectorAll(".v") as NodeListOf<HTMLElement>;
    const h = document.querySelectorAll(".h") as NodeListOf<HTMLElement>;

    v.forEach((item, i) => (item.style.animationDelay = `${1 + i * 0.02}s`));
    h.forEach((item, i) => (item.style.animationDelay = `${1.3 + i * 0.02}s`));
  }
}
</script>

<style lang="stylus" scoped>
svg
  margin 128px
  display block
  width 60vw
  max-width 900px

.v
  transform translateY(-280px)
  animation v .2s ease 1s 1 forwards


.h
  transform translateX(-2520px)
  animation h .4s ease 1s 1 forwards

@keyframes v
	from
   transform: translateY(-280px)
  to
   transform: translateY(0px)


@keyframes h
	from
   transform translateX(-2520px)
  to
   transform translateX(0px)
</style>
