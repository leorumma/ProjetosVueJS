new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        exibirAlerta(event){
            alert("clicou em mim!")
        },
        pressionarTecla(event){
            this.valor = event.target.value
        }
    }
})