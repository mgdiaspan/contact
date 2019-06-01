import Vue from "vue";
import Component from "vue-class-component";

import { Heading } from "./header/heading";

import "./app.scss";

@Component({
    template: require("./app.html"),
    components: { Heading },
})

export class App extends Vue {

    /**
     * Control menu visible
     */
    public menuVisible = false;

    public created() {

    }
}
