const style = {
    state: {
        leftStyle: "icon",
        rightStyle: "icon"
    },
    getters: {
        getLeftStyle: state => {return state.leftStyle},
        getRightStyle: state => {return state.rightStyle},
    },
    mutations: {
        setLeftStyle: (state, leftStyle) => {state.leftStyle = leftStyle},
        setRightStyle: (state, rightStyle) => {state.rightStyle = rightStyle},
    },
    actions: {
    },

}

export default style;