<template>
  <div class="left-side-content" :style="{width:sidebar.opened?'210px':'60px'}">
    <el-row class="tac">
      <el-col :span="24">
        <!-- <h5 class="mb-2">Custom colors</h5> -->
        <el-scrollbar>
          <el-menu
            class="el-menu-vertical"
            :collapse="!sidebar.opened"
            :default-active="activeMenu"
            :collapse-transition="false"
            mode="vertical"
          >
            <sidebar-item
              v-for="route in allRoutes"
              :key="route.path"
              :item="route"
              :base-path="route.path"
            />
          </el-menu>
        </el-scrollbar>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia/dist/pinia'
import SidebarItem from "./SidebarItem.vue";
import { constantRoutes } from "@/router";
import { useRoute } from 'vue-router'
import { useBasicStore } from '@/store/basic'

const { sidebar } = storeToRefs(useBasicStore())
const allRoutes = constantRoutes;
console.log(allRoutes);
const routeInstance = useRoute()
const activeMenu = computed(() => {
  const { meta, path } = routeInstance
  // if set path, the sidebar will highlight the path you set
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
})
</script>
<style lang="scss">
.el-menu-vertical {
  width: 210px;
}
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
