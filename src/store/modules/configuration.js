import Vue from "vue";

const configuration = {
    state: {
        activeStep : 0,
    },
    getters: {
        getActiveStep: state => {return state.activeStep}
    },
    mutations: {
        nextStep: state => {
            if(state.activeStep < 7)
                state.activeStep++
        },
        previousStep: state => {
            if(state.activeStep > 0)
                state.activeStep--
        },
        restartStep: state => {state.activeStep = 1},
        edit: state => {state.activeStep = 2}
    },
    actions: {
    },

}

export default configuration;