<template>
    <el-button @click="visible = true">
      Change Color {{index+1}}
    </el-button>
    <el-dialog v-model="visible" :show-close="false" width="18%">
      <template #header="{ close, titleId, titleClass }">
        <div class="my-header">
          <h4 :id="titleId" :class="titleClass">Color Change-{{index+1}} is <font-awesome-icon :icon=icon /></h4>

          <el-button type="danger" @click="close">
            <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
            Close
          </el-button>
        </div>
      </template>
      <ColorPicker :color=colorPack[props.index] @color-change="updateColor" />
    </el-dialog>
  </template>
  
  <script setup>
  import { ref, defineProps } from 'vue'
  import { useStore } from 'vuex'
  import { ColorPicker } from 'vue-accessible-color-picker'
  import { ElButton, ElDialog } from 'element-plus'
  import { CircleCloseFilled } from '@element-plus/icons-vue'
  
  const store = useStore();

  const visible = ref(false)
  const colorPack = ref(store.getters.getColors("left"));
  const props = defineProps({
        index: Number,
        icon: String,
        frame: String,
});
const updateColor = (eventData) => {
    store.commit("setColor", {color: eventData.cssColor, index: props.index, frame: props.frame})
 }
  </script>
  
  <style scoped>
  .my-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  </style>