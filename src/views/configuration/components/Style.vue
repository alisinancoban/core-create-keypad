<template>
          <div class="alignment-container">
    <el-row justify="center" :gutter="20">
    <el-col  :span="12">
        <Alba 
            v-if="store.getters.getSelectedKeypad=='ALBA'"
            :faceImg=store.getters.getFrameImage 
            :buttonImg=store.getters.getButtonImage 
        />
        <Axes 
            v-if="store.getters.getSelectedKeypad=='AXES'"
            :faceImg=store.getters.getFrameImage  />
    </el-col>
  </el-row>
  <el-row class="pt-20" justify="center" :gutter="20">
    <div>
    <p>Left Side</p>
    <el-radio-group @input="leftChanged" v-model="leftStyle">
      <el-radio label="icon" size="large" border>Icon Only</el-radio>
      <el-radio label="text" size="large" border>Text Only</el-radio>
    </el-radio-group>
  </div>
  <div class="pl-20" v-if="store.getters.getFrameType == 'doubleFrame'">
    <p>Right Side</p>
    <el-radio-group @input="rightChanged" v-model="rightStyle">
      <el-radio label="icon" size="large" border>Icon Only</el-radio>
      <el-radio label="text" size="large" border>Text Only</el-radio>
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

  const leftStyle = ref(store.getters.getLeftStyle);
  const rightStyle = ref(store.getters.getRightStyle);

    const leftChanged = ($event) => {
        store.commit("setLeftStyle", $event.target.value)
    }
    const rightChanged = ($event) => {
        store.commit("setRightStyle", $event.target.value)
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

.pl-20 {
  padding-left: 2em;
}
</style>
  