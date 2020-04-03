<template>
    <div class="contadores">
        <h1>contadores</h1>
        <app-contador :key="c" v-for="c in 5" />
    </div>

</template>
<script>
import contador from './contador.vue'

export default {
    components:{
        'app-contador': contador
    }
}
</script>
<style>

</style>