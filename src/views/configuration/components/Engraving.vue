<template>
    <div class="alignment-container">
    <el-row justify="center" :gutter="20">
    <el-col  :span="12">
        <Alba 
            v-if="store.getters.getSelectedKeypad=='ALBA'"
            :faceImg=store.getters.getFrameImage 
            :buttonImg=store.getters.getButtonImage
        />
        <Axes 
          v-if="store.getters.getSelectedKeypad=='AXES'"
          :faceImg=store.getters.getFrameImage  />
    </el-col>
  </el-row>
  
  <el-row class="pt-20" justify="center">
    <el-col :span="12">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="Icons & Text Size" name="icon-text-size">
                <el-row justify="center">
                    <el-col :span="10">
                        <el-radio-group @input="leftIconTextSizeChanged" v-model="leftIconTextSize">
                            <el-radio label="x" size="medium" border>Small</el-radio>
                            <el-radio label="xl" size="medium" border>Medium</el-radio>
                            <el-radio label="2xl" size="medium" border>Large</el-radio>
                        </el-radio-group>
                    </el-col>
                    <el-col v-if="store.getters.getFrameType == 'doubleFrame'" :span="2">
                        
                    </el-col>
                    <el-col v-if="store.getters.getFrameType == 'doubleFrame'" :span="10">
                        <el-radio-group @input="rightIconTextSizeChanged" v-model="rightIconTextSize">
                            <el-radio label="x" size="medium" border>Small</el-radio>
                            <el-radio label="xl" size="medium" border>Medium</el-radio>
                            <el-radio label="2xl" size="medium" border>Large</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>   
            </el-tab-pane>
            <el-tab-pane label="Buttons" name="buttons">
                <el-row justify="center">
                    <el-col :span="10"> 
                        <div v-if="store.getters.getLeftStyle == 'text'">
                            <div v-if="store.getters.getLeftSide == '2k'">
                                <el-col class="dp-inline" :span="12" v-for="(text,index) in leftTexts.slice(0,4)" :key="index">
                                    <el-input v-model="leftTexts[index]" class="w-50 m-2" size="large" />
                                </el-col>
                            </div>
                            <div v-if="store.getters.getLeftSide == '4k'">
                                <el-col class="dp-inline" :span="12" v-for="(text,index) in leftTexts" :key="index">
                                    <el-input v-model="leftTexts[index]" class="w-50 m-2" size="large" />
                                </el-col>
                            </div>
                            <div v-if="store.getters.getLeftSide == 'n3'">
                                <el-col class="dp-inline" :span="12" v-for="(text,index) in leftNumbers" :key="index">
                                    <el-input-number v-model="leftNumbers[index]" :min="0" :max="9" class="w-50 m-2" size="large" />
                                </el-col>
                                <el-col class="dp-inline" :span="12" v-for="(text,index) in leftTexts.slice(0,3)" :key="index">
                                    <el-input v-model="leftTexts[index]" class="w-50 m-2" size="large" />
                                </el-col>
                            </div>
                        </div>
                        <div v-if="store.getters.getLeftStyle == 'icon'">
                            <div v-if="store.getters.getLeftSide == '2k'" >
                                <el-col class="dp-inline" :span="12" v-for="(icon, key, index) in leftIcons.slice(0,4)" :key="index">
                                    <IconPicker :icon="icon" :index="key" frame = "left" />
                                </el-col>
                            </div>
                            <div v-if="store.getters.getLeftSide == '4k'" >
                                <el-col class="dp-inline" :span="12" v-for="(icon, key, index) in leftIcons" :key="index">
                                    <IconPicker :icon="icon" :index="key" frame = "left" />
                                </el-col>
                            </div>
                            <div v-if="store.getters.getLeftSide == 'n3'">
                                <el-col class="dp-inline" :span="12" v-for="(text,index) in leftNumbers" :key="index">
                                    <el-input-number v-model="leftNumbers[index]" :min="0" :max="9" class="w-50 m-2" size="large" />
                                </el-col>
                                <el-col class="dp-inline" :span="12" v-for="(icon, key, index) in leftIcons.slice(0,3)" :key="index">
                                    <IconPicker :icon="icon" :index="key" frame = "left" />
                                </el-col>
                            </div>
                        </div>
                        
                    </el-col>
                    <el-col v-if="store.getters.getFrameType == 'doubleFrame'" :span="2">
                        
                    </el-col>
                    <el-col v-if="store.getters.getFrameType == 'doubleFrame'" :span="10">
                        <div v-if="store.getters.getRightStyle == 'text'">
                            <div v-if="store.getters.getRightSide == '2k'">
                                <el-col class="dp-inline" :span="12" v-for="(text,index) in rightTexts.slice(0,4)" :key="index">
                                    <el-input v-model="rightTexts[index]" class="w-50 m-2" size="large" />
                                </el-col>
                            </div>
                            <div v-if="store.getters.getRightSide == '4k'">
                                <el-col class="dp-inline" :span="12" v-for="(text,index) in rightTexts" :key="index">
                                    <el-input v-model="rightTexts[index]" class="w-50 m-2" size="large" />
                                </el-col>
                            </div>
                            <div v-if="store.getters.getRightSide == 'n3'">
                                <el-col class="dp-inline" :span="12" v-for="(text,index) in rightNumbers" :key="index">
                                    <el-input-number v-model="rightNumbers[index]" :min="0" :max="9" class="w-50 m-2" size="large" />
                                </el-col>
                                <el-col class="dp-inline" :span="12" v-for="(text,index) in rightTexts.slice(0,3)" :key="index">
                                    <el-input v-model="rightTexts[index]" class="w-50 m-2" size="large" />
                                </el-col>
                            </div>
                        </div>
                        <div v-if="store.getters.getRightStyle == 'icon'">
                            <div v-if="store.getters.getRightSide == '2k'" >
                                <el-col class="dp-inline" :span="12" v-for="(icon, key, index) in rightIcons.slice(0,4)" :key="index">
                                    <IconPicker :icon="icon" :index="key" frame = "right" />
                                </el-col>
                            </div>
                            <div v-if="store.getters.getRightSide == '4k'" >
                                <el-col class="dp-inline" :span="12" v-for="(icon, key, index) in rightIcons" :key="index">
                                    <IconPicker :icon="icon" :index="key" frame = "right" />
                                </el-col>
                            </div>
                            <div v-if="store.getters.getRightSide == 'n3'">
                                <el-col class="dp-inline" :span="12" v-for="(text,index) in rightNumbers" :key="index">
                                    <el-input-number v-model="rightNumbers[index]" :min="0" :max="9" class="w-50 m-2" size="large" />
                                </el-col>
                                <el-col class="dp-inline" :span="12" v-for="(icon, key, index) in rightIcons.slice(0,3)" :key="index">
                                    <IconPicker :icon="icon" :index="key" frame = "right" />
                                </el-col>
                            </div>
                        </div>
                    </el-col>
                </el-row> 
            </el-tab-pane>
            <el-tab-pane label="Alignment" name="alignment">
                <el-row justify="center">
                    <el-col :span="10">
                        <el-radio-group @input="leftAlignmentChanged" v-model="leftAlignment">
                            <el-radio label="left" size="medium" border>Left</el-radio>
                            <el-radio label="center" size="medium" border>Center</el-radio>
                            <el-radio label="right" size="medium" border>Right</el-radio>
                            <Chrome v-model="colors"></Chrome>
                        </el-radio-group>
                    </el-col>
                    <el-col v-if="store.getters.getFrameType == 'doubleFrame'" :span="2">
                        
                    </el-col>
                    <el-col v-if="store.getters.getFrameType == 'doubleFrame'" :span="10">
                        <el-radio-group @input="rightAlignmentChanged" v-model="rightAlignment">
                            <el-radio label="left" size="medium" border>Left</el-radio>
                            <el-radio label="center" size="medium" border>Center</el-radio>
                            <el-radio label="right" size="medium" border>Right</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row> 
            </el-tab-pane>
            <el-tab-pane label="Color" name="color">
                <el-row justify="center">
                    <el-col :span="11"> 
                        <el-row>
                            <div v-if="store.getters.getLeftSide == '2k'">
                                <el-col class="dp-inline" :span="12" v-for="(color, key, index) in leftIcons.slice(0,4)" :key="index">
                                    <ColorPicker :color=color :index="key" frame="left"/>
                                </el-col>
                            </div>
                            <div v-if="store.getters.getLeftSide == '4k'">
                                <el-col class="dp-inline" :span="12" v-for="(color, key, index) in leftIcons" :key="index">
                                    <ColorPicker class="mb-1" :color=color :index="key" frame="left"/>
                                </el-col>
                            </div>
                            <div v-if="store.getters.getLeftSide == 'n3'">
                                <el-col class="dp-inline" :span="12" v-for="(color, key, index) in 7" :key="index">
                                    <ColorPicker class="mb-1" :color=color :index="key" frame="left"/>
                                </el-col>
                            </div>
                        </el-row>                       
                    </el-col>
                    <el-col v-if="store.getters.getFrameType == 'doubleFrame'" :span="2">
                        
                    </el-col>
                    <el-col v-if="store.getters.getFrameType == 'doubleFrame'" :span="11">
                        <el-row>
                            <div v-if="store.getters.getRightSide == '2k'">
                                <el-col class="dp-inline" :span="12" v-for="(color, key, index) in rightIcons.slice(0,4)" :key="index">
                                    <ColorPicker :color=color :index="key" frame="right"/>
                                </el-col>
                            </div>
                            <div v-if="store.getters.getRightSide == '4k'">
                                <el-col class="dp-inline" :span="12" v-for="(color, key, index) in rightIcons" :key="index">
                                    <ColorPicker class="mb-1" :color=color :index="key" frame="right"/>
                                </el-col>
                            </div>
                            <div v-if="store.getters.getRightSide == 'n3'">
                                <el-col class="dp-inline" :span="12" v-for="(color, key, index) in 7" :key="index">
                                    <ColorPicker class="mb-1" :color=color :index="key" frame="right"/>
                                </el-col>
                            </div>
                        </el-row>
                    </el-col>
                </el-row> 
            </el-tab-pane>
        </el-tabs>
    </el-col>
  </el-row>
</div>
</template>
  
<script setup>
  import { ref, onBeforeMount  } from 'vue'
  import { useStore } from 'vuex'
  import { TabsPaneContext } from 'element-plus'

  import Alba from "../../../components/Alba/Alba.vue"
  import Axes from "../../../components/Axes/Axes.vue"
  import IconPicker from "../../../components/IconPicker.vue"
  import ColorPicker from "../../../components/ColorPicker.vue"



  const store = useStore();

  const activeName = ref('icon-text-size')
  const leftIconTextSize = ref(store.getters.getLeftIconTextSize);
  const leftAlignment = ref(store.getters.getLeftAlignment);
  const rightIconTextSize = ref(store.getters.getRightIconTextSize);
  const rightAlignment = ref(store.getters.getRightAlignment);

  const leftIcons = ref(store.getters.getLeftIcons);
  const leftTexts = ref(store.getters.getLeftTexts);
  const rightIcons = ref(store.getters.getRightIcons);
  const rightTexts = ref(store.getters.getRightTexts);
  const leftNumbers = ref(store.getters.getLeftNumbers);
  const rightNumbers = ref(store.getters.getRightNumbers);
  const colors = ref("");


    const handleClick = (TabsPaneContext, event) => {
    console.log(TabsPaneContext, event)
    }
    const leftIconTextSizeChanged = ($event) => {
        store.commit("setLeftIconTextSize", $event.target.value)
    }
    const rightIconTextSizeChanged = ($event) => {
        store.commit("setRightIconTextSize", $event.target.value)
    }
    const leftAlignmentChanged = ($event) => {
        store.commit("setLeftAlignment", $event.target.value)
    }
    const rightAlignmentChanged = ($event) => {
        store.commit("setRightAlignment", $event.target.value)
    }

    const changeColor = (index) => {
        console.log(index);
    }
    const updateColor = (eventData) => {

    }
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.alignment-container {
  width: 99%;
  padding-top: 5em;
}

.pt-20 {
    padding: 3em;
}

.dp-inline {
    display: inline-block;
    padding-bottom: 1.1em;
    padding-right: 1.1em;
}
</style>
  