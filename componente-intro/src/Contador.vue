<template>
<div class="contador">
<h1>Contador:</h1>
<span>{{contador}}</span>
<button @click="incrementar">++</button>
<button @click="decrementar">--</button>
</div>
</template>

<script>
export default {
data(){
return{
contador: 0
}
},
methods: {
incrementar(){
this.contador++
},
decrementar(){
this.contador--
}
}
}
</script>

<style scoped>
.contador span{
    border-bottom: 1px solid #CCC;
    height: 30px;
    padding: 5px 25px;
}
.contador button{
    height: 30px;
    width: 30px;
    border-radius: 15px;
    background-color: #5E2;
    color: #FFF;
    margin-left: 10px;
    outline: none;
}
</style>