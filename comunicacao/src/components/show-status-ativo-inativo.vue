<template>
    <div>
       <span v-if="status == 'a'" class="badge badge-primary">Ativo</span>
       <span v-if="status == 'i'" class="badge badge-danger">inativo</span>
    </div>
</template>

<script>
export default {
    props:{
        status:{
            type:String
        }
    }
}
</script>

<style scoped>

</style>