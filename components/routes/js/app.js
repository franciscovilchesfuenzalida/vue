const router = new VueRouter({
    base: "rutas",
    routes:[
        { path: '/lists', component: Lists }
    ]
});

var app = new Vue({
    el: '#app',
    router
});

