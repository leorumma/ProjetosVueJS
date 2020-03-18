new Vue({
    el: "#desafio",
    data: {
        nome:'Leonardo',
        idade:24,
        imagemLink:'vue.jpeg',
        linkHTML:'<img src="vue.jpeg" height="400"></img>'
    },
    methods:{
        multiplicarPor3: function(){
            return this.idade * 3
        },
        gerarNumeroPseudoAleatorio: function(){
            return Math.random()
        }
        
    }
})
