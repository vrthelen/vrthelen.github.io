var header = new Vue({
    el: '#header',
    data: {
        yourName: 'Valentina',
        description: "Here I am",
        linkOne: "Introduction",
        link2: "My Portfolio",
        link3: "About Me",
        link4: "My List",
        link5: "Contact"

    }
})
var list = new Vue({
    el: '#list',
    data: {
        favorites: ['Chick-Fil-A','Panera','Chipotle','Dish']
    }
});

var portfolio = new Vue({
    el: '#portfolio',
    data:{
        portfolioTitle: "",
        image1: "images/one.jpg",
        imgText1: "Image One"
    }
})
var introduction = new Vue({
    el: '#introduction',
    data:{
        image1: "images/two.jpg",
        imgText1: "Image Two"
    }
})
var about = new Vue({
    el: '#about',
    data:{
        image1: "images/three.jpg",
        imgText1: "Image Three"
    }
})
var mylist = new Vue({
    el: '#mylist',
    data:{
        image1: "images/four.jpg",
        imgText1: "Image Four"
    }
})
var contact = new Vue({
    el: '#contact',
    data:{
        image1: "images/five.jpg",
        imgText1: "Image Five"
    }
})