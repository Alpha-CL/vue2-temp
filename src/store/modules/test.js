export default {
    namespaced: true,
    // Define data in current store
    state: {
        demo: "hello"
    },
    // Immediately executed mutations
    mutations: {
        getDemo() {
            return this.state.demo;
        },
        setDemo(state, payload) {
            console.log(payload);
            state.demo = payload;
        }
    },
    // Execute asynchronous transaction, commit mutations
    actions: {
        async demoAction(context, payload) {
            context.commit("setDemo", payload);
        }
    },
    // Current state computed
    getters: {
        demoGetter(state) {
            return state.demo + ' world';
        }
    }
};