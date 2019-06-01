import Vue from "vue";
import { Component, Prop }  from "vue-property-decorator";

import "./heading.scss";

@Component({
    template: require("./heading.html"),
    components: { },
})

export class Heading extends Vue {

    @Prop({
        default: false,
        type: Boolean
    })
    public menuVisible;

    /**
     * Open sidebar
     */
    public openSidebar(){
        this.menuVisible = !this.menuVisible;
        this.$emit('update:menuVisible', this.menuVisible);
    }

    public created() {
    }
}
