import { Module } from "vuex";

const Store: Module<any, any> = {
    namespaced: true,
    state: {
        FullName: "minhduc",
        Email: "duc@gmail.com",
        PhoneNumber: "023233233",
        Birthday: "2-2-2222"
    },
    mutations: {
        setFullname(state, value) {
            state.FullName = value;
        },
        setEmail(state, value) {
            state.Email = value;
        },
        setPhoneNumber(state, value) {
            state.PhoneNumber = value;
        },
        setBirthday(state, value) {
            state.Birthday = value;
        },
    },
    getters: {
        getFullname: (state) => {
            return state.FullName;
        },
        getEmail: (state) => {
            return state.Email;
        },
        getPhoneNumber: (state) => {
            return state.PhoneNumber;
        },
        getBirthday: (state) => {
            return state.Birthday;
        },
    },
    actions: {
        //
    }
};

export { Store as user };