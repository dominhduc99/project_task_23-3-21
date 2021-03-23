import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "../../components/HelloWorld/HelloWorld.vue"; // @ is an alias to /src

@Component({
    components: {
        HelloWorld,
    },

})
export default class Home extends Vue {
    public FullName = '';
    public PhoneNumber = '';
    public Email = '';
    public BirthDay = ''
    public mounted() {
        console.log(this.$store);
        this.load()
    }
    public FullnameInput = '';
    public PhoneNumbreInput = '';
    public EmailInput = '';
    public BirthdayInput = '';
    public patternBirthday = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
    public patternEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    public submit() {
        console.log(this.$store.getters['user/getFullname']);

        if (this.FullnameInput.length >= 5 || this.EmailInput.length >= 5 || this.PhoneNumbreInput.length == 10 || this.patternBirthday.test(this.BirthdayInput)) {
            this.$store.commit('user/setFullname', this.FullnameInput);
            this.$store.commit('user/setEmail', this.EmailInput);
            this.$store.commit('user/setPhoneNumber', this.PhoneNumbreInput);
            this.$store.commit('user/setBirthday', this.BirthdayInput);
            this.$router.push({ path: '/home' });
        }
        console.log(this.$store.getters['user/getFullname']);
        this.load()

    }
    public load() {
        this.FullName = this.$store.getters['user/getFullname'];
        this.PhoneNumber = this.$store.getters['user/getPhoneNumber'];
        this.Email = this.$store.getters['user/getEmail'];
        this.BirthDay = this.$store.getters['user/getBirthday'];
    }
}