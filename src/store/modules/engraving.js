import Vue from "vue";

const engraving = {
    state: {
        leftIconTextSize: "x",
        leftAlignment: "center",
        rightIconTextSize: "x",
        rightAlignment: "center",
        leftIcons: [
            "fa-regular fa-lightbulb",
            "fa-regular fa-lightbulb",
            "fa-regular fa-lightbulb",
            "fa-regular fa-lightbulb",
            "fa-regular fa-lightbulb",
            "fa-regular fa-lightbulb",
            "fa-regular fa-lightbulb",
            "fa-regular fa-lightbulb"
        ],
        leftTexts: [
            "Text",
            "Text",
            "Text",
            "Text",
            "Text",
            "Text",
            "Text",
            "Text",
        ],   
        rightIcons: [
            "fa-regular fa-lightbulb",
            "fa-regular fa-lightbulb",
            "fa-regular fa-lightbulb",
            "fa-regular fa-lightbulb",
            "fa-regular fa-lightbulb",
            "fa-regular fa-lightbulb",
            "fa-regular fa-lightbulb",
            "fa-regular fa-lightbulb"
        ],
        rightTexts: [
            "Text",
            "Text",
            "Text",
            "Text",
            "Text",
            "Text",
            "Text",
            "Text",
        ], 
        leftColors: [
            "rgb(255, 255, 255)",
            "rgb(255, 255, 255)",
            "rgb(255, 255, 255)",
            "rgb(255, 255, 255)",
            "rgb(255, 255, 255)",
            "rgb(255, 255, 255)",
            "rgb(255, 255, 255)",
            "rgb(255, 255, 255)"
        ],
        rightColors: [
            "rgb(255, 255, 255)",
            "rgb(255, 255, 255)",
            "rgb(255, 255, 255)",
            "rgb(255, 255, 255)",
            "rgb(255, 255, 255)",
            "rgb(255, 255, 255)",
            "rgb(255, 255, 255)",
            "rgb(255, 255, 255)"
        ],
        leftNumbers: [
            0,
            0,
            0,
            0
        ],
        rightNumbers: [
            0,
            0,
            0,
            0
        ]
    },
    getters: {
        getLeftIconTextSize: state => {return state.leftIconTextSize},
        getLeftAlignment: state => {return state.leftAlignment},
        getRightIconTextSize: state => {return state.rightIconTextSize},
        getRightAlignment: state => {return state.rightAlignment},
        getLeftIcons: (state) => {return state.leftIcons},
        getLeftTexts: state => {return state.leftTexts},
        getRightIcons: (state) => {return state.rightIcons},
        getRightTexts: state => {return state.rightTexts},
        getColors: (state, payload) => (frame) => {
            if(frame == 'left'){
                return state.leftColors;
            }
            else if(frame == 'right'){
                return state.rightColors;
            }
        },
        getLeftNumbers: (state) => {return state.leftNumbers},
        getRightNumbers: state => {return state.rightNumbers},
    },
    mutations: {
        setLeftIconTextSize: (state, leftIconTextSize) => {state.leftIconTextSize = leftIconTextSize},
        setLeftAlignment: (state, leftAlignment) => {state.leftAlignment = leftAlignment},
        setRightIconTextSize: (state, rightIconTextSize) => {state.rightIconTextSize = rightIconTextSize},
        setRightAlignment: (state, rightAlignment) => {state.rightAlignment = rightAlignment},
        setLeftIcons: (state, leftIcons) => {state.leftIcons = leftIcons},
        setLeftTexts: (state, leftTexts) => {state.leftTexts = leftTexts},
        setRightIcons: (state, rightIcons) => {state.rightIcons = rightIcons},
        setRightTexts: (state, rightTexts) => {state.rightTexts = rightTexts},
        setLeftNumbers: (state, leftNumbers) => {state.leftNumbers = leftNumbers},
        setRightNumbers: (state, rightNumbers) => {state.rightNumbers = rightNumbers},

        setIcon: (state, payload) => {
            if(payload.frame == "left") {
                state.leftIcons[payload.key] = payload.icon;
            }
            if(payload.frame == "right") {
                state.rightIcons[payload.key] = payload.icon;
            }
        },
        setColor: (state, payload) => {
            if(payload.frame == "left") {
                state.leftColors[payload.index] = payload.color;
            }
            if(payload.frame == "right") {
                state.rightColors[payload.index] = payload.color;
            }
        },
    },
    actions: {
    },

}

export default engraving;