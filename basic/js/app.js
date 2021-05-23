const Foo = { template: '<div>foo</div>'}
const Bar = { template: '<div>bar</div>'}

const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    el: '#app',
    router,
    data: {
        message: 'Hola',
        suma: 3 + 2,
        value: 6,
        isVisible: false,
        filtro_edad: 18,
        people: [
            "andres",
            "pepe",
            "panxo",
        ],        
        CopyArrayObjects: [],
        ArrayObjects: [
            {name: "andres", surname: "cruz", age: "28"},
            {name: "fernando", surname: "cruz", age: "14"},
            {name: "samuel", surname: "veracruz", age: "21"},
            {name: "andrea", surname: "flores", age: "12"},
            {name: "sara", surname: "hernandez", age: "19"},
        ],
        content_html: "<h1>hola</h1>",
        image_url: "img/img_01.jpg",
        text: "descripción",
        numero: 10,
        texto_v_model: 'Search',
        p_error: false,
        vue_logo: 'https://vuejs.org/images/logo.svg',
    },
    created: function(){
        this.CopyArrayObjects = this.ArrayObjects;
    },
    computed: {
        reversedMessage: function(){
            return this.message.split('').reverse().join('')
        }
    },
    methods: {
        calculateSum(value1,value2){
            return value1 + value2;
        },
        incrementar(){
            this.numero++;
        },
        decrementar(){
            this.numero--;
        },
        filterPeople: function(){
            this.people = this.people.filter(person => {
                return person.length > 5
            })
        },
        filterPeopleObjects: function(){
            this.ArrayObjects = this.CopyArrayObjects;
            this.ArrayObjects = this.ArrayObjects.filter(
                person => {
                    return person.age > this.filtro_edad
                }
            )
        },
    },
    watch: {
        numero: function(val){
            console.log("watch: "+val);
        }
    },
});

