<template>
    <div class="alignment-container bg">
      <el-space>
        <KeypadCard class="inline-block" :imageUrl = store.getters.getAlba keypadName = "ALBA"/>
        <KeypadCard class="inline-block" :imageUrl = store.getters.getAria keypadName = "ARIA"/>
        <KeypadCard class="inline-block" :imageUrl = store.getters.getAxes keypadName = "AXES"/>
      </el-space>
    </div>
</template>
  
  <script setup>
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  import KeypadCard from '../../../components/KeypadCard.vue';

  const store = useStore();

  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .inline-block {
    display: inline-block;
    vertical-align: middle;
  }

  .alignment-container {
  width: 99%;
  padding-top: 10em;
}

.bg {
    background-image: url("../../../assets/bg.56b20ccb.jpg");
    position: absolute;
    top: 0px;
    right: 0px;
    left: 0px;
    bottom: 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-position: center;
    /* background-repeat: no-repeat; */
    background-size: cover;
  }
  </style>
  