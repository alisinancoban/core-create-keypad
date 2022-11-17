<template>
            <div class="icon-table">
                <IconLayer 
                    class="ft-110"
                    top=19
                    left=9
                    :alignment="store.getters.getLeftAlignment"
                    pStyle="text"
                    :color=colors[0]
                    :text=numbers[0]
                />
                <IconLayer 
                    class="ft-110"
                    top=19
                    left=27
                    :alignment="store.getters.getLeftAlignment"
                    pStyle="text"
                    :color=colors[1]
                    :text=numbers[1]
                />
                <IconLayer 
                    class="ft-110"
                    top=19
                    left=45
                    :alignment="store.getters.getLeftAlignment"
                    pStyle="text"
                    :color=colors[2]
                    :text=numbers[2]
                />
                <IconLayer
                    class="ft-110" 
                    top=19
                    left=63
                    :alignment="store.getters.getLeftAlignment"
                    pStyle="text"
                    :color=colors[3]
                    :text=numbers[3]
                />
                <IconLayer 
                    top=66.15
                    left=7.5
                    :alignment="store.getters.getLeftAlignment"
                    :pStyle="store.getters.getLeftStyle"
                    :icon=icons[0]
                    :color=colors[4]
                    :text=texts[0]
                    :size="store.getters.getLeftIconTextSize"
                />
                <IconLayer 
                    top=66.15
                    left=35.1
                    :alignment="store.getters.getLeftAlignment"
                    :pStyle="store.getters.getLeftStyle"
                    :icon=icons[1]
                    :color=colors[5]
                    :text=texts[1]
                    :size="store.getters.getLeftIconTextSize"
                />
                <IconLayer 
                    top=66.15
                    left=63.3
                    :alignment="store.getters.getLeftAlignment"
                    :pStyle="store.getters.getLeftStyle"
                    :icon=icons[2]
                    :color=colors[6]
                    :text=texts[2]
                    :size="store.getters.getLeftIconTextSize"
                />
            </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { defineProps, defineExpose, reactive } from "vue";

import IconLayer from "../IconLayer.vue";

const store = useStore();

const icons = ref(store.getters.getLeftIcons);
const texts = ref(store.getters.getLeftTexts);
const numbers = ref(store.getters.getLeftNumbers);
const colors = ref(store.getters.getColors("left"));

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.ft-110 {
    font-size: 110px;
}
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
