const app = new Vue({
    el: '#app',
    data: {
        message: 'Hola',
        suma: 3 + 2,
        value: 6,
        isVisible: false,
        people: [
            "andres",
            "pepe",
            "panxo",
        ]
    },
    computed: {
        reversedMessage: function(){
            return this.message.split('').reverse().join('')
        }
    },
    methods: {
        calculateSum(value1,value2){
            return value1 + value2;
        }
    },
});

