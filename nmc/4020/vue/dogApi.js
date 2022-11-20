new Vue({
    el: '#app',

    data() {

        return {
            info: null
        
        }
    },
    mounted: function mounted() {
        this.showme()

    },

    methods: {
    async    showme(index) {
    await    axios
                .get('https://dog.ceo/api/breed/spaniel/list')
                .then(response => (this.info = response.data));
        console.log(this.info)
   }
    }
})
