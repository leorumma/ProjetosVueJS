new Vue({
    el: '#desafio',
    data: {
        valor: 0,
        resultado : ''
    },
    computed: {
        monitorarValor(){
            return this.valor == 37 ? 'Igual a 37' : 'Diferente de 37'
        }
    },
    watch:{
        valor(novo, antigo){
            setTimeout( () => {
                this.valor = 0
            },5000)
        }
    }


});