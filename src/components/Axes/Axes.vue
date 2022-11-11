<template>
    <el-row justify="center"> 
    <el-col>
        <SingleFrame v-if="store.getters.getFrameType=='singleFrame'" 
            :faceImg=store.getters.getFrameImage 
             />
        <DoubleFrame v-if="store.getters.getFrameType=='doubleFrame'" 
            :faceImg=store.getters.getFrameImage 
             />
    </el-col>
    </el-row>
</template>
  
<script setup>
    import { ref } from 'vue'
    import { useStore } from 'vuex'
    import { defineProps, defineExpose, reactive } from "vue";
    
    import SingleFrame from "./SingleFrame.vue";
    import DoubleFrame from "./DoubleFrame.vue";

    const store = useStore();
    const props = defineProps({
        faceImg: String,
    });

  
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layer {
    display: inline-block;
    position: relative;
}

.h350 {
    height: 95mm;
    margin: 0 1.5mm;
}

.hold-img {
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 0;
    left: 0;
}

.button-img {
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 0;
    left: 0;
}

.body-img {
    z-index: 99;
    height: 95mm;
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 0;
    left: 0;
}

.icon-table {
    display: inline-block;
    width: 95mm;
    height: 95mm;
    position: relative;
}

.icon-layer {
    width: 24mm;
    height: 11mm;

    position: absolute;
    display: table;
    z-index: 99;
}

.icon-table .icon-layer>div {
    position: relative;
    width: 100%;
    height: 100%;
    display: table-cell;
}

.icon-box {
    position: absolute;
    width: 100%;
    height: 100%;
    display: table;
}
</style>
  