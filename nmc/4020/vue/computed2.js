var studentdata = new Vue({
    el: '#us',

    data: {
        stuname: "",
        counter: 0,
        oswald: "nothing yet",
        yall: [{
                "stu_name": "Emuel",
                "last_name": "Aldridge",
                "domain": "emuel.com",
                "fact": "I am the teacher  ",
                "section": "physical",
                "counter": "1"
            },
            {
                "stu_name": "Grace",
                "last_name": "McCarthy",
                "domain": "gracejmccarthy.com\/em\/6020",
                "fact": "  In middle school I babysat T-Pain's kids: there names were: Muziq and Lyriq! ",
                "section": "physical",
                "counter": "128"
            },
            {
                "stu_name": "Olivia",
                "last_name": "Wakim",
                "domain": "oliviawakim.com\/nmc\/4020",
                "fact": "I was published in the AJC this summer during my internship!",
                "section": "physical",
                "counter": "123"
            },
            {
                "stu_name": "Amelia",
                "last_name": "Neumeister",
                "domain": "amelianeumeister.com\/em\/6020",
                "fact": " I'm always crafting, I love to crochet and cross stitch!",
                "section": "online",
                "counter": "125"
            },
            {
                "stu_name": "Jessica",
                "last_name": "Sherrington",
                "domain": "jessicasherrington.com\/em\/6020",
                "fact": "Hello! I'm Jess and I love rock climbing.",
                "section": "carino",
                "counter": "164"
            },
            {
                "stu_name": "Valentina",
                "last_name": "Thelen",
                "domain": "valentinathelen.com\/nmc\/4020",
                "fact": "Changed my whole schedule and almost changed majors 2 hours before add\/drop ended (; Ï‰ ; )",
                "section": "online",
                "counter": "163"
            },
            {
                "stu_name": "Alyssa",
                "last_name": "McGuire",
                "domain": "alyssamcguire.com\/em\/6020",
                "fact": " Fun fact: I did this wrong the first time lol. I recently designed Brenau University's Cheerleading shirts and some shirt's for University of North Georgia (some free welcome shirts they pass out haha.) ",
                "section": "online",
                "counter": "127"
            },
            {
                "stu_name": "Gavin",
                "last_name": "Hall",
                "domain": "thegavinhall.com\/em\/6020",
                "fact": "I got picked to go on stage with Pentatonix during a song at the Duluth Energy Center (now the Gas South Arena)!",
                "section": "carino",
                "counter": "118"
            },
            {
                "stu_name": "TARYN",
                "last_name": "WILLIAMS",
                "domain": "taryn-williams.com\/em\/6020",
                "fact": " If I could get paid to read books and do nothing else, I'd be living the dream. But right now I work for UGA fulltime and go to school fulltime, so my reading is pushed to the side until I can graduate and do something badass and hopefully get paid to do something I love. ",
                "section": "carino",
                "counter": "122"
            },
            {
                "stu_name": "Jacqueline",
                "last_name": "Boals",
                "domain": "jacquelineboals.com\/em\/6020",
                "fact": "  I have an identical twin sister. Sister ESP is a thing!",
                "section": "online",
                "counter": "119"
            },
            {
                "stu_name": "Sydney",
                "last_name": "Hughes",
                "domain": "sydneybhughes.com\/em\/6020",
                "fact": "I have a dog named Hacksaw. ",
                "section": "online",
                "counter": "120"
            },
            {
                "stu_name": "Conor",
                "last_name": "Santoianni",
                "domain": "pauseorplay.com\/em\/6020",
                "fact": "  I am an Irish Citizen",
                "section": "physical",
                "counter": "121"
            },
            {
                "stu_name": "Lillian",
                "last_name": "Ballance",
                "domain": "lillianballance.com\/em\/6020",
                "fact": "I play the folk harp.",
                "section": "carino",
                "counter": "115"
            },
            {
                "stu_name": "Oscar",
                "last_name": "Parada",
                "domain": "oscarparada.com\/4020",
                "fact": "Hi everyone! I can fold my tongue like a burrito.",
                "section": "online",
                "counter": "114"
            },
            {
                "stu_name": "Kiyan",
                "last_name": "Kojoori",
                "domain": "kiyankojoori.reclaim.hosting",
                "fact": " I'm really interested in UX, and I like to play volleyball. ",
                "section": "carino",
                "counter": "165"
            },
            {
                "stu_name": "Yazmeen",
                "last_name": "Renova",
                "domain": "yazmeenrenova.com\/em\/6020",
                "fact": "  I was a fourth grade teacher for a year! ",
                "section": "online",
                "counter": "111"
            },
            {
                "stu_name": "Mary Brock",
                "last_name": "Smith",
                "domain": "marybrocksmith.com\/em\/6020",
                "fact": "I learned how to ski when I was 3!",
                "section": "physical",
                "counter": "173"
            },
            {
                "stu_name": "Abby",
                "last_name": "Lane",
                "domain": "abbylane2.com\/4020",
                "fact": "I have a twin but we do not know if we are identical or fraternal.",
                "section": "physical",
                "counter": "113"
            },
            {
                "stu_name": "Maya",
                "last_name": "Giro",
                "domain": "mayagiro.com\/6020",
                "fact": "I like taking yoga classes!",
                "section": "online",
                "counter": "108"
            },
            {
                "stu_name": "Alexis",
                "last_name": "Faire",
                "domain": "alexisfaire.com\/em\/6020",
                "fact": "I was the first baby born in my hospital on New Years Day in 1995.",
                "section": "carino",
                "counter": "109"
            },
            {
                "stu_name": "Allison",
                "last_name": "Carter",
                "domain": "allisphere.com\/6020",
                "fact": "  I am left handed, have two fake teeth and can speak-ish Italian. Plus have a pretty uncanny ability to remember song lyrics.",
                "section": "carino",
                "counter": "102"
            },
            {
                "stu_name": "Erin",
                "last_name": "Hughes",
                "domain": "erinelizabethhughes.com\/6020",
                "fact": "According to ancestry.com, President James Madison *might* be my third cousin 8x removed. Also, I like rocks and robots.",
                "section": "online",
                "counter": "103"
            },
            {
                "stu_name": "ZoÃ«",
                "last_name": "Phalen",
                "domain": "zoephalen.com\/em\/6020",
                "fact": "In 2014, Daniel Radcliffe rapped the Alphabet Aerobics song on the Jimmy Fallon show. I was so obsessed with anything Harry Potter (Daniel Redcliffe) related that I then taught myself every word of the song (I rap it a little faster if I do say so myself)",
                "section": "online",
                "counter": "106"
            },
            {
                "stu_name": "Kelly May",
                "last_name": "Sheehan",
                "domain": "kellymay.me\/em\/6020",
                "fact": "I love creating realistic paintings and often do family photos!",
                "section": "online",
                "counter": "105"
            },
            {
                "stu_name": "Kelly",
                "last_name": "Corder",
                "domain": "kellycordermedia.com\/4020",
                "fact": "I recently won an Emmy for coverage of the Braves' World Series Parade!",
                "section": "carino",
                "counter": "104"
            },
            {
                "stu_name": "Yerim",
                "last_name": "Roh",
                "domain": "yerimmie.quest\/4020",
                "fact": "I am a 4th year computer science student here at uga! I enjoy drawing and painting.",
                "section": "carino",
                "counter": "124"
            },
            {
                "stu_name": "Alexis",
                "last_name": "Faire",
                "domain": "alexisfaire.com\/6020",
                "fact": "I was the first baby born in my hospital on New Years Day in 1995.",
                "section": "carino",
                "counter": "82"
            },
            {
                "stu_name": "Jaelynn",
                "last_name": "Snyder",
                "domain": "jaelynnsnyder.com\/6020",
                "fact": " I am an aspiring photographer in hopes to work in the sports industry after graduation.",
                "section": "carino",
                "counter": "83"
            },
            {
                "stu_name": "Jillian",
                "last_name": "Petro",
                "domain": "jillianpetro.com\/4020",
                "fact": "Had our first baby in July - so trying to navigate this new mom life! ",
                "section": "online",
                "counter": "81"
            },
            {
                "stu_name": "Abbie",
                "last_name": "Hunt",
                "domain": "www.abbiehhunt.com\/6020",
                "fact": "In the last 10 months I have read 61 books!",
                "section": "online",
                "counter": "80"
            },
            {
                "stu_name": "Emuel",
                "last_name": "Aldridge",
                "domain": "emuel.com",
                "fact": "  I am the teacher",
                "section": "online",
                "counter": "77"
            },
            {
                "stu_name": "Katherine",
                "last_name": "Crocker",
                "domain": "katherineccrocker.com\/6020",
                "fact": "  During my free time, I like to work on tv\/film production sets as background!",
                "section": "online",
                "counter": "79"
            },
            {
                "stu_name": "Colt ",
                "last_name": "Yeargin",
                "domain": "coltyeargin.com\/em\/6020",
                "fact": " I have watched the entire series of The Office 13 times. ",
                "section": "physical",
                "counter": "129"
            },
            {
                "stu_name": "Nikki",
                "last_name": "Shotz",
                "domain": "nikkishotz.com\/em\/6020",
                "fact": "Justin Bieber and I have the same vocal coach!",
                "section": "physical",
                "counter": "130"
            },
            {
                "stu_name": "Emmie Cate ",
                "last_name": "Powell",
                "domain": "emmiecatepowell.com\/em\/6020",
                "fact": "  I have a cat named Winston ",
                "section": "physical",
                "counter": "132"
            },
            {
                "stu_name": "Ben",
                "last_name": "Albright",
                "domain": "benalbright.net\/em\/6020",
                "fact": "  I can't burp (Not even on accident)",
                "section": "physical",
                "counter": "133"
            },
            {
                "stu_name": "Nicolas",
                "last_name": "Bray",
                "domain": "nicolasbray.com\/nmc\/4020",
                "fact": "  I'm really interested in telescope astrophotography and collecting different sorts of guitars.  Also putting this here just in case: my website link redirects to nicolasjpbray.com\/nmc\/4020",
                "section": "carino",
                "counter": "153"
            },
            {
                "stu_name": "Jules",
                "last_name": "Sherrill",
                "domain": "juliasherrill.com\/em\/6020",
                "fact": "The bass guitarist of ACDC stayed at my house one time >:)",
                "section": "physical",
                "counter": "136"
            },
            {
                "stu_name": "Ana",
                "last_name": "Chirinos",
                "domain": "anachirinosi.com\/em\/6020",
                "fact": " I'm trilingual",
                "section": "physical",
                "counter": "152"
            },
            {
                "stu_name": "Phoebe",
                "last_name": "Finch",
                "domain": "phoebelizabethfinch.com\/em\/6020",
                "fact": "  I went to Greece this past summer!",
                "section": "physical",
                "counter": "138"
            },
            {
                "stu_name": "Katelyn",
                "last_name": "Boyd",
                "domain": "kofipressco.com\/emerging-media\/",
                "fact": "  I helped host my home town's very first graphic design conference including 5 famous designer guests! It was probably one of the best days of my life!",
                "section": "carino",
                "counter": "155"
            },
            {
                "stu_name": "Reese",
                "last_name": "Waller",
                "domain": "reesewaller.com\/em\/6020",
                "fact": "  I am a photographer, but I don't own any of my work #contract",
                "section": "physical",
                "counter": "141"
            },
            {
                "stu_name": "Molly",
                "last_name": "Shapiro",
                "domain": "mollyshapirodesign.com\/em1\/6020",
                "fact": "I have been bungee jumping twice, once at night and once during the day!",
                "section": "physical",
                "counter": "142"
            },
            {
                "stu_name": "Tara",
                "last_name": "Anastasoff",
                "domain": "taraanastasoff.com\/em1\/6020",
                "fact": "  90% of my closet is secondhand and I have my own vintage clothing business â€” Spectacle Vintage! ",
                "section": "physical",
                "counter": "143"
            },
            {
                "stu_name": "Jonathan",
                "last_name": "Goulbourne",
                "domain": "remontalo.net\/nmc\/4020",
                "fact": "  I love being around plants.",
                "section": "physical",
                "counter": "144"
            },
            {
                "stu_name": "Rachel",
                "last_name": "Ziner",
                "domain": "rachelziner.com\/em1\/6020",
                "fact": "I have two fake teeth because they never fully grew in! ",
                "section": "physical",
                "counter": "145"
            },
            {
                "stu_name": "Macy",
                "last_name": "Adams",
                "domain": "macyadams.info\/em\/6020",
                "fact": "  I am left handed!",
                "section": "physical",
                "counter": "146"
            },
            {
                "stu_name": "Stephanie",
                "last_name": "Lopez",
                "domain": "stephaniemlopez.com\/em1\/6020",
                "fact": "I have been an extra on two TV shows!",
                "section": "physical",
                "counter": "147"
            },
            {
                "stu_name": "Kylie",
                "last_name": "Sengpiel",
                "domain": "windblowingindogsface.com",
                "fact": "I've self-taught myself programming ever since I was 10 years old.",
                "section": "physical",
                "counter": "148"
            },
            {
                "stu_name": "Sydney",
                "last_name": "Amling",
                "domain": "sydneyamling.com\/em1\/6020",
                "fact": "  I once fell in the touch tank at the GA Aquarium.",
                "section": "physical",
                "counter": "150"
            },
            {
                "stu_name": "Katelyn",
                "last_name": "Boyd",
                "domain": "kofipressco.com\/emerging-media\/",
                "fact": "  I helped host my home town's very first graphic design conference including 5 famous designer guests! It was probably one of the best days of my life!",
                "section": "carino",
                "counter": "154"
            },
            {
                "stu_name": "Katelyn",
                "last_name": "Boyd",
                "domain": "\/home\/kofipres\/public_html\/6020index.html,480,1661217146000",
                "fact": "  ",
                "section": "carino",
                "counter": "156"
            },
            {
                "stu_name": "Beau",
                "last_name": "Benson",
                "domain": "swingshiftrnb.com\/em\/6020",
                "fact": "I would have to say that the most interesting thing about myself is my career in sports radio, I've worked with and met many people that I grew up watching and listening to on the TV and the radio. The picture I put on my website is me attending Life is Beautiful in 2019, right before the pandemic!",
                "section": "carino",
                "counter": "157"
            },
            {
                "stu_name": "Christal",
                "last_name": "Toso-Corona",
                "domain": "ctosocorona.com\/em\/6020",
                "fact": " I don't know how to whistle, I have a puppy named Atlas, I live in Decatur, and work remotely for an EdTech company!",
                "section": "carino",
                "counter": "158"
            },
            {
                "stu_name": "Rachel",
                "last_name": "Robbins",
                "domain": "learningmom.org\/em\/4020",
                "fact": "  I am a twin!",
                "section": "carino",
                "counter": "159"
            },
            {
                "stu_name": "Kiyan",
                "last_name": "Kojoori",
                "domain": "kiyankojoori.reclaim.hosting\/nmc\/4020",
                "fact": "I like to play volleyball.  ",
                "section": "carino",
                "counter": "160"
            },
            {
                "stu_name": "Spencer ",
                "last_name": "Luke",
                "domain": "spencer.lukepedia.net\/nmc\/4020",
                "fact": "I like to make maps in graphic engines of real life places. You get to take pictures for textures and really appreciate architecture.",
                "section": "online",
                "counter": "161"
            },
            {
                "stu_name": "Helium",
                "last_name": "Yang",
                "domain": "nmi.heliumyang.com\/nmc\/4020",
                "fact": "I am always down to try new foods! I am a proud boba addict!",
                "section": "online",
                "counter": "162"
            },
            {
                "stu_name": "Jaelynn",
                "last_name": "Snyder",
                "domain": "jaelynnsnyder.com\/em\/6020",
                "fact": "  I am an aspiring photographer in hopes to work within the sports industry on the social media team. I am also apart of Sigma Gamma Rho Sorority. ",
                "section": "carino",
                "counter": "166"
            },
            {
                "stu_name": "Demron",
                "last_name": "Glass",
                "domain": "demronglass.com\/em\/6020",
                "fact": "I have a husky named Vise, and have had him since I was 16! He's been with me every year that I've been in college.",
                "section": "online",
                "counter": "167"
            },
            {
                "stu_name": "Adam",
                "last_name": "Traina",
                "domain": "adamtraina.com\/em\/6020",
                "fact": "This is my first year at the University of Georgia as a part of the Emerging Media Online master's program. I am also a portrait photographer from New Jersey!",
                "section": "carino",
                "counter": "168"
            },
            {
                "stu_name": "Skylar",
                "last_name": "Little",
                "domain": "skylarlittle.com\/em\/6020",
                "fact": "  I have a pet hedgehog.",
                "section": "carino",
                "counter": "169"
            },
            {
                "stu_name": "Yunju",
                "last_name": "Lee",
                "domain": "sunndaiz.com\/nmc\/4020",
                "fact": "These days I've been trying to get into the habit of writing more regularly. I found out through that that I need to strengthen my vocabulary.",
                "section": "online",
                "counter": "170"
            },
            {
                "stu_name": "Katelyn",
                "last_name": "Boyd",
                "domain": "kofipressco.com\/6020",
                "fact": "  I can fall asleep anywhere at anytime!",
                "section": "carino",
                "counter": "171"
            },
            {
                "stu_name": "Raysean",
                "last_name": "Ricks",
                "domain": "rayseanricks.com\/em\/6020",
                "fact": "  Hi. I'm Raysean. I'm a podcaster. You can listen to me every week on In the Wild, Augusta University's official podcast.",
                "section": "online",
                "counter": "172"
            }
        ]




    }
})