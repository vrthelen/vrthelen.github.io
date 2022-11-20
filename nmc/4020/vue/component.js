Vue.component('toast', {
    template:
    '<div><button v-on:click="checkToast" >check the toast</button> <h3>The toast is {{toastState}} </h3></div>',
    data: {
        toastState: "burnt"
         },
          methods: {
             checkToast(){
                this.toastState = "perfect"
             }
         }
})

var co = new Vue({
    el: '#co',
    
})