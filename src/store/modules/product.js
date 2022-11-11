const product = {
    state: {
        leftSide: "2k",
        rightSide: "2k"
    },
    getters: {
        getLeftSide: state => {return state.leftSide},
        getRightSide: state => {return state.rightSide},
    },
    mutations: {
        setLeftSide: (state, leftSide) => {state.leftSide = leftSide},
        setRightSide: (state, rightSide) => {state.rightSide = rightSide},
    },
    actions: {
    },

}

export default product;