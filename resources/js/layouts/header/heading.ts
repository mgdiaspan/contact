import Vue from "vue";
import Component from "vue-class-component";

import "./heading.scss";

@Component({
    template: require("./heading.html"),
    components: { },
})

export class Heading extends Vue {

    public menuVisible = false;

    public created() {
        console.log('header create');
    }
}
