const router = new VueRouter({
    base: "rutas",
    routes:[
        { path: '/list-person', component: ListPerson },
        { path: '/list-programing', component: ListPrograming },
        { path: '/personas', redirect: '/list-person' },
        { path: '*', component: PageNotFound },
    ]
});

var app = new Vue({
    el: '#app',
    router,
    data: {
        img_url: "",
        img_title: "",
    },
    mounted(){
        console.log(this.$router);
    }
});

