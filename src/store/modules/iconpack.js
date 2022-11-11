import Vue from "vue";

const iconPack = {
    state: {
        icons: [
            "fa-regular fa-lightbulb",
            "fa-solid fa-house",
            "fa-solid fa-house-signal",
            "fa-solid fa-tv",
            "fa-solid fa-shower",
            "fa-solid fa-faucet-drip",
            "fa-solid fa-bell",
            "fa-solid fa-house-fire",
            "fa-solid fa-bath",
            "fa-solid fa-snowflake",
            "fa-solid fa-door-open",
            "fa-solid fa-plug",
            "fa-solid fa-stairs",
            "fa-solid fa-fan",
        ]
    },
    getters: {
        getIconPack: state => {return state.icons},
    },
    mutations: {
    },
    actions: {
    },

}

export default iconPack;