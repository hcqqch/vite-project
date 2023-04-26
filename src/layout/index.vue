<template>
    <div class="layout-wrapper">
        <Sidebar />
        <div class="main-container">
            <Navbar></Navbar>
            <TagsView></TagsView>
            <AppMain></AppMain>
        </div>
    </div>
</template>

<script setup lang="ts">
import Sidebar from './sidebar/index.vue'
import Navbar from './app-main/Navbar.vue'
import TagsView from './app-main/TagsView.vue'
import AppMain from './app-main/index.vue'

</script>

<style lang="scss">
.layout-wrapper{
    height: 100%;
    .sidebar-container{
        position: relative;
        width: 200px;
    }
    .main-container{
        margin-left: 211px;
        height: 100%;
    }
}
    
</style>