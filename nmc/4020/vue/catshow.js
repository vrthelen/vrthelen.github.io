Vue.component('cat',{
    props: {
        catname: String
    },
    template: '<div><h2>{{thename}}</h2><button v-on:click="slideshow()">slideshow</button><br><br><img :src="image.url"><br><p>{{description}}</p><p>Temperament: {{temperament}}</p><p>Origin: {{origin}}</p><p>Intelligence score: {{intelligence}}</p><p>Shedding level: {{shedding}}</p><p>Energy level: {{energy_level}}</p><p>Grooming Score: {{grooming}}</p><p>Health issues: {{healthIssues}}</p><p>Adaptability score: {{adapt}}</p></div>',
    data() {
        return {
            image: "",
            whichcat: this.catname,
            thename: "",
            allofit: [],
            i: 0,
            adapt: 0,
            description: "",
            temperament: "",
            origin: "",
            intelligence: 0,
            shedding: 0,
            energy_level: 0,
            grooming: 0,
            healthIssues: 0
        }
    },
    created() {
        this.loadNextImage(this.catname);
    },
    methods: {
        async loadNextImage(breedID) {
            try {
                axios.defaults.headers.common['x-api-key'] = "5707ff43-c0b5-456f-864a-78a03c24ea46"
                let response = await axios.get('https://api.thecatapi.com/v1/images/search?breed_ids=' + breedID, {
                        params: {
                            limit: 10,
                            size: "full"
                        }
                })
                let theid = response.data[0].id;
                let response2 = await axios.get('https://api.thecatapi.com/v1/images/' + theid, {})
                this.thename = response2.data.breeds[0].name;
                this.description = response2.data.breeds[0].description;
                this.temperament = response2.data.breeds[0].temperament;
                this.origin = response2.data.breeds[0].origin;

                this.energy_level = response2.data.breeds[0].energy_level;
                this.intelligence = response2.data.breeds[0].intelligence;
                this.shedding = response2.data.breeds[0].shedding_level;
                this.grooming = response2.data.breeds[0].grooming;
                this.healthIssues = response2.data.breeds[0].health_issues;
                this.adapt = response2.data.breeds[0].adaptability;
                this.allofit = response.data;
            } catch (err) {
                console.log(err)
            }
            this.slideshow()
        },
        async slideshow() {

            if (this.i >= this.allofit.length) {
                this.i = 0;
            }
            this.image = this.allofit[this.i];
            this.i++;
        },
    },
})

new Vue({
    el: '#bobcat',
    data: {
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        show5: false,
        image: "",
        whichcat: "manx",
        thename: "",
        allofit: [],
        i: 0,
        adapt: 0
    },
    methods: {
        changeCat(num) {
            if (num==1) {
                show1 = true;
                console.log(show1);
            }
            if (num==2) {
                show2 = true;
            }
            if (num==3) {
                show3 = true;
            }
            if (num==4) {
                show4 = true;
            }
            if (num==5) {
                show5 = true; 
            }
        }
    }
})

