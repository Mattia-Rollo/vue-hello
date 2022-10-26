const { createApp } = Vue


createApp({
    data() {
        return {
            message: 'hello worldo!',
            myClass: 'red',
            myImage: ''
        }
    },
    methods: {
        loadImage() {
            this.myImage = this.myImage === 'eevee.png' ? '' : 'eevee.png'
        }
    }
}).mount('#app')