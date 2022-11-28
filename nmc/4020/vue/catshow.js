Vue.component('cat',{
    props: {
        catname: String
    },
    template: '<div id="allcat"><div id="please"><div id="catpic"><h2>{{thename}}</h2><button v-on:click="slideshow()">slideshow</button><br><br><img :src="image.url"></div><div id="catinfo"><br><p>{{description}}</p><p>Temperament: {{temperament}}</p><p>Origin: {{origin}}</p><br><div id="scorebox"><div id="words"><p>Intelligence score: </p><p>Shedding level: </p><p>Energy level: </p><p>Grooming Score:</p><p>Health issues: </p><p>Adaptability score: </p></div><div id="blocks"><div class="score":style="{\'width\':int+\'px\'}"></div><div class="score":style="{\'width\':she+\'px\'}"></div><div class="score":style="{\'width\':ene+\'px\'}"></div><div class="score":style="{\'width\':gro+\'px\'}"></div><div class="score":style="{\'width\':hea+\'px\'}"></div><div class="score":style="{\'width\':ada+\'px\'}"></div></div></div></div></div></div>',
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
            healthIssues: 0,

            
            show1: false,
            show2: false,
            show3: false,
            show4: false,
            show5: false
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
        }
        
        
    },
    computed: {
        ene() {
            return 50*this.energy_level;
        },
        gro() {
            return 50*this.grooming
        },
        int() {
            return 50*this.intelligence
        },
        hea() {
            return 50*this.healthIssues
        },
        ada() {
            return 50*this.adapt
        },
        she() {
            return 50*this.shedding
        }
    }
})

new Vue({
    el: '#bobcat',
    data: {
        image: "",
        whichcat: "manx",
        thename: "",
        allofit: [],
        i: 0,
        adapt: 0
    },
    methods: {
    }
})
resetAll();
document.getElementById("cat2").style.display = "block";


function resetAll() {
    document.getElementById("cat1").style.display = "none";
    document.getElementById("cat2").style.display = "none";
    document.getElementById("cat3").style.display = "none";
    document.getElementById("cat4").style.display = "none";
    document.getElementById("cat5").style.display = "none";
}

function changeCat(num) {
    if (num==1) {
        resetAll();
        document.getElementById("cat1").style.display = "block";
    }
    if (num==2) {
        resetAll();
        document.getElementById("cat2").style.display = "block";
    }
    if (num==3) {
        resetAll();
        document.getElementById("cat3").style.display = "block";
    }
    if (num==4) {
        resetAll();
        document.getElementById("cat4").style.display = "block";
    }
    if (num==5) {
        resetAll();
        document.getElementById("cat5").style.display = "block";
    }
}

