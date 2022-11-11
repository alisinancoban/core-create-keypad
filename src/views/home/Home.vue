<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <TopBar/>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <BottomBar/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import TopBar from './components/topBar/TopBar.vue';
import BottomBar from './components/bottomBar/BottomBar.vue';
import Keypads from '../configuration/components/Keypads.vue';
import Materials from '../configuration/components/Materials.vue'
import Configuration from '../configuration/Configuration.vue';

export default {
  name: 'Home',
  components: {
    TopBar,
    BottomBar,
    Keypads,
    Materials,
    Configuration
}

}
</script>

<style scoped>
.el-main {
  height: 100%;
  width: 100%;
}
.bg {
    background-image: url("../../assets/bg.56b20ccb.jpg");
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

  .el-footer {
    text-align: center;
    position: fixed;
    width: 100%;
    z-index: 999;
    bottom: 0;
    padding: 13px 0;
    line-height: 2;
}
</style>
