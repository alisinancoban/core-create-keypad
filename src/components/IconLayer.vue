<template>
    <div class="icon-layer" :style="{'top': top + 'mm', 'left': left + 'mm'}">
        <div style="color: rgb(255, 255, 255);">
            <div class="icon-box" :class=alignment>
                <font-awesome-icon v-if="pStyle == 'icon'" :icon=icon :size=size :style="{ color: props.color }" />
                <p v-if="pStyle == 'text'"  :class=size :style="{ color: props.color }">{{text}}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { defineProps, defineExpose, reactive } from "vue";

const props = defineProps({
top: Number,
left:Number,
alignment: String,
pStyle: String,
icon: String,
text: String,
size: String,
color: String
});

const store = useStore();

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
