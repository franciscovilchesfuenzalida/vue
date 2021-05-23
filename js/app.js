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
        people: [
            "andres",
            "pepe",
            "panxo",
        ],
        content_html: "<h1>hola</h1>",
        image_url: "img/img_01.jpg",
        text: "descripción",
        numero: 10,
        texto_v_model: 'Search',
        p_error: false,
        vue_logo: 'https://vuejs.org/images/logo.svg',
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
    },
    watch: {
        numero: function(val){
            console.log("watch: "+val);
        }
    },
});

