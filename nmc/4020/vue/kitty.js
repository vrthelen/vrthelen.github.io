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
                    catObj.intelligence = this.catArray[i].intelligence;
                    catObj.shedding = this.catArray[i].shedding_level;
                    catObj.voc = this.catArray[i].vocalisation;
                    catObj.origin = this.catArray[i].origin;
                    this.breeds.push(catObj);
                }
            } catch (err) {
                console.log(err)
            }

        },
        computeLev(level) {
            if (level == 1) {
                return "lightgreen";
            } else if (level == 2) {
                return "yellow";
            } else if (level == 3) {
                return "orange";
            } else if (level == 4) {
                return "red";
            } else if (level == 5) {
                return "darkred";
            }
        }
    },
    computed: {
    }
})
