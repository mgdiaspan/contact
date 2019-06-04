import Vue from "vue";
import Component from "vue-class-component";

import "./sidebar.scss";
import {Prop} from "vue-property-decorator";

@Component({
    template: require("./sidebar.html"),
    components: { },
})

export class Sidebar extends Vue {

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
    public closeSidebar(){
        this.$emit('update:menuVisible', this.checkMenu);
    }
}
