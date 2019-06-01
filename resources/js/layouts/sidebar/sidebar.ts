import Vue from "vue";
import Component from "vue-class-component";

import "./sidebar.scss";

@Component({
    template: require("./sidebar.html"),
    components: { },
})

export class Sidebar extends Vue {

    public menuVisible = false;

    public created() {
        console.log('sidebar create');
    }
}
