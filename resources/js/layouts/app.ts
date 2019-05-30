import Vue from "vue";
import Component from "vue-class-component";

import "./app.scss";

@Component({
    template: require("./app.html"),
    components: { },
})

export class App extends Vue {

    /**
     *
     */
    public menuVisible = false;

    public created() {

    }
}
