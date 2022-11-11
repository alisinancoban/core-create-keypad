<template>
    <el-button @click="visible = true">
      Change Icon {{index+1}}
    </el-button>
    <el-dialog v-model="visible" :show-close="false">
      <template #header="{ close, titleId, titleClass }">
        <div class="my-header">
          <h4 :id="titleId" :class="titleClass">Current Icon-{{index+1}} is <font-awesome-icon :icon=icon /></h4>

          <el-button type="danger" @click="close">
            <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
            Close
          </el-button>
        </div>
      </template>
      <div class="iconPack" v-for="(icon, index) in iconPack" :key="index">
        <el-button @click="changeIcon(icon, props.index)">
            <font-awesome-icon :icon=icon />
        </el-button>
      </div>
    </el-dialog>
  </template>
  
  <script setup>
  import { ref, defineProps } from 'vue'
  import { useStore } from 'vuex'
  import { ElButton, ElDialog } from 'element-plus'
  import { CircleCloseFilled } from '@element-plus/icons-vue'
  
  const store = useStore();

  const visible = ref(false)
  const iconPack = ref(store.getters.getIconPack);
  const props = defineProps({
        index: Number,
        icon: String,
        frame: String,
});

const changeIcon = (icon,key) => {
    console.log(icon + key)
    store.commit("setIcon", {icon: icon, key: key, frame: props.frame})
    visible.value = false;
}
  </script>
  
  <style scoped>
  .my-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .iconPack {
    display: inline;
  }
  </style>