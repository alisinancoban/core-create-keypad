import { createStore } from 'vuex'
import images from './modules/images';
import configuration from "./modules/configuration"
import keypads from './modules/keypads';
import material from './modules/material';
import format from './modules/format';
import product from './modules/product';
import style from './modules/style';
import engraving from './modules/engraving';
import iconPack from './modules/iconpack';

const store = createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    images,
    configuration,
    keypads,
    material,
    format,
    product,
    style,
    engraving,
    iconPack
  }
})

export default store;
