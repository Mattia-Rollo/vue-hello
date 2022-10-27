const { createApp } = Vue


createApp({
    data() {
        return {
            message: 'Ciao ho visto un Pokemon!',
            myClass: 'red text-center',
            myImage: ''
        }
    },
    methods: {
        loadImage() {
            let numeroRandom = Math.floor(Math.random()*10) +1;
            this.myImage = 'https://lorempokemon.fakerapi.it/pokemon/300/'+numeroRandom;
            console.log(this.myImage);
        }
    }
}).mount('#app')