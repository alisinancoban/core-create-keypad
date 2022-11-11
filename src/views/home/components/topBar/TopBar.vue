<template>
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">Core Smart Home</el-menu-item>
    <div class="flex-grow"/> 
    <el-menu-item index="1">ANY</el-menu-item>
    <el-menu-item index="2">ALBA</el-menu-item>
    <el-menu-item index="3">ARIA</el-menu-item>
    <el-menu-item index="4">AXES</el-menu-item>
    <div class="flex-grow"/> 
    <el-menu-item index="5">Create your keypad</el-menu-item>
  </el-menu>
</template>

<script>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}

export default {
  name: 'TopBar'
}
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>
