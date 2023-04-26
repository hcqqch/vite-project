<template>
  <div class="nav-bar">
    <hamburger
        :is-active="sidebar.open"
        class="hamburger-container"
        @toggle-click="toggleSideBar"
      />
  </div>
</template>

<script setup lang="ts">
import hamburger from './Hamburger.vue'
import { useBasicStore } from '@/store/basic'
const basicStore = useBasicStore()
const { sidebar,setToggleSideBar } = basicStore
console.log(sidebar)

const toggleSideBar = () => {
  setToggleSideBar()
}
</script>

<style lang="scss" scoped>
  .nav-bar{
    height: 60px;
    background-color: aqua;
  }
</style>
