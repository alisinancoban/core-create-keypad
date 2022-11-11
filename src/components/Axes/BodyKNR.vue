<template>
    <div class="icon-table">
        <IconLayer 
            top=15.35
            left=12.5
            :alignment="store.getters.getRightAlignment"
            :style="store.getters.getRightStyle"
            :icon=icons[0]
            :color=colors[0]
            :text=texts[0]
            :size="store.getters.getRightIconTextSize"
        />
        <IconLayer 
            top=15.35
            left=40.1
            :alignment="store.getters.getRightAlignment"
            :style="store.getters.getRightStyle"
            :icon=icons[1]
            :color=colors[1]
            :text=texts[1]
            :size="store.getters.getRightIconTextSize"
        />
        <IconLayer 
            top=15.35
            left=68.3
            :alignment="store.getters.getRightAlignment"
            :style="store.getters.getRightStyle"
            :icon=icons[2]
            :color=colors[2]
            :text=texts[2]
            :size="store.getters.getRightIconTextSize"
        />
        <IconLayer 
            top=32.25
            left=12.5
            :alignment="store.getters.getRightAlignment"
            :style="store.getters.getRightStyle"
            :icon=icons[3]
            :color=colors[3]
            :text=texts[3]
            :size="store.getters.getRightIconTextSize"
        />
        <IconLayer 
            top=32.25
            left=40.1
            :alignment="store.getters.getRightAlignment"
            :style="store.getters.getRightStyle"
            :icon=icons[4]
            :color=colors[4]
            :text=texts[4]
            :size="store.getters.getRightIconTextSize"
        />
        <IconLayer 
            top=32.25
            left=68.3
            :alignment="store.getters.getRightAlignment"
            :style="store.getters.getRightStyle"
            :icon=icons[5]
            :color=colors[5]
            :text=texts[5]
            :size="store.getters.getRightIconTextSize"
        />
        <IconLayer 
            top=49.25
            left=12.5
            :alignment="store.getters.getRightAlignment"
            :style="store.getters.getRightStyle"
            :icon=icons[6]
            :color=colors[6]
            :text=texts[6]
            :size="store.getters.getRightIconTextSize"
        />
        <IconLayer 
            top=49.25
            left=40.1
            :alignment="store.getters.getRightAlignment"
            :style="store.getters.getRightStyle"
            :icon=icons[7]
            :color=colors[7]
            :text=texts[7]
            :size="store.getters.getRightIconTextSize"
        />
        <IconLayer 
            top=49.25
            left=68.3
            :alignment="store.getters.getRightAlignment"
            :style="store.getters.getRightStyle"
            :icon=icons[8]
            :color=colors[8]
            :text=texts[8]
            :size="store.getters.getRightIconTextSize"
        />
        <IconLayer 
            top=66.15
            left=12.5
            :alignment="store.getters.getRightAlignment"
            :style="store.getters.getRightStyle"
            :icon=icons[9]
            :color=colors[9]
            :text=texts[9]
            :size="store.getters.getRightIconTextSize"
        />
        <IconLayer 
            top=66.15
            left=40.1
            :alignment="store.getters.getRightAlignment"
            :style="store.getters.getRightStyle"
            :icon=icons[3]
            :color=colors[3]
            :text=texts[3]
            :size="store.getters.getRightIconTextSize"
        />
        <IconLayer 
            top=66.15
            left=68.3
            :alignment="store.getters.getRightAlignment"
            :style="store.getters.getRightStyle"
            :icon=icons[10]
            :color=colors[10]
            :text=texts[10]
            :size="store.getters.getRightIconTextSize"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { defineProps, defineExpose, reactive } from "vue";

import IconLayer from "../IconLayer.vue";

const store = useStore();

const icons = ref(store.getters.getRightIcons);
const texts = ref(store.getters.getRightTexts);
const colors = ref(store.getters.getColors("right"));

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.x {
font-size: 0.8em;
}

.xl {
font-size: 1.3em;
}

[class="2xl"] {
font-size: 2.0em;
}

.left {
text-align: left;
}

.right {
text-align: right;
}

.center {
text-align: center;
}
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
