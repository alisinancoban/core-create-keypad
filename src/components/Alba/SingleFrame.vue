<template>
        <div class="layer">
            <img :src=faceImg class="h350">
            <div class="button-img">
                <img :src=buttonImg class="h350">
            </div>
            <div class="body-img">
                <Body2K v-if="store.getters.getLeftSide=='2k'"/>
                <Body4K v-if="store.getters.getLeftSide=='4k'"/>
            </div>

        </div>
</template>
  
<script setup>
    import { ref } from 'vue'
    import { useStore } from 'vuex'
    import { defineProps, defineExpose, reactive } from "vue";

    import Body2K from "./Body2K.vue";
    import Body4K from "./Body4K.vue";
  
    const store = useStore();
  
    const props = defineProps({
        faceImg: String,
        buttonImg: String,
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
  