import Vue from "vue";
import Component from "vue-class-component";

import "./contact.scss";

@Component({
    template: require("./contact.html"),
    components: {  },
})

export class Contact extends Vue {

    public name: string = '';
    public email: string = '';
    public telephone: string = '';
    public message: string = '';
    public file: string = '';


    public created() {
    }
}
