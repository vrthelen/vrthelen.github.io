Vue.component('toast', {
    template:
    '<button v-on:click="checkToast" >check the toast</button> <h3>The toast is {{toastState}} </h3>'
})

var co = new Vue({
    el: '#co',
    data: {
   toastState: "burnt"
    },
     methods: {
        checkToast(){
           this.toastState = "perfect"
        }
    }
})