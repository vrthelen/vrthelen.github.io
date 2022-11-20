var computed = new Vue({
el: '#compute',
data: {
firstName: "Valentina",
lastName: "Thelen"
},
computed: {
    fullName() {
        return this.firstName + ' ' + this.lastName
    }
}
})