<template>
    <el-steps :active="$store.getters.getActiveStep" finish-status="success">
    <el-step title="1. Collection" />
    <el-step title="2. Materials" />
    <el-step title="3. Format" />
    <el-step title="4. Product" />
    <el-step title="5. Style" />
    <el-step title="6. Engraving" />
    <el-step title="7. Create" />
  </el-steps>

  <router-view></router-view>

  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useStore } from 'vuex'

  const store = useStore();

  </script>
  
  <style scoped>
  
  </style>