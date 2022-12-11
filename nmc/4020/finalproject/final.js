new Vue({
    el: '#content',
    data: {
        kanjiarr: [],
        userInput: String,
        query: String,
        grade: Number,
        stroke_count: Number,
        meanings: [],
        kun_readings: [],
        on_readings: [],
        name_readings: [],
        jlpt: Number,
        unicode: String,
        heisig: String,
        kanjisymbol: String,

        reading: String,
        main_kanji: [],
        name_kanji: [],

        zeros: Number,
        color: String,
        bord: String

    },
    created() {
        document.getElementById("ifKanji").style.display = "none";
        document.getElementById("ifReading").style.display = "none";
        document.getElementById("examples").style.display = "block";
        this.kanjisymbol = "kanji/05b66.svg";
        this.color = "black";
    },
    methods: {
        async userSearch() {
            this.userInput = document.getElementById("searchBar").value;
            document.getElementById("examples").style.display = "none";
            try {
                if (this.userInput.match(/[\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f]/)) {
                    this.reading = this.userInput;
                    console.log("Hira/kata detected");
                    document.getElementById("ifReading").style.display = "block";
                    document.getElementById("ifKanji").style.display = "none";
                    this.query = ('https://kanjiapi.dev/v1/reading/'+this.userInput);
                    console.log(this.query);
                    
                    let response = await axios.get(this.query);
                    
                    console.log(response.data);
                    this.main_kanji = response.data.main_kanji;
                    this.name_kanji = response.data.name_kanji;
                    
                };
                if (this.userInput.match(/[\u4e00-\u9faf\u3400-\u4dbf]/)) {
                    console.log("kanji detected");
                    
                    document.getElementById("ifReading").style.display = "none";
                    document.getElementById("ifKanji").style.display = "flex";
                    this.query = ('https://kanjiapi.dev/v1/kanji/'+this.userInput);
                    console.log(this.query);
                    
                    let response = await axios.get(this.query);
                    console.log(response.data);
                    this.grade = response.data.grade;
                    switch(this.grade) {
                        case 1: this.color = "red"; break;
                        case 2: this.color = "orange"; break;
                        case 3: this.color = "yellow"; break;
                        case 4: this.color = "green"; break;
                        case 5: this.color = "blue"; break;
                        case (6 || 7 || 8): this.color = "purple"; break;
                    }
                    this.bord = "10px solid " + this.color;
                    console.log(this.color);

                    this.stroke_count = response.data.stroke_count;
                    this.meanings = response.data.meanings;
                    this.kun_readings = response.data.kun_readings;
                    this.on_readings = response.data.on_readings;
                    this.name_readings = response.data.name_readings;
                    this.jlpt = response.data.jlpt;
                    this.unicode = response.data.unicode;
                    
                    console.log(this.unicode.length);
                    this.zeros = this.unicode.length;
                    this.kanjisymbol = "kanji/" + "0" + this.unicode + ".svg";
                    
                    this.heisig = response.data.heisig_en;
                }
            }
            catch (error) {
                document.getElementById("ifKanji").style.display = "none";
                document.getElementById("ifReading").style.display = "none";

            }
        }
    }
})
