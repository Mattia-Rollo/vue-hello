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
            this.myImage = this.myImage === 'eevee.png' ? '' : 'eevee.png'
        }
    }
}).mount('#app')