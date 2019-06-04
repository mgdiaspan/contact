import Vue from "vue";
import Component from "vue-class-component";

import "./contact.scss";
import Axios from "axios";

@Component({
    template: require("./contact.html"),
    components: {},
})

export class Contact extends Vue {

    public name: string = '';
    public email: string = '';
    public telephone: string = '';
    public message: string = '';
    public nameFile: string = '';
    public file;
    public showSnackbar: boolean = false;
    public messageSnackbar = '';
    public hasMessages = false;

    public $refs: Vue["$refs"] & {
        file:{
            $refs: Vue["$refs"] & {
                inputFile: HTMLInputElement
            }
        }

    };

    /**
     * computed show required fields
     */
    get requiredValidate() {
        return {
            'md-invalid': this.hasMessages
        }
    }

    /**
     * Send data to save
     */
    public sendContact() {
        let formData = new FormData();
        let email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
        let phone = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;

        // validate fields requerid
        if(this.name.length <= 0 || this.email.length <= 0 || this.telephone.length <= 0
            || this.message.length <= 0 || this.nameFile.length <= 0) {
            this.hasMessages = !this.hasMessages;
            return;
        }

        // validate email
        if(!email.test(this.email)){
            this.messageSnackbar = 'not valid email';
            this.showSnackbar = true;
            return;
        }
        // validate telephone
        if(!phone.test(this.telephone)){
            this.messageSnackbar = 'not valid telephone';
            this.showSnackbar = true;
            return;
        }

        formData.append('name', this.name);
        formData.append('email', this.email);
        formData.append('telephone', this.telephone);
        formData.append('message', this.message);
        formData.append('nameFile', this.nameFile);
        formData.append('file', this.file);

        let vm = this;

        Axios.post('/contact/save', formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(function (response) {
                if(response.data.error){
                    vm.messageSnackbar = response.data.validation;
                    vm.showSnackbar = true;
                } else {
                    vm.messageSnackbar = 'Success save contact';
                    vm.showSnackbar = true;
                }
            })
            .catch(function (error) {
                vm.messageSnackbar = 'Try again later';
                vm.showSnackbar = true;
            })
    }

    /**
     * clear fields in form
     */
    public clearContact() {
        this.name = '';
        this.email = '';
        this.telephone = '';
        this.message = '';
        this.nameFile = '';
    };

    /**
     * Handles the uploading of files
     */
    public handleFileUpload() {
        let vm = this;
        let file    = this.$refs.file.$refs.inputFile.files[0];
        let reader  = new FileReader();
        reader.onloadend = function () {
            vm.file = reader.result;
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            vm.file = [];
        }
    }
}
