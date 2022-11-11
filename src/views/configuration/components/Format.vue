<template>
      <div class="alignment-container">
    <el-row justify="center" :gutter="20">
    <el-col  :span="12">
        <Alba 
            v-if="store.getters.getSelectedKeypad=='ALBA'"
            :faceImg=store.getters.getFrameImage 
            :buttonImg=store.getters.getButtonImage  />
        <Axes 
          v-if="store.getters.getSelectedKeypad=='AXES'"
          :faceImg=store.getters.getFrameImage  />
    </el-col>
  </el-row>
  <el-row class="pt-20" justify="center" :gutter="20">
    <div>
    <el-radio-group @input="frameChanged" v-model="frameType">
      <el-radio label="singleFrame" size="large" border>Single Frame</el-radio>
      <el-radio label="doubleFrame" size="large" border>Double Frame</el-radio>
    </el-radio-group>
  </div>
  </el-row>
</div>
</template>
  
<script setup>
  import { ref, onMounted  } from 'vue'
  import { useStore } from 'vuex'

  import Alba from "../../../components/Alba/Alba.vue"
  import Axes from "../../../components/Axes/Axes.vue"

  const store = useStore();

  const frameType = ref(store.getters.getFrameType);

    const frameChanged = ($event) => {
    if($event.target.value == "singleFrame") {
        store.commit("setFrameType", "singleFrame")
    }
    else {
        store.commit("setFrameType", "doubleFrame")
    }
}

</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button-container {
    display: table-cell;
    vertical-align: middle;
    position: relative;
}

.alignment-container {
  width: 99%;
  padding-top: 5em;
}

.pt-20 {
    padding: 3em;
}

</style>
  