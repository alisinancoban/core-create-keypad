import Vue from "vue";

const material = {
    state: {
        frame: "black",
        buttonType: "black",
    },
    getters: {
        getFrame: state => {return state.frame},
        getButtonType: state => {return state.buttonType},
    },
    mutations: {
        setFrame: (state, frame) => {state.frame = frame},
        setButtonType: (state, buttonType) => {state.buttonType = buttonType},
    },
    actions: {
    },

}

export default material;