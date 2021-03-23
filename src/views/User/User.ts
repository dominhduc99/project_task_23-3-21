import { Component, Vue } from "vue-property-decorator";

@Component({
    components: {

    },

})

export default class Login extends Vue {
    public fullName = '';
    public email = '';
    public phoneNumber = '';
    public birthday = '';
    public patternBirthday = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;

    public submit() {
        console.log(this.$store.getters['user/getFullname']);

        if (this.fullName.length >= 5 || this.email.length >= 5 || this.phoneNumber.length == 10 || this.patternBirthday.test(this.birthday)) {
            this.$store.commit('user/setFullname', this.fullName);
            this.$store.commit('user/setEmail', this.email);
            this.$store.commit('user/setPhoneNumber', this.phoneNumber);
            this.$store.commit('user/setBirthday', this.birthday);
            this.$router.push({ path: '/home' });
        }
        console.log(this.$store.getters['user/getFullname']);

    }
}