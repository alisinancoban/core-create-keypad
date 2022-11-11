const format = {
    state: {
        frameType: "singleFrame",
    },
    getters: {
        getFrameType: state => {return state.frameType},
    },
    mutations: {
        setFrameType: (state, frameType) => {state.frameType = frameType},
    },
    actions: {
    },

}

export default format;