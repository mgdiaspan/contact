import Vue from "vue";
import Component from "vue-class-component";

import "./teste.scss";

@Component({
    template: require("./teste.html"),
    components: {  },
})

export class Teste extends Vue {

    public created() {
        console.log('teste typescript');
    }

    public mounted() {
        console.log('Component mounted.')
    }
}
