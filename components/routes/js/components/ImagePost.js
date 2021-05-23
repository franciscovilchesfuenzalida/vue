Vue.component('img-post',{
    template: '<img :src="imgPost()" :alt="title" :title="title" />',
    props: {
        url: String,                
    },
    data: function(){
        return {
            title: "Título de la img"
        }
    },
    methods: {
        imgPost(){
            if(this.url !== ""){
                return this.url;
            }
            return '../img/img_02.jpg';
        }
    },
});

