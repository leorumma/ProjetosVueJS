<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuario: <strong>{{ inverterNome() }}</strong></p>
        <button @click="reiniciarNome"> Reiniciar Nome</button>
        <h1>a idade é {{idade}}</h1>
    </div>
</template>

<script>
import barramento from '@/barramento'
export default {
    props:{
        // Posso passar um Array de tipos [String,Array]
        nome: {
            type: [String],
            // // required: true,
            // default: 'anonimo'
            default: function(){
                return Array(10).fill(0).join(',')
            }
        },
        idade:{
            type: Number
        }
    },
    data(){
        return{

        }
    },
    methods:{
        inverterNome(){
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome(){
            const antigo = this.nome
            this.nome = 'Pedro Lucas'

            this.$emit('reiniciarNome', {
                novo:  this.nome,
                antigo
            })
        }
    },
        created(){
        barramento.quandoIdadeMudar(idade => {
            this.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
