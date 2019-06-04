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
     * check visible menu
     */
    get checkMenu(){
        return this.menuVisible ? false : true;
    }

    /**
     * Open sidebar
     */
    public openSidebar(){
        this.$emit('update:menuVisible', this.checkMenu);
    }
}
