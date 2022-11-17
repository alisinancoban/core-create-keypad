<template>
    <div class="layer">
        <img :src=faceImg class="h350">
        <div class="button-img">
            <img :src=buttonImg class="h350">
            <img :src=buttonImg class="h350">
        </div>
        <div class="body-img">
            <div class="body-img">
                <BodyN3 v-if="store.getters.getLeftSide=='n3'"/>
                <BodyKN v-if="store.getters.getLeftSide=='kn'"/>
                <BodyDR v-if="store.getters.getLeftSide=='dr'"/>
                <BodyN3R v-if="store.getters.getRightSide=='n3'"/>
                <BodyKNR v-if="store.getters.getRightSide=='kn'"/>
                <BodyDRR v-if="store.getters.getRightSide=='dr'"/>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import { useStore } from 'vuex'
    import { defineProps, defineExpose, reactive } from "vue";

    import BodyN3 from "./BodyN3.vue";
    import BodyKN from "./BodyKN.vue";
    import BodyDR from "./BodyDR.vue";
    import BodyN3R from "./BodyN3R.vue";
    import BodyKNR from "./BodyKNR.vue";
    import BodyDRR from "./BodyDRR.vue";

const buttonCount  = ref(9);

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
