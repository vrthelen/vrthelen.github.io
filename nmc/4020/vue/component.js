Vue.component('toast', {
    template:
    '<div><button v-on:click="checkToast" >check the toast</button> <h3>The toast is {{toastState}} </h3></div>'
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