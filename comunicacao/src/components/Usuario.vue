<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <button @click="alterarNome"> Alterar Nome </button>
        <input type="text" v-model="nome">
        <h1> Nome é: <strong>{{nome}}</strong></h1>
        <h1> Idade é: <strong>{{idade}}</strong> </h1>
        <hr>
        <div class="componentes">
            <!-- Estou passando usando bind o valor da variavel nome para a propriedade nome -->
            <app-usuario-info  :nome="this.nome" :idade="this.idade" @reiniciarNome="nome = $event.novo + $event.antigo"/>
            <app-usuario-editar :idade="this.idade" />
            <!-- @alterarIdade="idade = $event +1" -->
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data(){
        return{
            nome: '',
            idade: 21
        }
    },
    methods:{
        alterarNome(){
            this.nome = 'Ana Carolina'
        }
    }
    
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
