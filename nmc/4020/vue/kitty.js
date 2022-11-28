new Vue({
    el: '#app',
    data: {
        catArray: [],
        breeds: []
    },
    created() {
        this.loadNextImage();
    },
    methods: {
        async loadNextImage() {
            try {
                axios.defaults.headers.common['x-api-key'] = "5707ff43-c0b5-456f-864a-78a03c24ea46"
                let response = await axios.get('https://api.thecatapi.com/v1/breeds')
                this.catArray = response.data;
                for(i=0;i<this.catArray.length;i++) {
                    let catObj = this.catArray[i].image;
                    catObj.name = this.catArray[i].name;
                    catObj.description = this.catArray[i].description;
                    catObj.aff = this.catArray[i].affection_level;
                    catObj.indoor = this.catArray[i].indoor;
                    catObj.natural = this.catArray[i].natural;
                    catObj.dog = this.catArray[i].dog_friendly;
                    catObj.health = this.catArray[i].health_issues;
                    catObj.soc = this.catArray[i].social_needs;
                    catObj.origin = this.catArray[i].origin;
                    this.breeds.push(catObj);
                }
            } catch (err) {
                console.log(err)
            }

        },
        computeSize(size) {
            return size * 50 + "px";
        }
    }
})
