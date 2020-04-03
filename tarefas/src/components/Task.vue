<template>
    <div class="task" :class="stateClass">
        {{task.name}}
    </div>
</template>

<script>
    export default {
        props: {
            task: {type: Object, required: true}
        },
        computed:{
            stateClass(){
                return{
                    pending: this.task.pending,
                    done: !this.task.pending
                }
            }
        }
    }
</script>

<style >
    .task{
        box-sizing: border-box;
        width: 350px;
        height: 150px;
        padding: 10px;
        border-radius: 8px;
        font-size: 2rem;
        font-weight: 300;
        cursor: pointer;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items:center ;
    }

    .pending {
        border-left: 12px solid rgba(255, 0, 26, 0.89);
        background-color: rgb(255, 0, 39);
    }

    .done {
        color: rgb(253, 255, 253);
        border-left: 12px solid rgb(40, 255, 0);
        background-color: rgb(40, 255, 0);
        text-decoration: line-through;
    }
</style>