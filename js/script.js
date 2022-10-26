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
            let numeroRandom = 
            this.myImage = this.myImage === 'https://lorempokemon.fakerapi.it/pokemon/300/'+Math.floor(Math.random()*100) ? '' : 'https://lorempokemon.fakerapi.it/pokemon/300/'+Math.floor(Math.random()*100);
            console.log(this.myImage);
        }
    }
}).mount('#app')