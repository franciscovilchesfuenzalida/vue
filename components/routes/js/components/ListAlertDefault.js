Vue.component('list-alert-default',{
    props: {
        message: {
            type: String,
            default: "Cuerpo"
        }
    },
    template: `
    <div class="alert alert-warning" role="alert">       
        {{ message }} 
    </div>`,
});