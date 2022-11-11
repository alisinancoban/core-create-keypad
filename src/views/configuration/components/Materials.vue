<template>
    <div class="alignment-container">
    <el-row justify="center" :gutter="20">
    <el-col :span="5">
        <Alba
            v-if="store.getters.getSelectedKeypad=='ALBA'"
            :faceImg=store.getters.getFrameImage 
            :buttonImg=store.getters.getButtonImage  />
        <Axes 
            v-if="store.getters.getSelectedKeypad=='AXES'"
            :faceImg=store.getters.getFrameImage  />
    </el-col>
    <el-col :span="12">
        <el-row justify="center">
            <p>Select Material and Color</p>
        </el-row>
        <el-row class="pt-20" justify="center">
            <div class="label">
                Frame
            </div>
            <div>
                <el-radio-group @input="frameChanged" v-model="frame">
                    <el-radio label="black" size="large" border>Black</el-radio>
                    <el-radio label="white" size="large" border>White</el-radio>
                </el-radio-group>
            </div>
        </el-row>
        <el-row v-if="store.getters.getSelectedKeypad=='ALBA'"
                justify="center">
            <div class="label">
                Buttons
            </div>
            <div>
                <el-radio-group @input="buttonChanged" v-model="button">
                    <el-radio label="black" size="large" border>Black</el-radio>
                    <el-radio label="white" size="large" border>White</el-radio>
                </el-radio-group>
            </div>
        </el-row>
    </el-col>
  </el-row>
</div>
</template>
  
<script setup>
  import { ref, onMounted } from 'vue'
  import { useStore } from 'vuex'
  import Alba from "../../../components/Alba/Alba.vue"
  import Axes from "../../../components/Axes/Axes.vue"

  const store = useStore();
  const frame = ref(store.getters.getFrame);
  const button  = ref(store.getters.getButtonType);

  const frameChanged = ($event) => {
    if($event.target.value == "black") {
        store.commit("setFrame", "black")
    }
    else {
        store.commit("setFrame", "white")
    }
}

  const buttonChanged = ($event) => {
    if($event.target.value == "black") {
        store.commit("setButtonType", "black")
    }
    else{
        store.commit("setButtonType", "white")
    }
}

    onMounted(() => {
        store.commit("setFrameType","singleFrame") // <div>
    })
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

.label {
    padding-right: 20px;
    align-items: center;
}
</style>
  