<template>
    <div class="Contadores">
        <Contador v-for="i in 10" :key="i" />
    </div>

</template>

<script >
import Contador from './Contador.vue'

export default {
    components:{'Contador':Contador} 
}

</script>

<style>


</style>