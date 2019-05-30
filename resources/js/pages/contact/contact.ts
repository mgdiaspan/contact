import Vue from "vue";
import Component from "vue-class-component";

import "./contact.scss";

@Component({
    template: require("./contact.html"),
    components: {  },
})

export class Contact extends Vue {
    public created() {
        console.log('teste page contact');
    }
}
