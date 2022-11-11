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
  <el-row v-if="store.getters.getSelectedKeypad=='ALBA'" class="pt-20" justify="center" :gutter="20">
    <div>
    <p>Left Side</p>
    <el-radio-group class="ptt-20" @input="leftChanged" v-model="leftSide">
      <el-radio label="2k" size="large" border>2K</el-radio>
      <el-radio label="4k" size="large" border>4K</el-radio>
    </el-radio-group>
  </div>
  <div class="pl-20" v-if="store.getters.getFrameType == 'doubleFrame'">
    <p>Right Side</p>
    <el-radio-group @input="rightChanged" v-model="rightSide">
      <el-radio label="2k" size="large" border>2K</el-radio>
      <el-radio label="4k" size="large" border>4K</el-radio>
    </el-radio-group>
  </div>
  </el-row>
  <el-row v-if="store.getters.getSelectedKeypad=='AXES'" class="pt-20" justify="center" :gutter="20">
    <div>
    <p>Left Side</p>
    <el-radio-group class="ptt-20" @input="leftChanged" v-model="leftSide">
      <el-radio label="dr" size="large" border>DR</el-radio>
      <el-radio label="kn" size="large" border>KN</el-radio>
      <el-radio label="n3" size="large" border>N3</el-radio>
    </el-radio-group>
  </div>
  <div class="pl-20" v-if="store.getters.getFrameType == 'doubleFrame'">
    <p>Right Side</p>
    <el-radio-group @input="rightChanged" v-model="rightSide">
      <el-radio label="dr" size="large" border>DR</el-radio>
      <el-radio label="kn" size="large" border>KN</el-radio>
      <el-radio label="n3" size="large" border>N3</el-radio>
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

  const leftSide = ref(store.getters.getLeftSide);
  const rightSide = ref(store.getters.getRightSide);

    const leftChanged = ($event) => {
        store.commit("setLeftSide", $event.target.value)
    }
    const rightChanged = ($event) => {
        store.commit("setRightSide", $event.target.value)
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
  