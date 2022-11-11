<template>
  <el-row justify="center"> 
  <el-col>
    <img :src="imageUrl">
  </el-col>
  <el-col>
    <el-button class="button" @click="selectedKeypad">{{keypadName}}</el-button>
  </el-col>
  </el-row>
</template>

<script setup>
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  import { defineProps, defineExpose, reactive } from "vue";

  const store = useStore();

  const props = defineProps({
    imageUrl: String,
    keypadName: String
  });

  const selectedKeypad = () => {
    switch(props.keypadName) { 
      case "ALBA": 
        store.commit("setLeftIconTextSize","x");
        store.commit("setLeftAlignment","center");
        store.commit("setRightIconTextSize","x");
        store.commit("setRightAlignment","center");
        store.commit("setFrameType","singleFrame");
        store.commit("setFrame","black");
        store.commit("setButtonType","black");
        store.commit("setLeftSide","2k");
        store.commit("setRightSide","2k");
        store.commit("setLeftStyle","icon");
        store.commit("setRightStyle","icon");
        break;
      case "AXES":
      store.commit("setLeftIconTextSize","x");
        store.commit("setLeftAlignment","center");
        store.commit("setRightIconTextSize","x");
        store.commit("setRightAlignment","center");
        store.commit("setFrameType","singleFrame");
        store.commit("setFrame","black");
        store.commit("setButtonType","black");
        store.commit("setLeftSide","n3");
        store.commit("setRightSide","n3");
        store.commit("setLeftStyle","icon");
        store.commit("setRightStyle","icon");
        break;
    }
    store.commit("setSelectedKeypad", props.keypadName)
  }



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
