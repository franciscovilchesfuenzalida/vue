const router = new VueRouter({
    base: "rutas",
    routes:[
        { path: '/list-person', component: ListPerson },
        { path: '/list-programing', component: ListPrograming }
    ]
});

var app = new Vue({
    el: '#app',
    router
});

