import Vue from "vue";

const keypads = {
    state: {
        selectedKeypad : {
            name: "",
            frame: "",
            buttonColor: "",
            format: "",
            function: "",
            style: "",
        },
        


    },
    getters: {
        getSelectedKeypad: state => {return state.selectedKeypad},
        getSelectedKeypadName: state => {return state.selectedKeypad.name}
    },
    mutations: {
        setSelectedKeypad: (state, keypad, payload) => {state.selectedKeypad = keypad},
    },
    actions: {
    },

}

export default keypads;