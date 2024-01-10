let vm = Vue.createApp({
    data(){
        return {
            isPurple: false,
            selectedColour: '',
            size: 150
        }
    },

    computed:{
        circle_classes(){
            return { purple: this.isPurple }
        }
    }
}).mount('#app')