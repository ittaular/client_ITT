import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);
var url = 'https://ittplataform.herokuapp.com/api/';
var token;

export default {
    getToken() {
        let token = localStorage.getItem('token');
        if (token) {
            this.token = token;
        } else {
            this.token = null;
        }
        return this.token;
    },

    getParent(idParent) {
        this.getToken();
        Vue.http.headers.common.Authorization = this.token;
        return Vue.http.get(url + 'parent/' + idParent);
    },

    saveParent(newParent) {
        this.getToken();
        Vue.http.headers.common.Authorization = this.token;
        return Vue.http.post(url + 'parent', newParent);
    },

    updateParent(updateParent, idParent) {
        this.getToken();
        Vue.http.headers.common.Authorization = this.token;
        return Vue.http.put(url + 'update-parent/' + idParent, updateParent);
    }

}   