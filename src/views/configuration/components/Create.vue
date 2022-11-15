<template>
    <div>
    <el-row class="pb-2 pt-2">
        <el-col :span="5" :offset="3">
            <div class="text-left">ARTWORK PREVIEW</div>
        </el-col>
    </el-row>
    
    <el-row>
        <el-col :span="5" :offset="3">
            <div class="text-left">Keypad Artwork Approval Form</div>
        </el-col>
        <el-col :span="18">
            <div></div>
        </el-col>
    </el-row>

    <el-row>
            <el-col :span="16">
                <el-row class="pb-2">
                    <el-col :span="24">
                        <div>Product Image</div>
                    </el-col>
                </el-row>
                <el-row justify="center">
                    <el-col :span="24">
                        <Alba 
                        v-if="store.getters.getSelectedKeypad=='ALBA'"
                        :faceImg=store.getters.getFrameImage 
                        :buttonImg=store.getters.getButtonImage  />
                        <Axes 
                        v-if="store.getters.getSelectedKeypad=='AXES'"
                        :faceImg=store.getters.getFrameImage  />
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="8">
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column prop="props" width="180" />
                    <el-table-column prop="field" label="Smart Core Home"   />
                </el-table>
            </el-col>
    </el-row>
</div>
</template>
  
<script setup>
  import { ref, onMounted  } from 'vue'
  import { useStore } from 'vuex'
  import Alba from "../../../components/Alba/Alba.vue"
  import Axes from "../../../components/Axes/Axes.vue"

  const store = useStore();

  const tableData = [
  {
    props: 'Project',
    field: '',
  },
  {
    props: 'Room Type',
    field: '',
  },
  {
    props: 'Reference',
    field: 'Core Artwork',
  },
  {
    props: 'Quantity',
    field: '',
  },
  {
    props: 'Product Code',
    field: store.getters.getSelectedKeypad,
  },
  {
    props: 'Materials',
    field: 'Frame: ' + store.getters.getFrame + ' / Buttons: ' + store.getters.getButtonType,
  },
  {
    props: 'Format',
    field: store.getters.getFrameType,
  },
  {
    props: 'Button Count',
    field: store.getters.getLeftSide + (store.getters.getFrameType =='doubleFrame' ?  ' / ' + store.getters.getRightSide : '')
  },
  {
    props: 'Button Type',
    field: store.getters.getLeftStyle + (store.getters.getFrameType =='doubleFrame' ?  ' / ' + store.getters.getRightStyle : '')
  },
  {
    props: 'Icon/Text Size',
    field: store.getters.getLeftIconTextSize + (store.getters.getFrameType =='doubleFrame' ?  ' / ' + store.getters.getRightIconTextSize : '')
  },
  {
    props: 'Alignment',
    field: store.getters.getLeftAlignment + (store.getters.getFrameType =='doubleFrame' ?  ' / ' + store.getters.getRightAlignment : '')
  },
  {
    props: 'Approval Date',
    field: '',
  },
  {
    props: 'Stamp / Signature',
    field: '',
  },
    ]
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button-container {
    display: table-cell;
    vertical-align: middle;
    position: relative;
}

.pb-2 {
    padding-bottom: 2em;
}
.pt-2 {
    padding-top: 2em;
}
.text-left {
    text-align: left;
}
</style>
  