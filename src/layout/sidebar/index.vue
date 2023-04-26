<template>
  <div class="left-side-content">
    <el-row class="tac">
      <el-col :span="24">
        <!-- <h5 class="mb-2">Custom colors</h5> -->
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
        >
          <sidebar-item v-for="route in allRoutes" :key="route.path" :item="route" :base-path="route.path" />
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
// import {
//   Document,
//   Menu as IconMenu,
//   Location,
//   Setting,
// } from '@element-plus/icons-vue'

import SidebarItem from './SidebarItem.vue'
import { constantRoutes } from '@/router'
const allRoutes = constantRoutes
console.log(allRoutes)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<style lang="scss" scoped>
.left-side-content {
  width: 210px;
  position: fixed;
  background-color: #545c64;
  left: 0;
  top: 0;
  bottom: 0;
  // border-right: 1px solid #f2f2f2;
  z-index: 600;
}
</style>
