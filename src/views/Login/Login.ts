import { Component, Vue } from "vue-property-decorator";

@Component({
    components: {

    },

})

export default class Loginn extends Vue {
    public username = '';
    public password = '';

    public Login() {
        if (this.username != 'admin' || this.password != 'admin') {
            alert('Login fail')
            return false;
        } else {
            this.$router.push({ path: '/home' });
        }
    }
}