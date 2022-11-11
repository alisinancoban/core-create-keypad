<template>
  <el-row justify="center">
    <el-col :span="2">
      <el-button v-if="store.getters.getActiveStep < 6" @click="restartStep">RESTART</el-button>
    </el-col>
    <el-col v-if="store.getters.getActiveStep >= 6"  :span="2">
      <el-button @click="edit">EDIT</el-button>
    </el-col>
    <el-col v-if="store.getters.getActiveStep < 6" :span="2">
      <el-button @click="previousStep">BACK</el-button>
    </el-col>
    <el-col v-if="store.getters.getActiveStep < 6" :span="2">
      <el-button @click="nextStep" >NEXT</el-button>
    </el-col>
    <el-col v-if="store.getters.getActiveStep >= 6" :span="2">
      <el-button @click="nextStep" >DOWNLOAD</el-button>
    </el-col>
  </el-row>
</template>

<script setup>
import { useStore } from 'vuex'
import {useRoute, useRouter} from 'vue-router'
import { ref } from 'vue';

  const store = useStore();
  const route = useRoute();
  const router = useRouter();

  const activeStep = ref(store.getters.getActiveStep);

  

  const nextStep = () => { 
    store.commit("nextStep")
    switch(store.getters.getActiveStep){
      case 0: router.push('/configuration/keypads'); break;
      case 1: router.push('/configuration/materials'); break;
      case 2: router.push('/configuration/format'); break;
      case 3: router.push('/configuration/product'); break;
      case 4: router.push('/configuration/style'); break;
      case 5: router.push('/configuration/engraving'); break;
      case 6: router.push('/configuration/create'); break;
      case 7: window.print(); break;
    }
  }
  const previousStep = () => { 
    store.commit("previousStep")
    switch(store.getters.getActiveStep){
      case 0: router.push('/configuration/keypads'); break;
      case 1: router.push('/configuration/materials'); break;
      case 2: router.push('/configuration/format'); break;
      case 3: router.push('/configuration/product'); break;
      case 4: router.push('/configuration/style'); break;
      case 5: router.push('/configuration/engraving'); break;
      case 6: router.push('/configuration/create'); break;
    }
  }
  
  const restartStep = () => { 
    store.commit("restartStep")
    router.push('/configuration/keypads');
  } 

  const edit = () => { 
    store.commit("edit")
    router.push('/configuration/materials');
  } 
</script>

<style scoped>

</style>