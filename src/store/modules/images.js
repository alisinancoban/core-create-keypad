import Vue from "vue";

import Alba from '@/assets/ALBA.png'
import Aria from '@/assets/ARIA.png'
import Axes from '@/assets/AXES.png'

import giw4k from '@/assets/buttons/giw_4k.png'
import gyb4k from '@/assets/buttons/gyb_4k.png'

import giw_1f from '@/assets/faces/giw_1f.png'
import gyb_1f from '@/assets/faces/gyb_1f.png'
import giw_2f from '@/assets/faces/giw_2f.png'
import gyb_2f from '@/assets/faces/gyb_2f.png'

const images = {
    state: {
        Alba: Alba,
        Aria: Aria,
        Axes: Axes,
        giw4k: giw4k,
        gyb4k: gyb4k,
        giw_1f: giw_1f,
        gyb_1f: gyb_1f,
        giw_2f: giw_2f,
        gyb_2f: gyb_2f,
    },
    getters: {
        getAlba: state => {return state.Alba},
        getAria: state => {return state.Aria},
        getAxes: state => {return state.Axes},
        getGiw4k: state => {return state.giw4k},
        getGyb4k: state => {return state.gyb4k},
        getGiw_1f: state => {return state.giw_1f},
        getGyb_1f: state => {return state.gyb_1f},
        getGiw_2f: state => {return state.giw_2f},
        getGyb_2f: state => {return state.gyb_2f},

        getFrameImage: (state, payload) => {
            if(payload.getFrame == 'black'){
                if(payload.getFrameType == 'singleFrame'){
                    return state.gyb_1f
                }
                if(payload.getFrameType == 'doubleFrame'){
                    return state.gyb_2f
                }
            }
            else if(payload.getFrame == 'white'){
                if(payload.getFrameType == 'singleFrame'){
                    return state.giw_1f;
                }
                if(payload.getFrameType == 'doubleFrame'){
                    return state.giw_2f;
                }
            }
        },
        getButtonImage: (state,payload) => {
            switch(payload.getButtonType) {
                case "black": return state.gyb4k;
                case "white": return state.giw4k;
            }
        }
    },
    mutations: {
    },
    actions: {
    },

}

export default images;